# movie-platform
Movie platform corresponding to a job interview for junior full stack developer

## Setup

Please install `Docker` and `Docker compose` first.

https://www.docker.com/

After installation, run the following command to create a local Docker container.

```bash
docker-compose build
docker-compose up -d
```

If you want to check the log while Docker container is running, then try to use following command:

```bash
docker-compose up
```

If Docker is running successfully, the API and DB server will be launched as shown in the following:

- BACKEND server: http://localhost:8000
- DB server: http://localhost:3306
- FRONTEND: http://localhost:3000

_Be careful, it won't work if the port is occupied by another application._

If you want to check docker is actually working, then you can check it with following command:

```bash
docker ps
```

If you want to go inside of docker container, then try to use following command:

```bash
docker exec -it backend sh
docker exec -it frontend sh
docker exec -it mysql sh
```

For shutdown of the docker instance, please use following command:

```bash
docker-compose down
```

## Note
### How to add a library

You may want to add libraries such as requests, in which case follow these steps:

- Add the library to requirements.txt

e.g., if you want to add `requests`:

```
requests==2.30.0
```

Then try a re-build and see.

```
docker-compose build
docker-compose up
```

### Python library packages

Some of the Python packages used in this app are defined in `api/requirements.txt`.
Also you can add other packages there.

### Environment variable

Some of environment variable, like a database name and user is defined in `local-env`.
You can customize it as you like.

If you will use docker, then please define your environment variable to `local-env`.
However, you will NOT use docker, then please create `.env` file for your API server.

### DB Migrations

When creating DB docker container, docker will create predefined tables in `mysql/db` folder.
That help your team to control versions of database.

The sample table definition has already been created with the name `create_user_table.sql`.

### API documentation

http://localhost:8000/redoc
