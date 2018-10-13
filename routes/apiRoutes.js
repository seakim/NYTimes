const Article = require("../models/Article");

module.exports = function(app) {

  app.post("/api/article", (req, res) => {
    Article.create(req.body)
      .then( result => res.json(result) )
      .catch( err => {
        console.log(err);
        res.end();
      });
  });

  app.get("/api/article", (req, res) => {
    Article.find()
      .then( result => res.json(result) )
      .catch( err => console.log(err) );
  })

  app.delete("/api/article/:id", (req, res) => {
    Article.deleteOne( {_id: req.params.id})
      .then( result => res.json(result) )
      .catch( err => console.log(err) )
  })
}
