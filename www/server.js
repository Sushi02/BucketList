var express = require('express');
var app = express();
app.use("/", express.static("C:/Users/trainee/BucketList/www"));
app.listen(3000); 