FROM node:14 # Vulnerable Node.js version
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]
