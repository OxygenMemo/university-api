const test = require('tape')
const request = require('supertest')
const app = require('../server')

test('First test case',(t) => { //t เป็นตัวแปร อ้างถึงคำสั่ง พวก equal อะไรแบบนี้
    t.equal(1,1)
    t.end()
})
test('GET /student', (t) =>{
    request(app).get('/student')//เหมือนการเปิด browser
        .expect(404) //บอกว่าต้อง การ http status นี้
        .then((err,res) =>{ // ปิด connecttion การrequest จะเป็นการเปิด connection เราจึงต้องปิดด้วย
            t.end()
        }) 

}) //result student