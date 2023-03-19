import pg from "pg"
const {Pool} = pg
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
const app = express()
const port = 3080;

const users = [];

const pool = new Pool({
    user: 'postgres',
    host: 'containers-us-west-58.railway.app',
    database: 'railway',
    password: 'oALD2w7QuP7WT8STEsPg',
    port: 7546 ,
});
app.use(cors());
app.use(bodyParser.json())

app.get('/api/users', async (req, res) => {
    let a = pool
        .query('SELECT * from gooo')
        .then((res) => res.rows)
    res.json( await a);

});

app.post('/api/user', (req, res) => {
    const user = req.body.user;
    users.push(user);
    res.send("user addedd");
});

app.get('/', (req,res) => {
    res.send('App Works !!!!');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
    pool
        .query('SELECT * from gooo')
        .then((res) => console.log(res.rows))
});