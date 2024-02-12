function yearsWithMoreWorkers(matriz) {
  const yearsOfWork = {};

  matriz.forEach(([start, end]) => {
      for (let year = start; year <= end; year++) {
          if (!yearsOfWork[year]) {
              yearsOfWork[year] = 1;
          } else {
              yearsOfWork[year]++;
          }
      }
  });

  let maxWorks = 0;

  for (const year in yearsOfWork) {
      if (yearsOfWork[year] > maxWorks) {
          maxWorks = yearsOfWork[year];
      }
  }

  const yearsMaxWorks = [];

  for (const year in yearsOfWork) {
      if (yearsOfWork[year] === maxWorks) {
          yearsMaxWorks.push(parseInt(year));
      }
  }

  return yearsMaxWorks;
}

const matriz = [[1960,2005],[1945,2008],[1938,1999]];

console.log(yearsWithMoreWorkers(matriz));
