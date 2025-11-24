# Etapa 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install -g @nestjs/cli

COPY . .
COPY .env .env

RUN npm run build

# Etapa 2: Run (más ligera)
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production
RUN npm install -g @nestjs/cli

COPY --from=builder /app/dist ./dist
COPY .env .env

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
