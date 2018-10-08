// import request from "request";
import axios from "axios";

// var options = {
//   method: 'GET',
//   url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
//   headers:
//     {
//       'Postman-Token': 'f33caba7-93f1-40ee-8d71-5ecccf17043d',
//       'Cache-Control': 'no-cache',
//       q: 'tarrif',
//       'api-key': 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931'
//     }
// };

export default {
  getRandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getArticles: query => {
    return axios.get("https://dog.ceo/api/breed/" + query + "/images");
  }
};



