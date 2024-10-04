# Step 1: Use a node image to build the admin frontend
FROM node:alpine as build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files to install dependencies
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the .env file (if it exists)
COPY .env ./

# Step 6: Copy the rest of the application code into the container
COPY . .

# Step 7: Build the application for production
RUN npm run build

# Step 8: Use nginx image to serve the built application
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose port 80 to access the frontend
EXPOSE 80
