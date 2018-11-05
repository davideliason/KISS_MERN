## KISS MERN
### Realy simple MERN app
#### [David Eliason](www.davethemaker.com)

### What
This is a simple, barebones app that spins up an Express server (on port 8080), serving up JSON data on a route so that it acts as a RESTful API endpoint. The express server does double-duty, so that it also provides the client-side data as well; all non-API routes are directed to the static files provided by the create-react-app. 

### Notes
This is purposefully kept really simple, without bringing in webpack, react-router or redux, etc,  to keep the focus on the bigger picture. Since this repo is used in a tutorial for spinning up an EC2 instance/server on AWS and providing a MERN app, the emphasis is on that, without getting too bogged down on the details of the MERN code itself.

### To Use
1. clone this repo into your EC2 instance
2. cd into the repo folder
3. $ npm install   

Now, the code that you need to spin up the server is on your EC2 instance, but it will only work if the production-ready CRA is in place. we get that by going into the 'client' sub-folder (in your CLI within the EC2 instance), and running '$ npm run build'. That will create the CRA code that is needed for the running the MERN app.