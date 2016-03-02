// assertions
var expect = require( 'chai' ).expect;

// libraries
var redux = require( 'redux' );

describe( 'When testing redux', function () {

    it( 'should import the library', function () {
        expect( !!redux ).to.be.true;
    })

});
