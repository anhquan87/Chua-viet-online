const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

const players = new Map();
const names = ["An Nhiên", "Tịnh Tâm", "Minh Tuệ", "Thiện Tâm", "Tuệ Minh", "Diệu Hạnh"];

io.on("connection", (socket) => {
  const name = names[Math.floor(Math.random() * names.length)] + " " + Math.floor(10 + Math.random() * 90);
  const player = { id: socket.id, name, x: (Math.random() - .5) * 5, z: 4 + Math.random() * 3, color: ["#d8b48b", "#b7c6a5", "#c9b6d9", "#d6c49c"][Math.floor(Math.random()*4)] };
  players.set(socket.id, player);
  socket.emit("welcome", { self: player, players: [...players.values()] });
  socket.broadcast.emit("player-joined", player);

  socket.on("move", (pos) => {
    const p = players.get(socket.id);
    if (!p || !Number.isFinite(pos.x) || !Number.isFinite(pos.z)) return;
    p.x = Math.max(-18, Math.min(18, pos.x));
    p.z = Math.max(-18, Math.min(18, pos.z));
    socket.broadcast.emit("player-moved", { id: socket.id, x: p.x, z: p.z, rotation: Number(pos.rotation) || 0 });
  });

  socket.on("emote", (kind) => {
    if (["lotus", "bow", "hello"].includes(kind)) io.emit("player-emote", { id: socket.id, kind });
  });

  socket.on("disconnect", () => {
    players.delete(socket.id);
    io.emit("player-left", socket.id);
  });
});

server.listen(PORT, () => console.log(`Chua Viet Online dang chay tai http://localhost:${PORT}`));
