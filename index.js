const http = require('http')
const fs = require('fs')

const homePage = fs.readFileSync('index.html')
const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const notfoundPage = fs.readFileSync('notfound.html')

const server = http.createServer((req, res) => {
    if(req.url === '/about')
        res.end(aboutPage)
    else if(req.url === '/contact')
        res.end(contactPage)
    else if(req.url === '/')
        res.end(homePage)
    else{
        res.writeHead(404)
        res.end(notfoundPage)
    }

    console.log(req.url)
    res.end('Hello Node.js')
})

server.listen(3000)