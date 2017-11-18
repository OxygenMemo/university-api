const test = require('tape')
const request = require('supertest')
const app = require('../server')

test('First test case',(t) => { //t เป็นตัวแปร อ้างถึงคำสั่ง พวก equal อะไรแบบนี้
    t.equal(1,1)
    t.end()
})
test('GET /student', (t) =>{
    request(app).get('/students')//เหมือนการเปิด browser
        .expect(200) //บอกว่าต้อง การ http status นี้
        .then((res) =>{ // ปิด connecttion การrequest จะเป็นการเปิด connection เราจึงต้องปิดด้วย
            let students = res.body
            t.equal(2,students.length)
            let student = students[0]
            t.notEqual(undefined,student.id) // undefined คือการเรียกอาไรที่ไม่ได้กำหนดค่ามาก่อน พวก ตัวแปรไม่เคยสร้าง
            t.end()
        }) 

}) //result student

test('POST /students',(t) => {
    request(app).post('/students')
        .send({ name : "da",email : "da@gmail.com"})
        .expect(200)
        .then((res) => {
            let students = res.body
            let student = students[2]
            t.equal("da",student.name)
            t.end()
        }) 
})