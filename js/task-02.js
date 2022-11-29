const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsRef = document.querySelector('#ingredients');

const itemsRef = ingredients.map(ingredient => {
  const itemRef = document.createElement('li');
  itemRef.classList.add('item');
  itemRef.textContent = ingredient;

  return itemRef;
});

ingredientsRef.append(...itemsRef);
