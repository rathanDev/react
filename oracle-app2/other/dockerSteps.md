docker build -t rathandev/react-app .

docker images

docker run -d -it  -p 80:80/tcp --name react-app rathandev/react-app:latest