/**
 * Created by oudom on 8/3/17.
 */
// Unit testing

function Cat() {
	this.moawed = false;
	this.moaw = function moaw() {
		this.moawed = true;
		return 'Moaw!';
	};
}

casper.test.begin('Cat can moaw', 2, function suite(test) {
	var cat = new Cat();
	test.assertEquals(cat.moaw(), 'Moaw!');
	test.assertEquals(cat.moaw(), 'Wow!');
	test.assert(cat.moawed);
	test.done();
});
