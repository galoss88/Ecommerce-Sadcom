export function convertirNumeroMiles(numero) {
  let numberToString = numero.toString();
  let arrayNumber = numberToString.split("").reverse();
  let newNumber = "";
  //ej [1,2,3,4,5,6,7,8,9,1,0] => reverse [0,1,9,8,7,6,5,4,3,2,1]
  for (let i = 0; i < arrayNumber.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      newNumber = "." + newNumber; //.543.876.910
    }
    newNumber = arrayNumber[i] + newNumber; //12//.543//.876//.910
  }

  return newNumber;
}
