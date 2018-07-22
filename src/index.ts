import app from './app'
import { Options } from 'graphql-yoga'

const PORT : number | string =  process.env.PORT || 4000
const PLAYGROUND_ENDPOINT : string = '/plaryground'
const GRAPHGL_ENDPOINT : string = '/graphgl'

const appOptions : Options = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHGL_ENDPOINT
}

const handleAppStart = () => console.log(`Listening on port ${PORT}`)

app.start(appOptions, handleAppStart)
