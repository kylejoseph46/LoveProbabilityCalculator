const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')
const app = express()
app.use(cors())


app.get('/results', (req, res) => {
   const name1 = req.query.sname
   const name2 = req.query.fname
   console.log(name1)
   console.log(name2)

   const options = {
      method: 'GET',
      url: 'https://love-calculator.p.rapidapi.com/getPercentage',
      params: req.query,
      headers: {
         'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
         'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
      }

   };

   axios.request(options).then(function (response) {
      res.json(response.data)
   }).catch(function (error) {
      console.error(error);
   });

})

app.listen(PORT, () => console.log(`Server running on ${PORT}`))

