import app from "./app.js";
app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "dist")));
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});
app.listen(process.env.PORT, () => {
  console.log(`Server Running On Port ${process.env.PORT}`);
});
