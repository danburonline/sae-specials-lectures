# Step 1: Set the bun version
ARG BUN_VERSION=1.0.10

# Step 2: Set the base image with bun installed
FROM oven/bun:${BUN_VERSION} as base

# Step 3: Set the working directory in the Docker image
WORKDIR /app

# Step 4: Set the environment variable
ENV NODE_ENV=production

# Step 5: Copy package.json and bun.lockb files into the Docker image
COPY apps/gateway/package.json bun.lockb ./

# Step 6: Install dependencies using bun
RUN bun install

# Step 7: Set up the build stage with node installed
FROM node:18 as build

# Step 8: Set the working directory in the build stage
WORKDIR /app

# Step 9: Copy the node_modules directory from deps stage to build stage
COPY --from=base /app/node_modules ./node_modules

# Step 10: Copy the source code into the build stage
COPY apps/gateway .

# Step 11: Build the application
RUN npm run build

# Step 12: Expose port 3000 for the application
EXPOSE 8000

# Step 13: Define the command to run the application
CMD ["npm", "run", "start"]
