const express = require('express')// ได้ function มา 
const bodyParser = require('body-parser')
const app = express() // ถ้าจะให้ function ที่เอามา ต้องใส่ วงเล็บตามหลัง()

app.use(bodyParser.urlencoded({ extended : false }))
app.use(bodyParser.json())
let students = [ //จำลอง Database ว่ามันเป็น
    {id : 1 , name : "gun" , email : "gun@hotmail.com"},
    {id : 2 , name : "kuy" , email : "kuy@hotmail.com"}
]

app.get('/greeting', (req, res) => {//เราจะส่งข้อมูลกลับได้ ต้องให้ ตัวแปร res = response 
    res.json({ message : "Hello!" })
})

app.get('/students', (req,res) => {// 1 อันนี้คือ api
    res.json(students)
})

app.post('/students', (req,res) => {
    let student = req.body
    students.push(student)
    res.json(students)
})

module.exports = app //เป็นรูปแบบประกาศว่า server นี้จะเป็น 1 module ใครเรียก module นี้จะได้ app ไปด้วย

