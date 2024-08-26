export const arraySplit = (array: [], size: number) => {
  let newArray = [];
  for (let i = 0; i < array.length; i + size) {
    newArray.push(array.splice(i, i + size))
  }
  return newArray
}

export const shuffle = (signal: string, array: [], count: { prev: number, current: number, next: number }) => {
  if (signal == "next") {
    if (count.current + 1 > array.length - 1) {
      console.log("reset");

    }
  }
}

export const displayCalculations = () => {
  return;
}