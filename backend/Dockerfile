# Step 1: Use an appropriate base image
FROM node:alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to install dependencies first
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the backend code into the container
COPY . .

# Step 6: Expose the port the app runs on
EXPOSE 5000

# Step 7: Specify the command to run the server
CMD ["node", "index.js"]
