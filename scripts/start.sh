#!/bin/bash
# -------------------------------------------------------
# TECHNOGIX
# -------------------------------------------------------
# Copyright (c) [2022] Technogix SARL
# All rights reserved
# -------------------------------------------------------
# Module to start a development server to develop application
# -------------------------------------------------------
# Nadège LEMPERIERE, @01 march 2022
# Latest revision: 01 march 2022
# -------------------------------------------------------

# Retrieve absolute path to this script
script=$(readlink -f $0)
scriptpath=`dirname $script`

# Launch container in development mode
docker container run --rm --volume ${scriptpath}/../:/work:rw -p 3000:3000 -it --workdir /work node:alpine3.15 npm start