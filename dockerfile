# Build stage
FROM node:22.2 AS build
WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package*.json ./
# Install Nx globally for build commands
RUN npm install -g nx
# Install all dependencies (including dev dependencies needed for build)
RUN npm ci

# Copy source code with proper Nx workspace structure
COPY nx.json tsconfig*.json ./
COPY apps ./apps
COPY libraries ./libraries

# Copy configuration files
COPY eslint.config.mjs ./
COPY .prettierrc .prettierignore ./

# Build the application with Nx
# Build the application with Nx
RUN nx build api --prod
# Production stage
FROM node:22-slim
WORKDIR /app

# Copy only the necessary files from build stage
# Copy only the necessary files from build stage
COPY --from=build /app/dist/apps/api ./dist

# Copy package files for production dependencies
COPY --from=build /app/package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Set NODE_ENV
ENV NODE_ENV=production

# Optional: Run as non-root user for better security
USER node

# Expose the port your app runs on
EXPOSE 3000

# Start the application
# Start the application
CMD ["node", "dist/main.js"]
