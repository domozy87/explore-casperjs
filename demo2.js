/**
 * Created by oudom on 8/3/17.
 */
// A minimal scraping script
var casper = require('casper').create();

casper.start('https://move.kimeportal.ch/', function() {
	this.echo(this.getTitle());
});

casper.thenOpen('https://www.khmer24.com/', function() {
	this.echo(this.getTitle());
});

casper.run();
