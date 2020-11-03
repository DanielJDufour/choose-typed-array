const test = require("ava");
const chooseTypedArray = require("./choose-typed-array");

test("choose uint8array for binary array of numbers", (t) => {
  const result = chooseTypedArray({
    min: 0,
    max: 1,
    all_numbers_are_integers: true
  });
  t.is(result, Uint8Array);
});

test("choose float64 array for random numbers between 0 and 1", (t) => {
  const result = chooseTypedArray({
    min: 0,
    max: 1,
    all_numbers_are_integers: false,
    max_significant_digits: 15
  });
  t.is(result, Float64Array);
});

test("choose uint8array array for colors", (t) => {
  const result = chooseTypedArray({
    min: 0,
    max: 255,
    all_numbers_are_integers: true
  });
  t.is(result, Uint8Array);
});

test("choose uint16array array for larger numbers", (t) => {
  const result = chooseTypedArray({
    min: 0,
    max: 2000,
    all_numbers_are_integers: true
  });
  t.is(result, Uint16Array);
});

test("choose float32 array of decimals, but not many significant digits", (t) => {
  const result = chooseTypedArray({
    min: 0,
    max: 2000,
    all_numbers_are_integers: false,
    max_significant_digits: 4
  });
  t.is(result, Float32Array);
});

test("choose float32 array of decimals, but many significant digits", (t) => {
  const result = chooseTypedArray({
    min: 0,
    max: 2000,
    all_numbers_are_integers: false,
    max_significant_digits: 10
  });
  t.is(result, Float64Array);
});
