FROM postgres:14-alpine

ENV POSTGRES_USER=Fullstack_2023_1_G3
ENV POSTGRES_PASSWORD=1qaz2wsx
ENV POSTGRES_DB=2023-BFS-1-G3

COPY dump-2023-BFS-1-G3.sql /docker-entrypoint-initdb.d/

EXPOSE 5432
