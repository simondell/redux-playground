// assertions
var expect = require( 'chai' ).expect;

// libraries
var redux = require( 'redux' );
var tutorial = require( '../build/tutorial' );

describe( 'When testing redux', function () {

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


describe( 'When instanciating a store', function () {
	it( 'should maintain a state', function () {
		expect( tutorial.store.getState() ).to.be.defined;
	});

	it( 'should have an initial state of 0', function () {
		expect( tutorial.store.getState() ).to.equal( 0 );
	});
});

describe( 'When sending actions', function (){
	describe( 'and the action has type="INCREMENT"', function (){
		tutorial.store.dispatch({ type: 'INCREMENT' });

		it( 'should update the state of the store (to 1)', function (){
			expect( tutorial.store.getState() ).to.equal( 1 );
		});
	});
});