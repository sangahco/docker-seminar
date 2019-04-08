# It's seminar time!

## Run with Node.js

Before doing anything else make sure you have these applications:

- [npm](https://nodejs.org/it/download/)
  > This is used for running **bower** and downloading required libraries

- [git](https://git-scm.com/downloads)
  > This is the SVN used for downloading and updating this repository

**`npm` and `git` are required during development only, they are not used in production!**


### 1. Get this source

```
$ git clone https://github.com/sangahco/docker-seminar.git
```

### 2. Run the application

Go inside the new folder and execute these commands from a console:


```
$ npm install
$ npm start
```

``npm install`` will install the necessary modules and will prepare the root folder with necessary dependencies.

## Run with Docker

Docker images ready to run.

### Requirements

First make sure *Docker* and *Docker Compose* are installed on the machine with:

    $ docker -v
    $ docker-compose -v

If they are missing, follow the instructions on the official website (they are not hard really...):

- [Docker CE Install How-to](https://docs.docker.com/engine/installation/)
- [Docker Compose Install How-to](https://docs.docker.com/compose/install/)


### How to Use

    $ docker-compose build
    $ docker-compose up -d


> [PM2](http://pm2.keymetrics.io/) is the process manager for Node.js applications that we use for this app, if you are curious about it!