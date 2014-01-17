"use strict";

exports.TwoWayLookup = function ( obj ) {
    var forward = {};
    var forwardIgnoreCase = {};
    var backward = {};
    var backwardIgnoreCase = {};
    if ( typeof obj !== 'object' ) {
        throw new Error( 'Parameter must be an object' );
    }

    this.addKeyValue = function ( key, value ) {
        if ( typeof key !== 'string' ) {
            throw new Error( 'The key type for ' + key + ' should be string but is ' + typeof key );
        }
        if ( typeof value !== 'string' ) {
            throw new Error( 'The value for ' + value + ' should be string but is ' + typeof value );
        }
        forward[key] = value;
        forwardIgnoreCase[key.toLowerCase()] = value;
        backward[value] = key;
        backwardIgnoreCase[value.toLowerCase()] = key;
    };

    this.forward = function ( key, ignoreCase ) {
        if ( typeof key !== 'string' ) {
            throw new Error( 'The key type for ' + key + ' should be string but is ' + typeof key );
        }
        return ignoreCase ? forwardIgnoreCase[key.toLowerCase()] : forward[key];
    };

    this.backward = function ( value, ignoreCase ) {
        if ( typeof value !== 'string' ) {
            throw new Error( 'The value for ' + value + ' should be string but is ' + typeof value );
        }
        return ignoreCase ? backwardIgnoreCase[value.toLowerCase()] : backward[value];
    };

    for ( var key in obj ) {
        if ( obj.hasOwnProperty( key ) ) {
            this.addKeyValue(key, obj[key] );
        }
    }
};