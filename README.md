# todoapp
I created single page todo website where we can add tasks and list the tasks using MERN stack
# Getting Started with Create React App
for running application locally we need visual studio code latest version and node js version 18.18.2 to download visit google an type node js click on respective download option for operating system, 
npm version 10.2.1-to install lastest version use command npm install -g npm@latest
# running backend 
use command : node index.js
# running frontend 
use command cd filename for directing  to the respective folder and then 
npm start 
if above does not work 
# for backend install express ,mongodb,multer following are the commands
npm init -y
npm install express --save
npm install cors
npm install mondodb@4.1.0 --save
npm install multer //read the request from data
# frotend 
npx install -p npm@latest
# for database use mongodb cloud IN GOOGLE
if create database name: todoappdb
collection:todoappcollection
For CONNECTION_STRING url click on connect after creating db goto drivers->copy the url or
replace with existing url your username and password in index.js file in CONNECTION_STRING
for backend:https://localhost:5000/api/todoapp/GetTasks
for frontend:https://localhost:3000
when click add task on frontend it will displayed in below list and added to db as wells as displayed on https://localhost:5000/api/todoapp/GetTask json format

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
