export function getRandomNumbers(range: number): number[] {
  let random1: number[] = [];
  let random2: number[] = [];

  for (let i = 0; random1.length !== range; i++) {
    const num = Math.floor(Math.random() * range + 1);
    if (!random1.includes(num)) {
      random1.push(num);
    }
  }

  for (let i = 0; random2.length !== range; i++) {
    const num = Math.floor(Math.random() * range + 1);
    if (!random2.includes(num)) {
      random2.push(num);
    }
  }

  return [...random1.filter(num => num), ...random2.filter(num => num)];
}