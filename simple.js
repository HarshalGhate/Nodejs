const http=require('http')
const PORT=3000;

http.createServer((req,res)=>{
    res.write('<h1>Basic nodejs program</h1>')
    res.end();
}).listen(PORT);