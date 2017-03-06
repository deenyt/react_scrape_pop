var axios = require('axios');

//  API key: 
var authKey = "46cf7f2e13ee4ecab2fa58dec6e00e93";

var helpers ={
	
 search : function(term, startYear, endYear){
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + term + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1231";

		return axios.get(queryURL)
			.then(function(queryResponse){

				var resultsArr = [];
				for(var i=0;i<5;i++){
					resultsArr.push({"title": queryResponse.data.response.docs[i].headline.main, "date": queryResponse.data.response.docs[i].pub_date, "url": queryResponse.data.response.docs[i].web_url});
				}

				return resultsArr;
		})

	},
 
 postArt: function(title, date, url){		
		return axios.post('/api/saved', {title: title, date: date, url: url})
			.then(function(results){

				return(results);
			})
	},

 getArt: function(){
 		return axios.get('/api/saved')
 		.then(function(response){
 			console.log(response);
 			return(response);
 		})
	}

}

module.exports = helpers;