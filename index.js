const express = require('express');
const app = express();


app.use('/public', express.static("./public"))

const wait = (a) => {
  console.log(a)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 5000)
  })
}

app.get('/aaa', async (req, res) => {
  await wait("chu chu mura mura");
  res.send("aaaa");
})

app.listen(3000, () => {
  console.log('konsome panti')
})