const capitalizeString = str => {
  const firstChar = str.charAt(0);
  const upperFirstChar = firstChar.toUpperCase();
  const restOfString = str.slice(1);
  return upperFirstChar + restOfString;
};
export default capitalizeString;
