const { Router } = require( "express" )
const router = Router()

const Recipe = require( "../models/recipe.js" )

router.get( "/restart/seed", async ( request, response ) => {
    const seedData = require( "../db/seedData.json" )
    try {
        await Recipe.remove( {} )
        await Recipe.create( seedData )
        const recipes = await Recipe.find( {} )
        response.json( recipes )
    } catch ( error ) {
        console.log( error )
    }
})

router.get( "/", async ( request, response ) => {
    try {
        const recipes = await Recipe.find( {} )
        response.json(
            {
            "status": 200,
            recipes
            }
        )
    } catch ( error ) {
        console.log( error )
    }
})

router.post( "/", async ( request, response ) => {
    try {
        const newRecipe = await Recipe.create( request.body )
        response.json(
            {
                "status": 200,
                newRecipe
            }
        )
    } catch ( error ) {
        console.log( error )
    }
})

router.put( "/:id", async ( request, response ) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(
            request.params.id,
            request.body,
            { new: true }
        )
        response.json({
            status: 200,
            updatedRecipe
        })
    } catch ( error ) {
        console.log( error )
    }
})

router.delete( "/:id", async ( request, response ) => {
    try {
        const deleted = await Recipe.findById( request.params.id )
        await Recipe.findByIdAndDelete( request.params.id )
        response.json({
            status: 200,
            msg: `${deleted.name} deleted.`
        })
    } catch ( error ) {
        console.log( error )
    }
})

module.exports = router