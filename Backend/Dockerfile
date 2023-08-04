FROM maven:3.9.1-eclipse-temurin-11-alpine
WORKDIR /app
COPY ./Backend-api ./Backend-api
COPY ./Backend-boot ./Backend-boot
COPY ./Backend-model ./Backend-model
COPY ./Backend-ws ./Backend-ws
COPY pom.xml .
EXPOSE 33333
RUN mvn install
WORKDIR /app/Backend-boot
CMD mvn spring-boot:run