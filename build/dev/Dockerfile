FROM node:lts

# configure timezone
ENV TIME_ZONE=Europe/Paris

RUN echo $TIME_ZONE | tee /etc/timezone \
  && dpkg-reconfigure -f noninteractive tzdata

# configure workspace
RUN mkdir /usr/app && chown -R node /usr/app
WORKDIR /usr/app

USER node