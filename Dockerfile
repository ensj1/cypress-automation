# Dokerfile for setip jenkins locally
FROM jenkins/jenkins:2.426.3-jdk17

USER root

ENV JAVA_TOOL_OPTIONS -Dfile.encoding=UTF-8
ENV LANG="en_US.UTF-8"

RUN apt-get update && apt-get install -y lsb-release docker-ce-cli nodejs npm libgtk2.0-0 \
    wget libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb

RUN curl -fsSLo /usr/share/keyrings/docker-archive-keyring.asc \
    https://download.docker.com/linux/debian/gpg
RUN echo "deb [arch=$(dpkg --print-architecture) \
    signed-by=/usr/share/keyrings/docker-archive-keyring.asc] \
    https://download.docker.com/linux/debian \
    $(lsb_release -cs) stable" > /etc/apt/sources.list.d/docker.list
# You can also install node16 plugin in Jenkins instead of installing node directly in the image

USER jenkins

RUN jenkins-plugin-cli --plugins "blueocean docker-workflow"