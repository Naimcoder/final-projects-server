const express= require('express')
const cors= require('cors')
const app = express()
const port = process.env.PORT || 5000;
require('dotenv').config()

// maiddle wayre
app.use(cors())
app.use(express.json())


async function run(){
    try{

    }
    finally{

    }
}
run().catch(error=>console.log(error))


app.get('/',(req,res)=>{
    res.send('Final Projects Sever')
})

app.listen(port,()=>{
    console.log(`final server is Runnnig${port}`)
})