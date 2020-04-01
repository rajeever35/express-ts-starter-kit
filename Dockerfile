FROM node:lts

RUN sudo chmod 777 /var/run/docker.sock

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN yarn install

EXPOSE 9000

RUN docker pull rajxxx/express-ts:3

RUN docker run -d -p 9000:9000 rajxxx/express-ts:3

CMD [ "yarn", "start" ]
