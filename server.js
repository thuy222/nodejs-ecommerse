const app = require("./src/app");

const PORT = 3055;

const server = app.listen(3055, () => {
  console.log(`app is listening on ports ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => console.log(`Exit server Express `));

  //notify.send -> gửi thông báo khi hệ thống có vấn đề
});
