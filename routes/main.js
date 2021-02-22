const router = require("express").Router();

router.get("/", (req, res) => {
        return res.render("index")
})

router.ws('/test-link-here/', function(ws, req) {
        ws.send("Your computed has connected")
        ws.send("Welcome to Web Sockety")
        ws.on('message', function(msg) {
                const clientMessage = JSON.parse(msg)
                ws.send(`I got your message: ${clientMessage.message}`);
        });
      });

module.exports = router;
