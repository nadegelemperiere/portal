######## BUILDING REACT APP ########
FROM node:alpine3.18 as build

# Create Building folder
RUN mkdir /work
WORKDIR /work

# Gather source code
COPY package.json /work/package.json
COPY src /work/src
COPY public /work/public/

# Retrieve 3rd parties & build application
RUN npm install --silent && npm run build

######## SERVE REACT APP ########
FROM nginx:1.25.3-alpine

# Retrieve building artifact
COPY --from=build /work/build /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/conf.d/default.conf

# Upgrading curl to fix CVE-2023-46218
RUN apk update && apk add curl

# Healthcheck
HEALTHCHECK --interval=12s --timeout=12s --start-period=30s CMD curl --fail http://localhost || exit 1

# Create non root user
RUN adduser -D --home /home/portal portal && \
    touch /var/run/nginx.pid && \
    chown -R portal:portal /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html/ && \
    chown -R portal:portal /var/cache/nginx && \
    chown -R portal:portal /var/log/nginx && \
    chown -R portal:portal /etc/nginx/conf.d && \
    chown -R portal:portal /var/run/nginx.pid
USER portal

# Serve application
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
