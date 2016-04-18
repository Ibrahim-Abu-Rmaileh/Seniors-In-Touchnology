/**
 * Created by tal on 18/04/2016.
 */
var jobs = angular.module('jobs', []);

jobs.controller("offerController", function(){
    this.offers = {};
    Offer.find({}, function (err, offers) {
        if(err)
        {
            /*error!!!*/
        }
    this.offers = offers;
    });

});


// defining the mongodb using mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

// connecting the database, if connected print "we're connected"
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function()
{
    console.log("we're connected!");
});

// describing the schema of a job offer
var jobOffer = mongoose.Schema({
   mainTitle: String,
   company: String,
   location: String,
   scope: String,
   brief: String,
   requirements: String
});

// compiling our schema into a Model
var Offer = mongoose.model('Offer', jobOffer);

/* for each new job offer that comes from the management panel,
 we build a new document in our database which includes the relevant details.
 all the details located in the text-areas, divs */

// few job offer for example
var job1 = new Offer({
    mainTitle: 'JOB 1',
    company: 'A',
    location: 'Jerusalem',
    scope: '3 times in week',
    brief: 'bla bla',
    requirements: 'se student'
});

job1.save(function (err, job1) {
    if (err)
        return console.error(err);
    console.log('saved');
})

