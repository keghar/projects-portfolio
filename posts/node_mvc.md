---
title: "CRUD App and MVC"
date: "November 4, 2022"
excerpt: "Creating CRUD apps in Node using MVC."
cover_image: /assets/posts/MVC.png
---

## NODE.JS and CREATE READ UPDATE DELETE(CRUD)

Currently, I'm learning Node.js. I've created a couple of projects in node along with express and MongoDB. The apps are CRUD apps, which stand for Create, Read, Update, Delete. Create in the crud app makes a POSTrequest. Posting on a social media app is an example of this. You fill out a form, hit the post, or send button and that action sends a post request which then sends that information to a database. Read is exactly how it sounds. Read in a crud app makes a GET request. Any time a page is visited, it submits GET requests to get information from the database and shows it to the user. An Update request sends a PUT request to update information on the database which with then update information in the app or page. An example of this would be liking a post on social media. A delete request does exactly what it says. It sends a DELETE request to the database to delete information that has been requested to be deleted. An example of this would be deleting a post on social media.

## MVC

In creating my apps I discover a concept called MVC. MVC is a way of structuring the code to separate concerns, make it easier to find errors, and make code reusable. MVC stands for Model View Controller. The model is the structure of the schemas and database tables. It contains data-related logic and it communicates with the controller. The controller receives input from the view, processes the request, gets data from the model, and passes data to the view. The view is what the user sees. It is usually HTML and CSS and also uses template engines such as EJS and express handlebars. The vire also communicates with the controller and can be passed dynamic values from the controller.

As you can see in the diagram, as the user makes an input into the browser, the controller connects with the model to then get data, which to then send to the view to change what is seen in the browser. For example, the user makes a POST request. The request is sent to the controller which then sends the information to the database. After the post request, there is a get request which goes to the controller and then to the model to get the information from the database, then returns it to the controller to send to the view to update it.

I am learning a lot. Hoping to have a project worth posting soon. in the mean time, you can check out GitHub for the simple apps I've created.

Take Care
