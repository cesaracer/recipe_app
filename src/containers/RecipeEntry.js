import React from 'react'
import {add_recipe} from '../action/action'
import {connect} from 'react-redux'

class RecipeEntry extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id: 0,
            recipeName: "",
            temp: 0,
            time: 0,
            ingredients: [],
            ingredient: ""
        }
    }

    handleRecipeChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleIngredientAdd = () => {
        if(this.state.ingredient === ""){
            alert("Please enter a valid ingredient")
        }
        else{
            this.setState({
                ingredients: [
                    ...this.state.ingredients,
                    this.state.ingredient
                ]
            })

            this.setState({
                ingredient: ""
            })
        }
        
    }

    handleAdd = () => {
        if(this.validate()){
            this.props.addRecipe(this.state)
            
            this.setState({
                id: 0,
                recipeName: "",
                temp: "",
                time: "",
                ingredients: [],
                description: "",
                ingredient: ""
            })
        }
    }

    validate = () => {
        if(this.state.recipeName === ""){
            alert("Please give your recipe a name")
            return false
        }
        if(this.state.ingredients.length === 0){
            alert("Please add an ingredient to your recipe")
            return false
        }
        return true
    }
    
    render(){
        return(
            <form>
                <div className="form-group">
                    <div className="label">
                        <label>Recipe name: </label>
                    </div>
                    <div className="input">
                        <input name="recipeName" value={this.state.recipeName} onChange={e => this.handleRecipeChange(e)} placeholder="Name" />
                    </div>
                </div>
                
                <div className="form-group">
                    <div className="label">
                        <label>Cooking Temperature: </label>
                    </div>
                    <div className="input">
                        <input name="temp" value={this.state.temp} onChange={e => this.handleRecipeChange(e)} placeholder="Temperature"/>
                    </div>
                </div>
                
                <div className="form-group">
                    <div className="label">
                        <label>Cooking Time: </label>
                    </div>
                    <div className="input">
                        <input name="time" value={this.state.time} onChange={e => this.handleRecipeChange(e)} placeholder="Time"/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="label">
                        <label>Description: </label>
                    </div>
                    <div className="input">
                        <textarea maxLength="200" name="description" value={this.state.description} onChange={e => this.handleRecipeChange(e)} placeholder="Describe your dish...(200 character limit)" type="textarea"/>
                    </div>
                </div>
                
                <div className="form-group">
                    <div className="label">
                        <label>Ingredients: </label>
                    </div>
                    <div className="input">
                        <input size="50" name="ingredient" value={this.state.ingredient} onChange={e => this.handleRecipeChange(e)} placeholder="Specify ingredient and amount"/>
                    </div>
                    <div className="btn" onClick={() => this.handleIngredientAdd()}>Add Ingredient</div>
                    
                </div>
                <div className="form-group">
                    <ul>
                        {
                            this.state.ingredients.map(i => <li key={i.name}>{i}</li>)
                        }
                    </ul>
                </div>
                    
                <div className="form-group">
                    <div className="btn" onClick={() => this.handleAdd()}>Add Recipe</div>
                </div>
                
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addRecipe: recipe => dispatch(add_recipe(recipe))
    }
}

export default connect(null,mapDispatchToProps)(RecipeEntry)