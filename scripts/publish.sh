#!/bin/bash
# -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# Script to trigger aws amplify webhook
# -------------------------------------------------------
# Nadège LEMPERIERE, @13 january 2022
# Latest revision: 11 march 2022
# -------------------------------------------------------

# Retrieve absolute path to this script
script=$(readlink -f $0)
scriptpath=`dirname $script`

# Launch tests in docker container
docker run  -it --rm --privileged \
            -v /var/run/docker.sock:/var/run/docker.sock \
            --volume $scriptpath/../:/home/technogix/portal:rw \
            --volume $scriptpath/../../vault/:/home/technogix/vault \
            --env VAULT_KEY=$VAULT_KEY \
            --workdir /home/technogix/portal \
            technogix/terraform-python-awscli:v3.0.0 \
            ./scripts/trigger.sh -k VAULT_KEY $@
