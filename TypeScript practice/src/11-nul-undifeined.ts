(() => {
  // let myNumber: number // = undefined, but undefined isn't a number
  // let myString: string; // = null, isn't a string

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null
  myNumber = 123
  myNumber = null

  let myString: string | undefined = undefined;
  myString = 'go';
  myString = undefined;

  // function hi(name: string | null) {
  //   let hello = 'hola ';
  //   if (name) {
  //     hello += name;
  //   } else {
  //     hello += 'nobody';
  //   }
  //   console.log(hello);
  // }

  function hiV2(name: string | null) {
    let hello = 'hola ';
    hello += name?.toLowerCase() || 'nobody'; //Optional chaining as a conditional expression
    console.log(hello);
  }


  hiV2('Alejandro');
  hiV2(null)
})();
