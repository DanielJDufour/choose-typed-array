# choose-typed-array
Chooses the Best Typed Array to Hold an Array of Numbers.  Supports Big Integers!

# install
```bash
npm install choose-typed-array
```

# usage
The function takes in 4 variables:
- all_numbers_are_integers: whether all the numbers in the array are integers
- min: the lowest number in the array
- max: the highest number in the array
- max_significant_digits: the largest instance of significant digits found in the array (you don't need to specify this if all the numbers are integers)

```js
const chooseTypedArray = require("choose-typed-array");

// for an array of 1s and 0s like [0, 1, 0, 1, 1, 1, 0]
const TypedArray = chooseTypedArray({
    min: 0,
    max: 1,
    all_numbers_are_integers: true
});
// TypedArray is Uint8Array

// for an array of pixel values like [0, 255, 128, 123, 32, 94]
const TypedArray = chooseTypedArray({
    min: 0,
    max: 255,
    all_numbers_are_integers: true
});
// TypedArray is Uint8Array

// for an array of larger values like [-1273, 1238, -1243, 322, -945]
const TypedArray = chooseTypedArray({
    min: -1273,
    max: 1238,
    all_numbers_are_integers: true
});
// TypedArray is Uint16Array

// for an array of random numbers [0.6133360105966696, 0.9000317453847548, 0.20715335681564762, 0.4200819399746838, ...]
const TypedArray = chooseTypedArray({
    min: -1273,
    max: 1238,
    all_numbers_are_integers: true
    max_significant_digits: 16
});
// TypedArray is Float64Array
```
