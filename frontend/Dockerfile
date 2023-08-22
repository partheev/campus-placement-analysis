# Stage 1 - Build
FROM node:16-alpine as builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build


#Stage 2 - Running
FROM node:16-alpine

WORKDIR /app

COPY --from=builder /app/dist /app/dist

RUN npm i serve -g

EXPOSE 3000

CMD ["serve","-s","dist","-l","3000"]

