GET http://localhost:3000/location/users

GET http://localhost:3000/location/feed
POST http://localhost:3000/location/feed
PUT http://localhost:3000/location/feed/:postid
DELETE http://localhost:3000/location/feed/:postid

GET http://localhost:3000/location/events <!-- events list
POST http://localhost:3000/location/events <-- create events
PUT http://localhost:3000/location/events/:eventid <-- edit event
DELETE http://localhost:3000/location/events/:eventid <-- delete event

GET http://localhost:3000/messages <-- bring messages
POST http://localhost:3000/messages/:userid <-- send msgs to that id
