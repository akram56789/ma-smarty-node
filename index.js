const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello md. abrar hossain (noki)')
});

const users = [
    { id: 1, name: 'fahim', email: 'fahim123@gmail.com', phone: '0171' },
    { id: 2, name: 'hossian', email: 'hossain123@gmail.com', phone: '0172' },
    { id: 3, name: 'maruf', email: 'maruf123@gmail.com', phone: '0173' },
    { id: 4, name: 'salman', email: 'salman123@gmail.com', phone: '0174' },
    { id: 5, name: 'sahil', email: 'sahil123@gmail.com', phone: '0175' },
    { id: 6, name: 'talha', email: 'talha123@gmail.com', phone: '0176' },
]

app.get('/users', (req, res) => {
    //filter by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);

    }
    else {
        res.send(users);
    }

});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    // const id = req.params.id;
    const id = parseInt(req.params.id);
    // const user = users[id];
    const user = users.find(u => u.id === id);
    res.send(user)
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})

app.listen(port, () => {
    console.log('hello mama', port);
})








