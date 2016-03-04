var expect = require( 'chai' ).expect;
var redux = require( 'redux' );

var my_module = require( '../build/my-module');
var tutorial = require( '../build/tutorial' );

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


describe( 'and testing with redux', function () {

    it( 'should import the library', function () {
        expect( !!redux ).to.be.true;
    })

    it( 'should import the tutorial code', function (){
			expect( tutorial ).to.exist;
    });

    describe( 'and the tutorial', function (){
	    it( 'should expose the store', function (){
				expect( tutorial.store ).to.exist;
	    });
    });

});