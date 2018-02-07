let messages = [
];
let id = 0;

module.exports = {
    create: (req, res) => {
        messages.push(
        {
        id:id,
        time: req.body.time,
        text:req.body.text
        })
        res.status(200).send(messages)
        id++;
    },
    read: (req, res) => {
        res.status(200).send(messages)
    },
    update: (req, res) => {
        console.log("req params id is a "+ typeof +req.params.id)
        
        var messageIndex = messages.findIndex((message) => message.id === +req.params.id)
        console.log(messageIndex)
        messages[messageIndex]['text'] = req.body.text;
        res.status(200).send(messages);
    },
    delete: (req, res) => {
        var index = messages.findIndex(message => message.id === req.params.id)
        messages.splice(index,1);
        res.status(200).send(messages);
    }
}