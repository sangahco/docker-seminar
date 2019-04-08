FROM keymetrics/pm2:8-alpine
LABEL author="Emanuele Disco <emanuele.disco@gmail.com>"

ENV SERVER_HOST="0.0.0.0" \
    SERVER_PORT=3000 \
    SERVER_NAME="PMIS"

COPY . /usr/share/seminar/
WORKDIR /usr/share/seminar/

RUN set -ex && \
    apk add --no-cache --virtual \
      nodejs git && \
    npm install -g pm2 && \
    npm install

EXPOSE 3000 9615

CMD ["pm2-runtime", "server.js", "--web", "9615"]