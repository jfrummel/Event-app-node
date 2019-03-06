let express = require('express');
let app = express();

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function (req, res) {
   res.send('Event App') ;
});

app.get('/routing', function (req, res)  {
    res.send('Event Routing') ;
});

app.listen('3000', function (err) {
   console.log('Node server is running on port 3000');
});