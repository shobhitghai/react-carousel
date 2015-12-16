var application_root = __dirname,
    express = require("express");
var port = process.env.PORT || 3000;

var app = express();
app.use(express.static(application_root + '/app'));

app.get('/carousel', function(req, res) {
    res.sendFile(application_root + '/app/html/index.html');
});


// app.use(function(req, res, next) {
//     console.log("send");

//     if (req.url == '/') {
//         res.sendFile(application_root + '/app/html/index.html');
//     }else{
//         next();
//     }
// })

app.listen(port, function() {
    console.log("All right ! I am alive at Port." + port + application_root);
});
