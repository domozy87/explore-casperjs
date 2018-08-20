var casper = require("casper").create({
	viewportSize: {
		width: 1280,
		height: 955
	},
	waitTimeout: 7000
});
var loginInfo = require("loginInfo");

casper.start("https://account.box.com/login", function() {
	this.fill("form#login-form", {
		"login": loginInfo.email,
		"password": loginInfo.pw
	}, true);
	this.captureSelector('login.png', 'body');
});

casper.then(function() {
	this.waitFor(
        function() {
            this.wait(4000);
            return true;
        },
        function then() {
            this.captureSelector('auth.png', 'body');
        }
    );
});

casper.run();
