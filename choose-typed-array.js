function chooseTypedArray({ min, max, all_numbers_are_integers, max_significant_digits }) {
  if (all_numbers_are_integers && min >= 0 && max <= 255) {
    return Uint8Array;
  } else if (all_numbers_are_integers && min >= -128 && max <= 127) {
    return Int8Array;
  } else if (all_numbers_are_integers && min >= 0 && max <= 65535) {
    return Uint16Array;
  } else if (all_numbers_are_integers && min >= -32768 && max <= 32767) {
    return Int16Array;
  } else if (all_numbers_are_integers && min >= 0 && max <= 4294967295) {
    return Uint32Array;
  } else if (all_numbers_are_integers && min >= -2147483648 && max <= 2147483647) {
    return Int32Array;
  } else if (max_significant_digits <= 6 && min >= -3.4e38 && max <= 3.4e38) {
    return Float32Array;
  } else if (max_significant_digits <= 16 && min >= -1 * Number.MAX_VALUE && max <= Number.MAX_VALUE) {
    return Float64Array;
  } else if (all_numbers_are_integers && min >= Math.pow(-2, 63) && max <= Math.pow(2, 63) - 1) {
    return BigInt64Array;
  } else if (all_numbers_are_integers && min >= 0 && max <= Math.pow(2, 64) - 1) {
    return BigUint64Array;
  } else {
    // default to Float 64, which is what all normal (i.e. non-Big) JS numbers are anyway
    return Float64Array;
  }
}

module.exports = chooseTypedArray;
if (typeof window !== "undefined") window.chooseTypedArray = chooseTypedArray;
if (typeof self !== "undefined") self.chooseTypedArray = chooseTypedArray;
