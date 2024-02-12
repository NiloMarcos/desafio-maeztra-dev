function OrganizationOfFriends(numberOfPeoples) {
  function TidyingUp(n) {
      if (n === 0 || n === 1) {
          return 1;
      } else {
          return n * TidyingUp(n - 1);
      }
  }

  return TidyingUp(numberOfPeoples);
}

const numberOfPeoples = 3;

console.log(OrganizationOfFriends(numberOfPeoples));
