const API_URL = "http://localhost:5000/api/chat";

export async function sendPrompt(prompt) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error("Failed to connect to MeshOS backend.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("MeshOS Error:", error);

    return {
      success: false,
      error: error.message,
    };
  }
}
