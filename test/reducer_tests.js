// assertions
var expect = require( 'chai' ).expect;

var tutorial = require( '../build/tutorial' );
var counter_reducer = require( '../build/tutorial' ).counter_reducer;
var actions = require( '../build/actions' );

//
// reducer tests
//
describe( 'when using the counter reducer', function () {

    describe( 'and state = 0', function () {
        var state = 0;

        it( 'should return 1 after an "INCREMENT" action', function () {
            expect( counter_reducer( state, actions.INCREMENT ) ).to.equal( 1 );
        });

        it( 'should return -1 after an "DECREMENT" action', function () {
            expect( counter_reducer( state, actions.DECREMENT ) ).to.equal( -1 );
        });

        it( 'should return 0 after any other action', function () {
            expect( counter_reducer( state, actions.SOME_OTHER ) ).to.equal( 0 );
        });
    });


    describe( 'and state = 1', function () {
        var state = 1;

        it( 'should return 2 after an "INCREMENT" action', function () {
            expect( counter_reducer( state, actions.INCREMENT ) ).to.equal( 2 );
        });

        it( 'should return 0 after an "DECREMENT" action', function () {
            expect( counter_reducer( state, actions.DECREMENT ) ).to.equal( 0 );
        });

        it( 'should return '+ state +' after any other action', function () {
            expect( counter_reducer( state, actions.SOME_OTHER ) ).to.equal( state );
        });
    });
});

