FROM node:22.2 AS installer
WORKDIR /app/
COPY package*.json ./
RUN npm install

FROM node:22-slim
WORKDIR /app/

COPY --from=installer /app/node_modules /app/node_modules

COPY . .

RUN npm run build

CMD ["node", "dist/apps/api/main.js"]

# FROM node:22-alpine AS build
# WORKDIR /
# COPY package*.json ./
# RUN npm ci
# COPY . .
#
# FROM node:22-alpine
# WORKDIR /
# COPY package.json package-lock.json* ./
# RUN npm install
# COPY --from=build /app/dist ./dist
# COPY --from=build /app/node_modules ./node_modules
# COPY --from=build /app/package.json ./package.json
# RUN npm run build
# EXPOSE 3000
# CMD ["npm", "run", "start:prod"]
