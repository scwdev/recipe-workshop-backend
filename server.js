require( "dotenv" ).config()

const PORT = process.env.PORT

const express = require( "express" )
const mongoose = require( "./db/connection.js" )
const cors = require ( "cors" )
const morgan = require( "morgan" )

const app = express()

app.use( cors())
app.use( express.json())
app.use( morgan( "tiny" ))

app.get( "/", ( request, response ) => response.send( "Server is live..." ))

const recipesRouter = require( "./controllers/recipes.js" )
app.use( "/recipes", recipesRouter )

app.listen( PORT, () => console.log( "listening on port ", PORT ))