const express = require('express')
//ใช้ yahoo-finance2 เพื่อค้นหาและรับข้อมูลหุ้น
const yahooFinance = require('yahoo-finance2').default;
//ใช้ node-cache เพื่อเก็บ cache เมื่อมีการดึงข้อมูลซ้ำๆ ระบบจะดึงจาก cach ที่เก็บส่งให้ User ทำให้ระบบเร็ว
const nodecache = require('node-cache');
require('isomorphic-fetch');

const appCache = new nodecache({ stdTTL: 3599 });
const router = express.Router();
const todosURL = 'https://jsonplaceholder.typicode.com/todos';


const app = express()
const PORT = 4000
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.listen(PORT, () => {
    console.log('API Listening on PORT ${PORT}')
})


app.get('/', async (req, res) => {

   
    res.send("API READY")
})

app.get('/getData', async (req, res) => {
    if (Object.keys(req.body).length > 0) {
        const companyNames = req.body.companyNames;
        if(appCache.has(companyNames)){
            console.log('Get data from Node Cache');
            return res.json(appCache.get(companyNames))
        }
        else{
            console.log('Fetch data from API');

            const results = await yahooFinance.quoteSummary(companyNames);
            appCache.set(companyNames,results);
            res.json(results);
        }

       
    } else {
        res.send("Not Company Name")
    }


});




