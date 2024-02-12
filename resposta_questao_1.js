function checkSequentialOrder(number) {
  const numberString = String(number);
  
  let crescent = true;

  for (let i = 0; i < numberString.length - 1; i++) {
      if (Number(numberString[i + 1]) - Number(numberString[i]) > 1) {
        crescent = false;
          break;
      }
  }
  
  let descending = true;
  
  for (let i = 0; i < numberString.length - 1; i++) {
      if (Number(numberString[i]) - Number(numberString[i + 1]) > 1) {
        descending = false;
          break;
      }
  }
  
  if (crescent) {
      return "Crescente";
  } else if (descending) {
      return "Decrescente";
  } else {
      return "Não está em ordem sequencial, por favor verificar";
  }
}

console.log(checkSequentialOrder());

console.log(checkSequentialOrder(987));

console.log(checkSequentialOrder(1223));

console.log(checkSequentialOrder(9876));

console.log(checkSequentialOrder(1111));

console.log(checkSequentialOrder(1234));
