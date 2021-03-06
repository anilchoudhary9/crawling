var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
router.post('/scrap',function(req,res){
  console.log(req.body);
  var xo = req.body.tag;
const URL_TO_START = 'https://medium.com/topic/' +xo;
const MAX_PAGES_TO_CRAWL = 15;
const MAX_REQUEST_THROTTLE = 5;
const OUTPUT_CSV_FILE = 'result.csv';

const crawler = new Crawler(MAX_PAGES_TO_CRAWL, MAX_REQUEST_THROTTLE);
crawler.crawl(URL_TO_START)
  .then((/* {foundUrls: Array<{link, text}>, crawledUrls} */ result) => {
    const newResult = { crawledUrls: result.crawledUrls };
    newResult.foundUrls = _array.uniqBy(result.foundUrls, 'link');
    return newResult;
  })
  .then(result => CsvConverter.writeToFile(OUTPUT_CSV_FILE, result.foundUrls));
});

router.get('/scrap', function(req, res) {
    // url = "https://medium.com/chris-messina/amazon-echo-show-354b93b448b5"
    url = "http://www.imdb.com/title/tt1229340/";
    request(url, function(error, response, html) {

        // First we'll check to make sure no errors occurred when making the request
// res.json(html);
        if (!error) {
        //     // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality

            var $ = cheerio.load(html);
            console.log($['xml']);  
            // res.json(html);
        //     // Finally, we'll define the variables we're going to capture

            // var title, release, rating;
            // var json = { title: "", release: "", rating: "" };
            $['xml'].filter(function() {
                var data = $(this);
                // yoy(data);
                // console.log("here i am");
                console.log(data);
                // title = data.children().first().text();
                // console.log(title);
// title = data
        //         //     // // We will repeat the same process as above.  This time we notice that the release is located within the last element.
        //         //     // // Writing this code will move us to the exact location of the release year.

                // release = data.children().last().children().text();

                // json.title = title;

        //         //     // // Once again, once we have the data extract it we'll save it to our json object

                // json.release = release;

            })
        }
        // console.log(data);
    //     fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){

    // console.log('File successfully written! - Check your project directory for the output.json file');

})
    // });
});
module.exports = router;
 