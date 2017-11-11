const server = require('./server') //ถ้าเป็น libary ที่เราสร้างเอง จะต้องอ้าง part ด้วยตรง

server.listen(3001,() => {
    console.log('Server started at port 3001')
})