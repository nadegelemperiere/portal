######## BUILDING REACT APP ########
FROM node:alpine3.15 as build

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
FROM nginx:1.21.6-alpine

# Retrieve building artifact
COPY --from=build /work/build /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/conf.d/default.conf

# Healthcheck
HEALTHCHECK --interval=12s --timeout=12s --start-period=30s CMD curl --fail http://localhost || exit 1  

# Create non root user
RUN adduser -D --home /home/technogix technogix && \
    touch /var/run/nginx.pid && \ 
    chown -R technogix:technogix /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html/ && \
    chown -R technogix:technogix /var/cache/nginx && \
    chown -R technogix:technogix /var/log/nginx && \
    chown -R technogix:technogix /etc/nginx/conf.d && \
    chown -R technogix:technogix /var/run/nginx.pid
USER technogix 

# Serve application
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
