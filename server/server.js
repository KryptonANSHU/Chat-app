const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000

const app = express();
const staticpath = path.join(__dirname,'../public');

app.use(express.static(staticpath));

app.listen(port,()=>{
    console.log('Connected at ' + port);
})
