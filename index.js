const ageCalculator = () => {
  const myBirthday = new Date("October 05, 92");
  const actualDate = new Date();

  const myYear = myBirthday.getFullYear();
  const actualYear = actualDate.getFullYear();
  const actualMonth = actualDate.getMonth() + 1;
  const actualDay = actualDate.getUTCDate();
  const yearDiff = actualYear - myYear;
  let age;

  if (actualMonth < 10 || (actualMonth == 10 && actualDay < 5)) {
    age = yearDiff - 1;
    return age;
  } else {
    age = yearDiff;
    return age;
  }
};

document.getElementById("ageJs").innerHTML = ageCalculator();
