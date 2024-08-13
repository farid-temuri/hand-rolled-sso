FROM oven/bun:alpine

COPY package.json .
COPY bun.lockb .

RUN bun install --production

COPY . .

ENV NODE_ENV production
CMD ["bun", "src/index.ts"]

EXPOSE 3000
