# this is a comment-line
#RUN echo hello
#RUN echo world

FROM node:10-alpine
ENV MY_PORT=8078
RUN echo here-0
RUN echo "MY_PORT=$MY_PORT"
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
EXPOSE 8080
CMD [ "node", "app.js" ]
RUN echo end
