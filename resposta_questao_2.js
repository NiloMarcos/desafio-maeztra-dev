function lfindDuplicates(array) {
  const occurrences = {};

  const duplicates = [];

  array.forEach((num) => {
      if (occurrences[num] === undefined) {
          occurrences[num] = 1;
      } else {
          occurrences[num]++;
      }
  });

  for (const num in occurrences) {
      if (occurrences[num] > 1) {
          duplicates.push(parseInt(num));
      }
  }

  return duplicates;
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 6];

const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(lfindDuplicates(array1));

console.log(lfindDuplicates(array2));

console.log(lfindDuplicates(array3));
