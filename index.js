const express = require('express')
const path = require('path')

const app = express() //call to express function to start new express app
app.use(express.static('public'))

app.listen(3000,() => {
    console.log("app listening on port 3000")
})

app.get('/', (req,res)=> {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/about', (req,res)=> {
    res.sendFile(path.resolve(__dirname, 'about.html'))
})

app.get('/contact', (req,res)=> {
    res.sendFile(path.resolve(__dirname, 'contact.html'))
})



// const homePage = fs.readFileSync('index.html')
// const aboutPage = fs.readFileSync('about.html')
// const contactPage = fs.readFileSync('contact.html')
// const notfoundPage = fs.readFileSync('notfound.html')

// const server = http.createServer((req, res) => {
//     if(req.url === '/about')
//         res.end(aboutPage)
//     else if(req.url === '/contact')
//         res.end(contactPage)
//     else if(req.url === '/')
//         res.end(homePage)
//     else{
//         res.writeHead(404)
//         res.end(notfoundPage)
//     }

//     console.log(req.url)
//     res.end('Hello Node.js')
// })

// server.listen(3000)
