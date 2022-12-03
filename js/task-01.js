const liItemsRef = document.querySelectorAll('.item');

console.log(`Number of categories: ${liItemsRef.length}`);

liItemsRef.forEach(li => {
  console.log(`Category: ${li.firstElementChild.textContent}`);

  console.log(`Elements: ${li.lastElementChild.children.length}`);
});
