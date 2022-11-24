(() => {
  let productTitle = "Alejandro";
  console.log(productTitle);

  let productDescription = "nice and slow";

  let productPrice = 3000;
  let isNew = true;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;

  console.log(summary);

})();
