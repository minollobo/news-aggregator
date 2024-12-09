# News Aggregator

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)


## General Information
- Built a mobile-responsive news aggregator website using React.js. Features include article search and filtering by keyword, date, category, and source. Additionally, the website offers a personalized news feed, enabling users to customize their content based on preferred sources, categories, and authors. The project follows best practices and is containerized with Docker 


## Technologies Used
- React
- Tailwind CSS
- Docker
- Context API
- React Hooks
- Git

## Screenshots
<img src="https://raw.githubusercontent.com/minollobo/news-aggregator/refs/heads/main/project-home-ss.png" alt="Desktop" height="300px"> <img src="https://raw.githubusercontent.com/minollobo/news-aggregator/refs/heads/main/project-personalised-ss.png" alt="Phone" height="300px">


## Setup
How to Run the Project using NPM:
- Clone this repository to your local machine
- Run `npm install`
- Run `npm start` to launch the web app


How to Run the Project using Docker:
#### Prerequisites
- Docker installed on your local machine.
- Logged in to Docker Hub

#### Pulling the Docker Image
To pull the latest version of my frontend application from Docker Hub, run:

- docker pull minollobo/news-app:v1.0

#### To start the application on your local machine
- docker run -p 3000:3000 minollobo/news-app:v1.0


## Project Status
Project is: _in progress_


## Room for Improvement

Room for improvement:
- Optimize article search and filtering performance.
- Add server-side pagination for large datasets.
- Implement rate-limiting on API requests to improve scalability.

To do:
- Design and implement a custom backend API using MongoDB.
- Set up routes for article fetching and filtering.
- Add user authentication and personalized feed endpoints


## Acknowledgements
- Many thanks to [News Api](https://newsapi.org/) for providing the powerful API that makes fetching and filtering news articles seamless for this project.
