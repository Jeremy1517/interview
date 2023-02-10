const express = require('express')
const cors = require('cors')
const app = express()
const port = 9898

app.get('/health', (req, res) => {
  res.send('Hello World!')
})

app.get('/services/check-rating-engine', (req, res) => {
  res.jsonp({"result": Math.random() < 0.65 ? "true" : "false"})
  res.status(200);
  return res.end();
})

app.get('/services/check-rating-engine/details', (req, res) => {
  res.jsonp({"usage": Math.random() })
  res.status(200);
  return res.end();
})

app.get('/services/check-insurance', (req, res) => {
  res.jsonp({"result": Math.random() < 0.65 ? "true" : "false"})
  res.status(200);
  return res.end();
})

app.get('/services/check-insurance/details', (req, res) => {
  res.jsonp({"usage": Math.random() })
  res.status(200);
  return res.end();
})

app.get('/services/check-auth', (req, res) => {
  res.jsonp({"result": Math.random() < 0.65 ? "true" : "false"})
  res.status(200);
  return res.end();
})

app.get('/services/check-auth/details', (req, res) => {
  res.jsonp({"usage": Math.random() })
  res.status(200);
  return res.end();
})

app.get('/services/check-policy', (req, res) => {
  res.jsonp({"result": Math.random() < 0.65 ? "true" : "false"})
  res.status(200);
  return res.end();
})

app.get('/services/check-policy/details', (req, res) => {
  res.jsonp({"usage": Math.random() })
  res.status(200);
  return res.end();
})

app.listen(port, () => {
  console.log(`BE app listening on port ${port}`)
})
