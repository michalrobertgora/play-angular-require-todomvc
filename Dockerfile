FROM openjdk:8u121-jre-alpine
LABEL maintainer "contact@eiipii.com"

ARG APP
ARG VERSION
ADD $APP-$VERSION $APP-$VERSION
#RUN chmod +x /$APP-$VERSION/bin

ENV JAVA_OPTS=""
#ENTRYPOINT [ "sh", "-c", "$APP-$VERSION/bin/$APP" ]
ENTRYPOINT [ "/bin/sh" ]