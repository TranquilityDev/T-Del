var request = require("request");
 
var cheerio = require("cheerio");

for (i=0; i<300/30; i++){
 	First = i*30;
 	Last = First+29;
		var url = "https://www.dcard.tw/_api/forums/fcu/posts?popular=false&before="+Last+"&after="+First;
	 
				request( url, function (error, response, body) {
				  if (!error && response.statusCode == 200) {
						fs.appendFile('/home/user/Tranquility/TempData/test.json', JSON.parse(body)+'\n', function (err) {
									console.log(JSON.parse(body));
								}); 
					// Show the HTML for the Google homepage.
				  }
				})

 		console.log(First+"to"+Last+"is Down");
}


********************************************************   var request = require("request");
var fs = require("fs"); 
var cheerio = require("cheerio");


//Total 7523124

//Finish <2000000
for (i=0; i<200000/30; i++){
 	First = i*30;
 	Last = First+29;
		var url = "https://www.dcard.tw/_api/forums/fcu/posts?popular=false&before="+Last+"&after="+First;
	 
				request( url, function (error, response, body) {
				  if (!error && response.statusCode == 200) {
						fs.appendFile('C:\\Users\\test.json', body+'\n', function (err) {
						  if (err) throw err;
						  console.log(JSON.parse(body));
						});
					// Show the HTML for the Google homepage.
					};
				});
};
console.log('ALL Down');

