const axios = require("axios");
const router = require("express").Router();

// router.get("/recipes", (req, res) => {
//   axios
//     .get("https://api.nytimes.com/svc/search/v2/articlesearch.json?", { params: req.query })
//     .then( ({ data: {result}}) => res.json(result))
//     // .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });

router.get("/test", (req, res) => {
  const data = {
    _id: "5bbb6453068401528a2df0d1",
    headline: "Fiat Chrysler Prepares to Produce Plug-In Hybrid Jeep Renegade",
    byline: "By REUTERS",
    pubDate: "2018-10-08T14:06:09+0000",
    snippet: "Fiat Chrysler (FCA) said on Monday it had kicked-off preparations for the production of a plug-in hybrid version of the Jeep Renegade as the carmaker pushes ahead with its electrification drive to meet tougher emissions rules. ",
    url: "https://www.nytimes.com/reuters/2018/10/08/business/08reuters-fiatchrysler-jeep-hybrid.html"
  };
  Article.create(data)
    .then( data => {
      console.log(data)
      res.json(data);
    })
    .catch(err => {
      console.log(err.message);
      res.json({error: err});
    }) 
})

// function buildQueryURL() {
//   var queryURL = "";
//   params = {
//     "api-key": "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
//     "q": $("#search-term").val().trim(),
//   }
// }

module.exports = router;
