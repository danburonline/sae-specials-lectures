#!/bin/bash

# Install Bun as a faster drop-in replacement for NPM
npm install -g bun@1.0.13

# Install dependencies via Bun from the Bun lockfile
# ? The Bun lockfile is a binary file that contains a list of all dependencies
bun install
