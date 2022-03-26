# Clone or download the repository 
git clone https://github.com/rathanDev/oracle-react-app.git

# Go to the root of the project and install all project's dependencies:
npm i

# Run npm server 
npm start 

# Run build 
npm run build

# Run test 
npm test 

# Build docker image 
docker build -t rathandev/oracle-react-app .

# Verify created image
docker images

# Run docker image 
docker run -d -it  -p 80:80/tcp --name react-app rathandev/oracle-react-app:latest