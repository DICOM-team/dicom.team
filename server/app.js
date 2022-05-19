const express = require ('express')
const fetch = require('node-fetch')
const cors = require('cors')
var bodyParser = require('body-parser')

const app = express();
app.use(cors())
app.use(bodyParser.json())

app.listen(5000, () => {
    console.log(`Server is up and running on port 5000`);
});

app.post("/SendForm", (req, res)=> {
    // console.log(req.body)
    const result = fetch('https://bavalex.bitrix24.ru/rest/1/goj45yq40qiuxu8y/crm.lead.add.json',{
        method: "POST",
        body: JSON.stringify(req.body),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    res.status(200).json(result)
})