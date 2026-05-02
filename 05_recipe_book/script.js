const container = document.querySelector(".container");
const main = document.querySelector("main");

const h1 = document.createElement("h1");
h1.textContent = "Recipe Book";
container.before(h1);

// create elements
const recipes = [];
function createRecipe(image, name, caption) {
  recipes.push({
    image: image,
    name: name,
    caption: caption,
  });
}

createRecipe(
  "https://www.halfbakedharvest.com/wp-content/uploads/2026/02/Parmesan-Garlic-Butter-Crusted-Halibut-1-680x1020.jpg",
  "Parmesan Garlic Butter Crusted Halibut",
  "Crispy Parmesan garlic butter crusted halibut baked until golden and tender. Easy, flavorful, and perfect for busy weeknights!",
);

createRecipe(
  "https://www.halfbakedharvest.com/wp-content/uploads/2021/12/Creamy-Sun-Dried-Tomato-Chicken-Pasta-1.jpg",
  "Creamy Sun-Dried Tomato Chicken Pasta",
  "An all-in-one meal for busy weeknights that's equally great for the holidays…quick, easy, hearty, and so delicious!",
);

createRecipe(
  "https://www.halfbakedharvest.com/wp-content/uploads/2018/02/5X9A8860.jpg",
  "One Skillet Lemon Butter Chicken and Orzo",
  "This recipe is not only delicious, it’s also super easy…one skillet, under an hour, and uses mostly pantry staple ingredients.",
);

createRecipe(
  "https://www.halfbakedharvest.com/wp-content/uploads/2020/02/Crispy-Chipotle-Chicken-Tacos-with-Cilantro-Lime-Ranch-1.jpg",
  "Weeknight Cheesy Baked Chipotle Chicken Tacos with Cilantro Lime Ranch.",
  "Crunchy on the outside…spicy and cheesy inside. Serve each taco with a creamy, cooling cilantro lime ranch sauce, and a mix of your favorite taco toppings.",
);

createRecipe(
  "https://www.halfbakedharvest.com/wp-content/uploads/2022/01/One-Skillet-Lemon-Butter-Dijon-Chicken-and-Orzo-with-Feta-Sauce-1.jpg",
  "One Skillet Lemon Butter Dijon Chicken and Orzo with Feta Sauce",
  "The perfect all-in-one winter dinner…quick, easy, colorful, and delicious!",
);

recipes.forEach((item) => {
  const mainDiv = document.createElement("div");
  container.append(mainDiv);

  const img = document.createElement("img");
  const title = document.createElement("h3");

  const caption = document.createElement("p");
  const div = document.createElement("div");
  const link = document.createElement("a");
  link.href = "#";
  div.append(title, caption, link);
  div.classList.add("info", "flex");

  img.src = item.image;
  title.textContent = item.name;
  caption.textContent = item.caption;
  link.textContent = "see the recipe";
  mainDiv.append(img, div);
  mainDiv.classList.add("recipe", "flex");
});
