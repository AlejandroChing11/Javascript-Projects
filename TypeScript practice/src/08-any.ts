(() => {
  let myVar: any;
  myVar = [];
  myVar = 2;
  myVar = "Hola";
  myVar = {};
  myVar = null;
  myVar = '';


  myVar = 'hola';
  const rta = (myVar as string).toLowerCase();
  console.log(rta);

  const rta2 = (<number>myVar).toFixed();
})();
