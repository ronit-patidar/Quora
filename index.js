const express = require("express");
const app = express();
const port = 3000;

// to use ejs
const path = require("path");

const {v4:uuidv4} = require("uuid");

const methodOverride = require("method-override")

// to use PUT,DELETE,PATCH
app.use(methodOverride("_method"));

//This is Express middleware used to read data sent from an HTML <form> using the POST method.
app.use(express.urlencoded({extended : true}));

// These two lines configure Express to use EJS templates.

// this tells express that my template engine is EJS.
//So instead to sending HTML manually,i can render .ejs files.
app.set("view engine","ejs");

//This tells Express where your EJS files are located.
app.set("views",path.join(__dirname,"views"));

//Serve the files inside the public folder directly to the browser.
app.use(express.static(path.join(__dirname,"public")));

let posts = [
  {
    id : uuidv4(),  
    username : "john_doe",
    content : "I love coding"
  },
  {
    id : uuidv4(),
    username : "jane_doe",
    content : "hardwork is importent to acheive success"
  },
  {
    id : uuidv4(),
    username : "rahulkumar",
    content : "I got selected for my 1st intership!"
  }
];

app.get("/posts",(req,res)=>{
  res.render("index.ejs",{posts});
})

app.get("/posts/new",(req,res)=>{
  res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
  let {username,content} = req.body;
  let id = uuidv4();
  posts.push({id,username,content})
  res.redirect("/posts");
})
app.get("/posts/:id",(req,res)=>{
  let {id} = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs",{post});
})
app.patch("/posts/:id",(req,res)=>{
  let {id} = req.params;
  let post = posts.find((p) => id === p.id);
  let newcontent = req.body.content;
  post.content = newcontent;
  console.log(post);
  res.redirect("/posts");
})
app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  if (!post) {
    return res.status(404).send("Post not found");
  }
  res.render("edit.ejs", { post });
});
app.delete("/posts/:id",(req,res)=>{
  let {id} = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
})




app.listen(port,()=>{
  console.log(`listening on ${port}`) 
})