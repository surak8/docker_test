# syntax=docker/dockerfile:1

# Declare the build argument in the global scope
ARG NAME="joe"
ARG RIKTEST="rik-test"

FROM alpine
# Consume the build argument in the build stage

ENV MY_PORT=8078

ARG NAME
ARG RIKTEST
RUN echo "NAME = $NAME"

RUN echo "RIKTEST = $RIKTEST"
RUN echo "MY_PORT = $MY_PORT"

RUN echo DONE
