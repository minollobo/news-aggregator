## Running My Frontend Application with Docker

### Prerequisites
- Docker installed on your local machine.
- Logged in to Docker Hub

### Pulling the Docker Image
To pull the latest version of my frontend application from Docker Hub, run:

docker pull minollobo/news-app:v1.0

### To start the application on your local machine

docker run -p 3000:3000 minollobo/news-app:v1.0

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
