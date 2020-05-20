const db = require('../../models');

module.exports = app => {

    //serve index to the root route
    app.get("/", (req,res) => {
        db.Burgers.findAll()
        .then(results =>{
            console.log(results);
            results = results.map(Burger => Burger.dataValues );
            res.render('index',{ burger:results });
            res.status(200);
        })
        .catch(error => {
            console.log(error);
            res.status(500)
        })
    });

}
