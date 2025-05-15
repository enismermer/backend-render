const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express(); // ← il faut créer app AVANT d’utiliser app.use()

const PORT = process.env.PORT || 3000;

// Autoriser les requêtes CORS
app.use(cors());

// Servir les fichiers statiques depuis le dossier 'public'
app.use(express.static(path.join(__dirname, "public")));

// Route API principale
app.get("/api", (req, res) => {
  res.json({ message: "Hello depuis Express sur Render!" });
});

// Route test
app.get("/tata", (req, res) => {
  res.json({ message: "Hello tata!" });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
