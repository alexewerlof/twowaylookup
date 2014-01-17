var TwoWayLookup = require( './TwoWayLookup.js').TwoWayLookup;


exports.testObjectType = function (test) {
    test.equal(typeof TwoWayLookup, 'function' );
    test.equal(typeof new TwoWayLookup({}), 'object' );
    test.done();
};

exports.testForwardDictionary = function (test) {
    var newTwoWayLookup = new TwoWayLookup({a:'b',C:'D'});
    test.ok(newTwoWayLookup.forward('a'),'b');
    test.ok(newTwoWayLookup.forward('C'),'D');
    test.ok(newTwoWayLookup.forward('C',true),'D');
    test.ok(newTwoWayLookup.forward('c',true),'D');
    test.done();
};

exports.testBackwardDictionary = function (test) {
    var newTwoWayLookup = new TwoWayLookup({a:'b',C:'D'});
    test.ok(newTwoWayLookup.backward('b'),'a');
    test.ok(newTwoWayLookup.backward('D'),'C');
    test.ok(newTwoWayLookup.backward('d',true),'C');
    test.ok(newTwoWayLookup.backward('D',true),'C');
    test.done();
};

exports.testNonExistingKeyVal = function (test) {
    var newTwoWayLookup = new TwoWayLookup({a:'b',C:'D'});
    test.ok(typeof newTwoWayLookup.forward('z'),undefined);
    test.ok(typeof newTwoWayLookup.forward('z',true),undefined);
    test.ok(typeof newTwoWayLookup.backward('x'),undefined);
    test.ok(typeof newTwoWayLookup.backward('x',true),undefined);
    test.done();
};