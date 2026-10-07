FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --omit=dev

COPY --chown=node:node server ./server

RUN mkdir -p /app/server/data \
    && chown -R node:node /app/server/data

ENV NODE_ENV=production
ENV PORT=3001

EXPOSE 3001

USER node

CMD ["node", "server/index.js"]
