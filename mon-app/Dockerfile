FROM node

# set working directory
WORKDIR /my-app

# install app dependencies
COPY package*.json .
RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]