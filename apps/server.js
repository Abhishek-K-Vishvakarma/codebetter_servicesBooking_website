// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");
// const app = express();
// const PORT = 7207;
// const authroutes = require('./routes/authRoutes');
// app.use(express.json());
// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// mongoose.connect('mongodb://localhost:27017/usersdb',{
//   useNewUrlParser : true,
//   useUnifiedTopology : true
// }).then(() => console.log("✅MongoDB database connected!")).catch(err => console.error("❌Database disconected!", err));

// const storage = multer.diskStorage({
//   destination: "./uploads/",
//   filename: (req, file, cb) => {
//     cb(null, "logo-" + Date.now() + path.extname(file.originalname));
//   },
// });
// const upload = multer({ storage });
// // Post api file
// app.post("/api/upload", upload.single("logo"), (req, res) =>{
//   if (!req.file) {
//     return res.status(400).json({ message: "No file uploaded" });
//   }
//   const logoUrl = `http://localhost:7207/uploads/${req.file.filename}`;
//   res.json({ message: "File uploaded successfully", logo_url: logoUrl });
// });

// // Get all imageUrl api...

// app.get("/images", (req, res) => {
//   const directoryPath = path.join(__dirname, "uploads");

//   fs.readdir(directoryPath, (err, files) => {
//     if (err) {
//       return res.status(500).json({ error: "Unable to read files" });
//     }
//     const imageUrls = files.map(file => `${req.protocol}://${ req.get("host") }/uploads/${file}`);
//     res.json({ images: imageUrls });
//   });
// });

// app.use('/api', authroutes);

// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// app.listen(PORT,()=>{
//   console.log(`🚀Server running at : http://localhost:${PORT}`);
// });

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const authroutes = require('./routes/authRoutes');

const app = express();
const PORT = 7207;

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true })); // Parses application/x-www-form-urlencoded

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/usersdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB database connected!"))
  .catch(err => console.error("❌ Database connection error!", err));

// Serve static uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api", authroutes);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at: http://localhost:${PORT}`);
});





