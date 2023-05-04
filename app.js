const express = require('express');
const qrCode = require('qrcode');
const app = express();

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.send(__dirname+"\\public\\index.html")
})

app.get('/qrcode', async (req, res) => {
  const link = req.query.link;
  
  const obj = {
        link:await qrCode.toDataURL(link)
  }
  console.log('ok')
  res.send(JSON.stringify(obj));
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
