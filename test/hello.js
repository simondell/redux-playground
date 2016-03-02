var expect = require( 'chai' ).expect;

// codes
var my_module = require( '../build/my-module');

describe( 'Tests', function () {
	it( 'should run using chai', function () {
		expect( true ).to.be.true;
	})
});

describe( 'When checking the tooling works as expected', function () {
	it( 'should have "foo" in my_module.foo', function () {
		expect( my_module.foo ).to.equal( 'foo' );
	});

	it( 'should have "hello, world" in my_module.foo', function () {
		expect( my_module.bar ).to.equal( 'hello, world' );
	});
});