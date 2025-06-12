const dgram = require("node:dgram");
const MCAST_ADDR = "239.255.255.255";
const PORT = 9875;
const client = dgram.createSocket({ type: "udp4", reuseAddr: true });
client.on("listening", () => {
  client.addMembership(MCAST_ADDR);
  console.log("Added multicast membership", MCAST_ADDR);
});
client.on("message", receiveMessage);
client.bind(PORT);
console.log("Port binded ", PORT);
function receiveMessage(message, remote) {
  console.log(
    "Msg From " + remote.address + ":" + remote.port + "\n" + message
  );
}
