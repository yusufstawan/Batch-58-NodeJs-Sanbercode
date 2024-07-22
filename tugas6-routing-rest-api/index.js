const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let categories = [
  { id: 1, name: "Elektronik" },
  { id: 2, name: "Perabotan" },
];

let products = [
  { id: 1, name: "Laptop", category: "Elektronik" },
  { id: 2, name: "Meja", category: "Perabotan" },
];

// 1. get all categories
app.get("/api/categories", (req, res) => {
  res.json(categories);
});

// 2. get category by id
app.get("/api/categories/:id", (req, res) => {
  const categoryId = parseInt(req.params.id);
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    res.status(404).json({ message: "Category not found" });
  } else {
    res.json(category);
  }
});

// 3. post new category
app.post("/api/categories", (req, res) => {
  const newCategory = req.body;
  newCategory.id = categories.length
    ? categories[categories.length - 1].id + 1
    : 1;
  categories.push(newCategory);
  res.status(201).json(newCategory);
});

// 4. put category by id
app.put("/api/categories/:id", (req, res) => {
  const categoryId = parseInt(req.params.id);
  const categoryIndex = categories.findIndex((c) => c.id === categoryId);
  if (categoryIndex === -1) {
    res.status(404).json({ message: "Category not found" });
  } else {
    categories[categoryIndex] = { ...categories[categoryIndex], ...req.body };
    res.json(categories[categoryIndex]);
  }
});

// 5. delete category by id
app.delete("/api/categories/:id", (req, res) => {
  const categoryId = parseInt(req.params.id);
  categories = categories.filter((c) => c.id !== categoryId);
  res.status(204).send();
});

// 6. get query string by name
app.get("/api/products", (req, res) => {
  const query = req.query.name;
  const filteredProducts = products.filter((p) => p.name.includes(query));
  res.json(filteredProducts);
});

// 7. get query string by category and name
app.get("/api/products", (req, res) => {
  const category = req.query.category;
  const name = req.query.name;
  const filteredProducts = products
    .filter((p) => p.category === category)
    .filter((p) => p.name.includes(name));
  res.json(filteredProducts);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
