const mongoose = require( "mongoose" )

const { Schema, model } = mongoose
// const { model } = mongoose

const recipeSchema = new Schema(
    {
        name: String,
        description: String,
        ingredients: [ String ],
        img: String
    },
    { timestamps: true }
)

const Recipe = model( "Recipe", recipeSchema )

module.exports = Recipe