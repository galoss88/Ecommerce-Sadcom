import io from "socket.io-client";
const socket = io("http://localhost:4000/", {
  transports: ["websocket"],
  cors: {
    origin: "*",
  },
});
socket.on("sendUser", (message) => {
  console.log(message);
});
export default socket;