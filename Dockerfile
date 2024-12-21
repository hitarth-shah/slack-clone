# Use the official Node.js image as the base image
FROM node:slim  

RUN mkdir -p /usr/src/slack-clone
# Set the working directory
WORKDIR /usr/src/slack-clone

# Copy package.json and package-lock.json
COPY . /usr/src/slack-clone

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "dev"]