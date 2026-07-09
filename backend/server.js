  const express = require("express");
  const cors = require("cors");
  const axios = require("axios");
  require("dotenv").config();

  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("🚀 MeshOS Backend Running");
  });

  app.post("/api/chat", async (req, res) => {
    try {
      const { prompt } = req.body;

      const response = await axios.post(
        "https://api.meshapi.ai/v1/chat/completions",
        {
          model: "google/gemini-2.5-flash",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.MESH_API_KEY}`,
            "Content-Type": "application/json",
          },
        },
      );

      res.json(response.data);
    } catch (err) {
      console.error(err.response?.data || err.message);

      res.status(500).json({
        error: "Mesh API request failed",
      });
    }
  });

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
