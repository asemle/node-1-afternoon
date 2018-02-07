const express = require('express');
const bodyParser = require('body-parser');
const msgCtrl = require(__dirname + "/controllers/messages_controller")

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'));

const port = 3000;

app.post('/api/messages', msgCtrl.create);
app.get('/api/messages', msgCtrl.read);
app.put('/api/messages/:id', msgCtrl.update);
app.delete('/api/messages/:id', msgCtrl.delete)


//cmd d to highlight everything that matches





app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})