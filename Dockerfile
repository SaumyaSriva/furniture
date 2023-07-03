# Stage 1: Build the Angular app
FROM node:16.13-alpine as builder

WORKDIR /app

# Install Angular CLI
RUN npm install -g @angular/cli@12.2.0

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm ci --quiet

# Copy the rest of the application files
COPY . .

# Build the Angular app
RUN ng build 

# Stage 2: Create the production-ready image
FROM nginx:1.25.1-alpine

# Remove the default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy the built Angular app from the previous stage to the Nginx public directory
COPY --from=builder /app/dist/* /usr/share/nginx/html/

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the default port for Nginx
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
