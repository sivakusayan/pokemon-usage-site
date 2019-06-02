
/**
 * Pads the given number with leading 0s until the desired
 * length is reached.
 * 
 * @param {Number} num
 *  The number to pad 
 * @param {*} size 
 *  The size to pad to
 */
const pad = (num, size) => {
  let paddedString = num.toString();
  while (paddedString.length < size) paddedString = '0' + paddedString;
  return paddedString;
}

export default pad;