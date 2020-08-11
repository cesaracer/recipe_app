let id = 0

export const add_recipe = recipe => {
    id = id + 1
    recipe.id = id
    return{
        type: 'ADD',
        recipe
    }
}

export const del_recipe = recipeId => {
    return{
        type: 'DEL',
        recipeId
    }
}