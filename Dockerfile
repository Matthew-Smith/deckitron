FROM node:8.11.3
RUN mkdir -p /usr/src/app
# RUN ls -al
WORKDIR /usr/src/app/
# RUN ls -al
# COPY package.json /usr/src/app
# RUN npm install
COPY . /usr/src/app
# RUN ls -al
EXPOSE 5000
CMD [ "npm", "start" ]