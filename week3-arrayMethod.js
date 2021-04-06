const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom",
  ];
  // filter out start with A
console.log(inventors.filter((inventor) => !inventor.startsWith("A")));
console.log(inventors.filter((inventor) => inventor[0] === "A"));
  // filter out 1st name vs last name same letter
console.log(
       // split the string and check if the first letter is the same. 
inventors.filter((name) => name.split(" ")[0][0] === name.split(" ")[1][0])
 );
// 
console.log(inventor.map((name) => name.length));
console.log(inventors.map((name) => name.toUpperCase()));
 
 console.log(
    inventors.reduce(
     (accumulator, name) => accumulator + name.split(" ")[0] + " ",
      ""
    )
  );
 
  console.log(
   inventors
      .map((name) => name.length)
      .reduce((accumulator, element) => accumulator + element, 0)
  );
 
  inventors.sort();
  console.log(inventors);

let arr = [1, 2, 3, 4, 5];
let accumulator = 0; //initial value

for (let index = 0; index < arr.length; index++) {
   const element = arr[index];
   accumulator = accumulator + element;
}
console.log(arr.reduce((accumulator, element) => accumulator + element, 0));
