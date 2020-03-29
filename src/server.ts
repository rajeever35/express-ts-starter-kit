import bodyParser from 'body-parser'
import express from 'express'
import {config} from 'node-config-ts'
import compression from 'compression'

const app = express()

app.set('port', config.port)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(compression())

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${config.port}`)
})
