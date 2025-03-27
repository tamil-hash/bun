import figlet from "figlet";

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    console.log(req)
    const body = figlet.textSync("Tamil!")
    console.log(Bun.version);
    console.log("gg")
    return new Response(body);
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);