const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// middleware untuk mencatat setiap permintaan yang diterima oleh server.
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

// Buat route untuk /hello
app.get("/hello", (req, res) => {
  res.send({
    message: "Success fetch message",
    data: "Hello World!",
  });
});

// Buat route untuk /user
app.get("/user", (req, res) => {
  res.send({
    message: "Success fetch user",
    data: {
      id: 1,
      name: "Budi",
      username: "budidu",
      email: "budidu@mail.com",
    },
  });
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
