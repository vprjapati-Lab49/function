FROM nginx:1.13.8

ARG STATS_WEB_HOST=stats-web
ARG STATS_WEB_PORT=8080
ARG STATS_WEB_PUBLIC_PATH
ARG STATS_UI_PUBLIC_PATH

ENV STATS_WEB_HOST ${STATS_WEB_HOST}
ENV STATS_WEB_PORT ${STATS_WEB_PORT}
ENV STATS_WEB_PUBLIC_PATH ${STATS_WEB_PUBLIC_PATH}
ENV STATS_UI_PUBLIC_PATH ${STATS_UI_PUBLIC_PATH}

# Assets
ADD ./dist/build /usr/share/nginx/html/

# nginx config
ADD ./docker/nginx.conf /etc/nginx/nginx.conf
ADD ./docker/nginx-selfsigned.crt /ssl/
ADD ./docker/nginx-selfsigned.key /ssl/
ADD ./docker/start-nginx-qa.sh /
RUN chmod +x ./start-nginx-qa.sh
ENTRYPOINT ["/bin/sh", "-c" , "./start-nginx-qa.sh"]
