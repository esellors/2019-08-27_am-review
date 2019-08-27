const express = require('express')
const app = express();
const controller = require('./controller');

const PORT = 5050;

app.use(express.json());

app.get('/api/entries', controller.get)
app.post('/api/entries/add', controller.add)
app.put('/api/entries/:id', controller.edit)
app.delete('/api/entries/:id', controller.delete)

app.listen(PORT, () => console.log(`Server rocking on ${PORT} FM`))