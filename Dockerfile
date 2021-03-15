FROM node:8-alpine
LABEL author="Emanuele Disco <emanuele.disco@gmail.com>"

RUN yarn global add pm2@3.5.1

ENV SERVER_HOST="0.0.0.0" \
    SERVER_PORT=3000 \
    SERVER_NAME="PMIS"

COPY . /usr/share/seminar/
WORKDIR /usr/share/seminar/

RUN set -ex && \
    apk add --no-cache --virtual \
      nodejs git && \
    # https://stackoverflow.com/questions/52196518/could-not-get-uid-gid-when-building-node-docker
    npm config set unsafe-perm true && \
    #npm install -g pm2 && \
    npm install

EXPOSE 3000 9615

CMD ["pm2-runtime", "seminar.js", "--web", "9615"]