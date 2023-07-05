FROM node

# set working directory
WORKDIR /backend

# install app dependencies
COPY package*.json ./
RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]