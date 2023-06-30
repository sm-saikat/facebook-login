const express = require('express')
const app = express();
const bodyParser = require('body-parser')

app.use(express.json())
app.use(express.text())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(process.env.PORT || 8080, ()=>{
    console.log('Server is running')
})

app.get('/', (req, res)=>{
    res.send({
        message: 'all ok'
    })
})

app.post('/login', (req, res)=>{
    console.log(req.body)
    res.redirect('https://www.youtube.com/watch?v=z3pQVQbdg0g&pp=ygUKcHViZyB0cmljaw%3D%3D')
})