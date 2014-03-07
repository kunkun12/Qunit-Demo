test('isOdd()', function() {
    ok(isOdd(3), 'Three is an odd number');
    ok(isOdd(2), 'Two is not an odd number');
});

test('multiply()', function() {
    strictEqual(multiply(2,2), '4', '2 multiplied by 2 is 4');
    equal(multiply(2,3), 6, '3 multiplied by 2 is 6');
});

test( "propEqual test", function() {
  function Foo( x, y, z ) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  Foo.prototype.doA = function () {};
  Foo.prototype.doB = function () {};
  Foo.prototype.bar = 'prototype';
 
  var foo = new Foo( 1, "2", [] );
  var bar = {
    x : 1,
    y : "2",
    z : []
  };
  propEqual( foo, bar, "Strictly the same properties without comparing objects constructors." );
});