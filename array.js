export const Total = () => {
  const Array = [1, 2, 3, 4, 5];
  function double(num) {
    return num * 2;
  }
  const newArray = Array.map(double);

  const filteredArray = Array.filter((arr) => arr > 2);
  const sum = Array.reduce((acc, arr) => acc + arr, 0);

  return sum;
};
