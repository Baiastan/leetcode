// Number.EPSILON
// Number.EPSILON returns the smallest interval between two representable numbers. This is useful for the problem with floating-point approximation.

function numberEquals(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

console.log(numberEquals(0.1 + 0.2, 0.3)); // true

//Maximums

//Number.MAX_SAFE_INTEGER returns the largest integer.
const isEqual = Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2;

console.log(isEqual);

// This returns true because it cannot go any higher. However, it does not work for floating-point decimals.
// 1  Number.MAX_SAFE_INTEGER + 1.111 === Number.MAX_SAFE_INTEGER + 2.022;
// // false
// Number.MAX_VALUE returns the largest floating-point number possible. Number.MAX_VALUE is equal to 1.7976931348623157e+308.
// 1 Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2; // true
// Unlike like Number.MAX_SAFE_INTEGER, this uses double-precision floating-point
// representation and works for floating points as well.
// 1 Number.MAX_VALUE + 1.111 === Number.MAX_VALUE + 2.022; // true

// Minimums
// Number.MIN_SAFE_INTEGER returns the smallest integer. Number.MIN_SAFE_INTEGER is equal to -9007199254740991.
// 1 Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2; // true This returns true because it cannot get any smaller. However, it does not work for
// floating-point decimals.
// 1   Number.MIN_SAFE_INTEGER - 1.111 === Number.MIN_SAFE_INTEGER - 2.022;
// // false
// Number.MIN_VALUE returns the smallest floating-point number possible.
// Number.MIN_VALUE is equal to 5e-324. This is not a negative number since it is the smallest floating-point number possible and means that Number.MIN_VALUE is actually bigger than Number.MIN_- SAFE_INTEGER.
// Number.MIN_VALUE is also the closest floating point to zero. 1 Number.MIN_VALUE - 1 == -1; // true
// This is because this is similar to writing 0 - 1 == -1.

// Infinity
// The only thing greater than Number.MAX_VALUE is Infinity, and the only thing smaller than Number.MAX_SAFE_INTEGER is -Infinity.
// 1 Infinity > Number.MAX_SAFE_INTEGER; // true 2 -Infinity < Number.MAX_SAFE_INTEGER // true; 3 -Infinity -32323323 == -Infinity -1; // true
// This evaluates to true because nothing can go smaller than -Infinity.

//Size Summary
-Infinity < Number.MIN_SAFE_INTEGER < Number.MIN_VALUE < 0 < Number.MAX_;
SAFE_IN - TEGER < Number.MAX_VALUE < Infini;
