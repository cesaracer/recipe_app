import React from 'react'
import {del_recipe} from '../action/action'
import {connect} from 'react-redux'

function RecipeCard(props){
    return(
        <div className="card">
            <div className="card-body">
                    <div className="card-title"><h3>{props.recipeName}</h3></div>
                    <div className="card-description">
                        <div className="card-front">
                            <div className="card-info">
                                <h6>Hover to see ingredients</h6>
                                <h4>Cook for {props.time} at {props.temp}F</h4>
                                <p>{props.description}</p>
                            </div>
                            
                        </div>
                        <div className="card-back">
                            <div className="card-ingredients">
                                <ul>
                                    {
                                        props.ingredients.map(i => <li key={i}>{i}</li>)
                                    }
                                </ul>
                            </div>
                            
                        </div>
                    </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        delRecipe: id => dispatch(del_recipe(id))
    }
}

export default connect(null, mapDispatchToProps)(RecipeCard)