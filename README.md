# MeshOS

MeshOS is an AI Operating System that I built for the Mesh API Hackathon.

The idea is simple. Instead of sending every prompt directly to an AI model, MeshOS first understands what the user wants, decides what kind of task it is, selects the best workflow, creates AI agents, and then generates the response.

For example, if someone asks a programming question, MeshOS detects that it's a coding task, chooses the programming workflow, assigns the required agents, and finally sends the request to the AI.

---

## Why I built this

Nowadays there are many AI models and each one is good at different things.

Instead of making users choose a model every time, I wanted to build something that can make those decisions automatically.

That's how MeshOS was created.

---

## Features

- Automatic task detection
- AI decision engine
- Workflow selection
- AI agent orchestration
- Execution timeline
- Document analysis
- Research workspace
- Planner
- Reports dashboard
- Compare AI page
- Responsive UI
- Mesh API integration

---

## How it works

```
User Prompt
      ↓
Task Detection
      ↓
AI Decision
      ↓
Workflow Selection
      ↓
AI Agents
      ↓
Mesh API
      ↓
Response
```

---

## Tech Stack

Frontend

- React
- Vite
- Tailwind CSS

Backend

- Express.js
- Node.js

AI

- Mesh API
- Gemini 2.5 Flash

---

## Folder Structure

```
src
 ├── components
 ├── pages
 ├── services
 ├── utils

backend
```

---

## Running the project

Clone the repository

```bash
git clone YOUR_REPOSITORY
```

Install packages

```bash
npm install
```

Start frontend

```bash
npm run dev
```

Start backend

```bash
cd backend
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
MESH_API_KEY=YOUR_API_KEY
MODEL=google/gemini-2.5-flash
PORT=5000
```

---

## What I learned

While building MeshOS I learned about

- AI routing
- Multi-agent systems
- API integration
- React state management
- Backend development with Express
- Project architecture

I also learned how important it is to build reusable components instead of writing everything inside one file.

---

## Future Plans

If I continue working on this project, I want to add

- Real multi-model routing
- PDF uploads
- Voice support
- AI memory
- Streaming responses
- Team collaboration

---

## Author

Wasim

Built for the Mesh API Hackathon.
