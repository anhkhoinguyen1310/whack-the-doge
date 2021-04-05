
//Object short-handed
function describePerson() {
    const name = "Loi";
    const age = 18;
    const company = "CoderSchool";
  
    // CHANGE BELOW
    return {
      name: name,
      age: age,
      company: company,
    };
  }
  
  console.log(describePerson());
// refactor 
function describePerson() {
    const name = 'Loi';
    const age = 18;
    const company = 'CoderSchool'
  
    // CHANGE BELOW
    return {
      name,
      age,
      company,
    };
  }
   
  console.log(describePerson());  
  // Destructuring
function getAverage() {
    const obj = { x: 3.6, y: 7.8, z: 4.3 };
    // CHANGE BELOW
    // const x = obj.x;
    // const y = obj.y;
    // const z = obj.z;
    // Refactor with object destructuring in one statement/line.
    // // CHANGE ABOVE
    const { x, y, z } = obj;
    return Math.floor((x + y + z) / 3.0);
  }
  console.log(getAverage());
  
  function getAddress() {
    let coderschool = {
      city: "HCMC",
      country: "Vietnam",
      address: {
        number: 12,
        street: "Ton Dan",
        district: "4",
      },
    };
    // CHANGE BELOW Use destructuring to create city, country and street variables, so that the function returns true.
    const {
		city,
		country,
		address: { street },
	} = coderschool;
  
    return city === "HCMC" && country === "Vietnam" && street === "Ton Dan";
  }
  console.log(getAddress());

  //Refactor with skipped destructuring for arrays in one statement.
  function getElements() {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    // CHANGE BELOW
    // const first = arr[0];
    // const third = arr[2];
    // const fourth = arr[4];
    const [first, , third, fourth] = arr;

    // CHANGE ABOVE
    return { first, third, fourth };
  }
  console.log(getElements());

  //Refactor with nested destructuring of arrays.
  function getNestedElements() {
    const food = [
      ["carrots", "beans", "peas", "lettuce"],
      ["apples", "mangos", "oranges"],
      ["cookies", "cake", "pizza", "chocolate"],
    ];
    // CHANGE BELOW
    // const carrots = food[0][0];
    // const cookies = food[2][0];
    // const mangos = food[1][1];
    const [[carrots], [, mangos], [cookies]] = food;
    // CHANGE ABOVE
  
    return { carrots, cookies, mangos };
  }
  console.log(getNestedElements());

  /// Rest vs Spread
  //Replace "YOUR_ANSWER" with the right argument(s) so that it prints out true.
  function restParameters(first, ...rest) {
    return rest[0] === 1 && rest[1] === 2;
  }
  console.log(restParameters("CHANGE_HERE"));