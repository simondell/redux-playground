var expect = require( 'chai' ).expect;
var redux = require( 'redux' );

var tutorial = require( '../build/tutorial' );
var actions = require( '../build/actions' );


//
// store tests
//
describe( 'When using a store', function () {
	var store;

	beforeEach( function () {
		// store = redux.createStore( tutorial.counter_reducer );
		store = tutorial.createStore( tutorial.counter_reducer );
	});

	describe( 'and invoking .getState()', function () {
		it( 'should return 0, the default value', function () {
			expect( store.getState() ).to.equal( 0 );
		});
	});

	describe( 'and invoking .dispatch()', function (){
		describe( 'and passing 5 INCREMENT actions', function (){
			var index, count;

			beforeEach( function () { // A 'before' here would make more sense. However, 'before' here will happen before the 'beforeEach' defined above. Because the store is initialised in the beforeEach, it wouldn't be defined by the time the 'before' runs and the test wont work as intended.
				count = 5;
				for( index = 0; index < count; index++ ) {
					store.dispatch( actions.INCREMENT );
				}
			});

			it( 'should have state set to 5', function () {
				expect( store.getState() ).to.equal( count );
			});
		});

		describe( 'and passing DECREMENT actions', function (){
			var index, count;
			beforeEach( function () { // annoyingly `beforeEach`
				count = 5;
				for( index = 0; index < count; index++ ) {
					store.dispatch( actions.DECREMENT );
				}
			});

			it( 'should have state set to -n', function () {
				expect( store.getState() ).to.equal( -count );
			});

		});

	});

	describe( 'and invoking .subscribe()', function (){
		var spied = 0;

	// borrowing the idea that "pure functions should be labelled with `function`"
		var spy = function () {
			spied++;
		}

		beforeEach( function () {
			store.subscribe( spy );
		});

		it( 'should call the subscribe callback for each store chagne', function () {
			var counter;

			// ten actions, ten state changes in store
			for( var counter = 0; counter < 5; counter++ ) {
				store.dispatch( actions.DECREMENT );
				store.dispatch( actions.INCREMENT );
			}

			expect( spied ).to.equal( 10 ); // although counter might be 4...
		});

	});

});