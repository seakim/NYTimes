import axios from "axios";
import nytkey from "../config"
export default {
  getArticles: (q, begin_date, end_date, sort, page) => {
    return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
        api_key: nytkey, 
        q: q,
        begin_date: begin_date,
        end_date: end_date,
        sort: sort,
        page: page
      }
    });
  }
};



