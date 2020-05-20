const db = require('../../models');

module.exports = app => {

    //displays all burgers
    app.get("/api/burgers", (req,res) => {
        db.Burgers.findAll()
        .then(results => {
            console.log(results);
            res.json(results)})
    });

    //TODO POST route for adding a burger
    //add front end spec for this

    // app.post("/api/todos", (req, res) => {
    //     const { name } = req.body
    //     db.Burgers.create({
    //     name:name
    //     }).then(results => res);
    //     res.redirect('/');
    // });

    //TODO DELETE route for deleting burgers
    //Add front end spec for this

    // app.delete("/api/todos/:id", function(req, res) {
    //     db.Todo.destroy({
    //         where:{ id:req.params.id }
    //     })
    //     .then(response => res.json(response))
    //     res.redirect('/');
    // });

    //TODO Update devour field our burger
    //add front end spec for this

    // app.put("/api/todos", function(req, res) {
    //     console.log(req.body);
    //     const { text, complete, id, createdAt, updatedAt} = req.body
    //     db.Todo.update(
    //     {
    //         text:text,
    //         complete:complete,
    //         createdAt:createdAt,
    //         updatedAt:updatedAt
    //     },
    //     {
    //         where:{ id:id }
    //     }
    //     ).then(response => res.json(response))
    //     res.redirect('back');
    // });
}