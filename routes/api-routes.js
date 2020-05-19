// our routes to handle front-end requests.

const db = require('../models')

module.exports = app => {

    app.get("/api/burgers", (req,res) => {
        db.Burgers.findAll()
        .then(results => {
            console.log(results);
            res.json(results)})
    });

    // POST route for adding a burger
  app.post("/api/todos", (req, res) => {
    const { name } = req.body
     db.Burgers.create({
       name:name
     }).then(results => res);
     res.redirect('/');
   });
 
   // DELETE route for deleting burgers
   app.delete("/api/todos/:id", function(req, res) {
     db.Todo.destroy({
       where:{
         id:req.params.id
       }
     }).then(response => res.json(response))
     res.redirect('back');
   });
 
   // Update our burger
   app.put("/api/todos", function(req, res) {
     console.log(req.body);
     const { text, complete, id, createdAt, updatedAt} = req.body
     db.Todo.update(
       {
         text:text,
         complete:complete,
         createdAt:createdAt,
         updatedAt:updatedAt
       },
       {
         where:{ id:id }
       }
     ).then(response => res.json(response))
     res.redirect('back');
   });





}