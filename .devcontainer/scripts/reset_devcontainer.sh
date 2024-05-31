#!/bin/bash

# ? Use this script in order to reset the devcontainer to its initial state

# Delete the redis-data folder inside .devcontainer from the root
rm -rf .devcontainer/redis-data
rm -rf .devcontainer/postgres-data

# Delete the .turbo, dist and node_modules folder inside apps/gateway
rm -rf apps/gateway/.turbo
rm -rf apps/gateway/dist
rm -rf apps/gateway/node_modules

# Do the same inside the apps/web folder
rm -rf apps/web/.turbo
rm -rf apps/web/.next
rm -rf apps/web/node_modules

# Remove the root node_modules folder
rm -rf node_modules
