A Web Application built using MEAN (MongoDB, Expressjs, Angularjs, Nodejs) for the sake of learning new technology.

#### Resources for learning Express, Mongo and Node

The links below should provide a good understanding of how to build applications with Express, MongoDB and NodeJS.

* http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/
* http://webapplog.com/express-js-4-node-js-and-mongodb-rest-api-tutorial/
* http://coenraets.org/blog/2012/10/creating-a-rest-api-using-node-js-express-and-mongodb/
* http://blog.ijasoneverett.com/2013/03/a-sample-app-with-node-js-express-and-mongodb-part-1/

#### Resources for learning AngularJS

* http://www.revillweb.com/tutorials/angularjs-in-30-minutes-angularjs-tutorial/

The link below also teaches you how to retrieve data from a RESTful API (such as Express). Very helpful. 

* http://www.toptal.com/angular-js/a-step-by-step-guide-to-your-first-angularjs-app

A set of videos for understanding how to use AngularJS. The exercises and videos only cover front-end with Angular, there is no back-end. I found these videos to be quite helpful.

* http://campus.codeschool.com/courses/shaping-up-with-angular-js/intro

Tutorial on consuming RESTful APIs / requesting JSON data with AJAX

* http://fdietz.github.io/recipes-with-angular-js/consuming-external-services/requesting-json-data-with-ajax.html

#### Research 

In order to start building this application, we must find a way to obtain data for teams, rosters, and more through an API which returns JSON. Some possible resources for this are shown below:

* http://hfboards.hockeysfuture.com/showthread.php?p=79594853
* http://riccomini.name/posts/game-time-baby/2012-09-29-streaming-live-sports-schedule-scores-stats-api/
* http://toddmotto.com/ultimate-guide-to-learning-angular-js-in-one-day/

#### Sample data

The link below contains some JSON data I am interested in rendering with AngularJS through an Express/Node API: 

`http://nhlwc.cdnak.neulion.com/fs1/nhl/league/teamroster/PIT/iphone/clubroster.json`

If you put the JSON into a beautifier, you will notice it contains data for all the players in the Pittsburgh Penguins team, denoted in the URL by `PIT`. Here is a subset of what the data looks like: 

        "position": "Center",
        "id": 8471675,
        "weight": 200,
        "height": "5' 11\"",
        "imageUrl": "http://3.cdn.nhle.com/photos/mugs/8471675.jpg",
        "birthplace": "Cole Harbour, NS, CAN",
        "age": 26,
        "name": "Sidney Crosby",
        "birthdate": "August 07, 1987",
        "number": 87`

The above is a dataset pertaining to one player on the team. In fact, we can grab data for any team by editing the URL and placing the team name inside. For example:

`http://nhlwc.cdnak.neulion.com/fs1/nhl/league/teamroster/LAK/iphone/clubroster.json`

Or:

`http://nhlwc.cdnak.neulion.com/fs1/nhl/league/teamroster/ANA/iphone/clubroster.json`

In the future, we can easily construct the URLs for getting all of the JSON for all teams by substituting the team name with one of the following:

       ['ANA', 'BOS', 'BUF', 'CAR', 'CBJ', 'CGY', 'CHI', 'COL', 'DAL', 'DET', 'EDM', 'FLA', 'LAK',
       'MIN', 'MTL', 'NJD', 'NYR', 'OTT', 'PHI', 'PHX', 'PIT', 'SJS', 'STL', 'TBL', 'TOR', 'VAN',
       'WPG',  'WSH']

With this data, the goal for this project is to: 

* Build the RESTful API with NodeJS + Express to retrieve data for a team, store it in mongoDB.
  Data will not necessarily have to be parsed, since the format is nice and we will actually render 
  all of the data. 

* Use AngularJS to retrieve the data from our RESTful API and render it. 

* The rendered view would look something like this: ![Example](https://github.com/DrkSephy/angular-nhl/blob/master/imgs/player.png), where you can see the JSON pasted above is rendered (The image mugshot, the birthplace, age, number, etc). Ideally we would render each player's stats on a page for each team. For now, we just need to render a single player's stats and then we have a good working example of the MEAN stack. 


