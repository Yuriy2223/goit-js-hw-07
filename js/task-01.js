const categories = document.querySelectorAll("ul#categories > .item");
console.log(`У списку категорій:${categories.length}`);
categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const items = category.querySelectorAll("ul > li");
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${items.length}`);
});
