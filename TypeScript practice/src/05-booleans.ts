(() => {
  let isEnable = true;

  isEnable = false;

  let isDisable: boolean = false;

  console.log(isEnable, isDisable);

  const random = Math.random();
  console.log('random', random)

  let isNew: boolean = true;

  isNew = random >= 1 ? true : false;

  console.log(isNew);


})();


