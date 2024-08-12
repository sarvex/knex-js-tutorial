import express from 'express'
import bodyParser from 'body-parser'

const PORT = process.env.PORT || 8000

app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
