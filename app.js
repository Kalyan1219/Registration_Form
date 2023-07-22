// const http=require('http')
const BodyParser=require('body-parser')
const express=require('express')
const app=express()

const AdminRouter=require('./routes/admin');
const ShopRouter=require('./routes/shop');

app.use(BodyParser.urlencoded({extended:false}))

app.use('/admin',AdminRouter)
app.use(ShopRouter)

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found..!</h1>')
})

app.listen(4000)