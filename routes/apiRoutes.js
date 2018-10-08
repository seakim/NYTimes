const axios = require("axios");
const router = require("express").Router();

router.get("/recipes", (req, res) => {
  axios
    .get("https://api.nytimes.com/svc/search/v2/articlesearch.json?", { params: req.query })
    .then( ({ data: {result}}) => res.json(result))
    // .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});



/**
 * pulls information from the form and build the query URL
 * @returns {string} URL for NYT API based on form inputs
 */
function buildQueryURL() {
  // queryURL is the url we'll use to query the API
  var queryURL = "";

  params = {
    "api-key": "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
    "q": $("#search-term").val().trim(),
    "startYear": $("#start-year").val().trim() + "0101",
    "endYear": $("#end-year").val().trim() + "0101",
  }
}

  // If the user provides a startYear, include it in the queryParams object

  // If the user provides an endYear, include it in the queryParams object
//   var endYear = $("#end-year")
//     .val()
//     .trim();

//   if (parseInt(endYear)) {
//     queryParams.end_date = endYear + "0101";
//   }

//   // Logging the URL so we have access to it for troubleshooting
//   console.log("---------------\nURL: " + queryURL + "\n---------------");
//   console.log(queryURL + $.param(queryParams));
//   return queryURL + $.param(queryParams);
// }




module.exports = router;
