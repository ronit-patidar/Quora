RESTfull APIs
Representational State Transfer(REST).
REST is an architectural style that defines a set of constraints(rules) to be used for creating web services.
RESTfull APIs are used to perform CRUD operations.
CREATE , READ , UPDATE , DELETE.

CRUD Operations.
GET -> retrives resources.
POST -> submits new data to the server.
PUT -> updates existing data completely.
PATCH -> update existing data partially.
DELETE -> remove data.

| HTTP Method | Route      | Description            | Action Type  |
| ----------- | ---------- | ---------------------- | ------------ |
| GET         | /posts     | Get data for all posts | INDEX (main) |
| POST        | /posts     | Add a new post         | CREATE       |
| GET         | /posts/:id | Get one post using ID  | VIEW         |
| PATCH       | /posts/:id | Update a specific post | UPDATE       |
| DELETE      | /posts/:id | Delete a specific post | DESTROY      |

res.send() (sends text,html,object)
res.render() (ejs)
res.redirect(url) 

forms methods="" only get and post
if i have to use another operation then i use method-override package.
POST -> DELETE
POST -> PATCH 
POST -> PUT 
