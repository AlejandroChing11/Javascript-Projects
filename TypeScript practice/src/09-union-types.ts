(() => {
  let myVar: string | number;
  myVar = "hola";
  myVar = 12345;
  function greeting(myText: string | number) {
    if (typeof myText === "string") {
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`);
    }
  }
  greeting('hola');
  greeting(12345.112);
})();
