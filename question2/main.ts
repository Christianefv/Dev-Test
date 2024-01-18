export function findOutlier(integers: number[]): number {
  const evenNumbers = integers.filter(num => num % 2 === 0);
  const oddNumbers = integers.filter(num => num % 2 !== 0);

  if (evenNumbers.length === 1) {
    return evenNumbers[0];
  } else {
    return oddNumbers[0];
  }
}