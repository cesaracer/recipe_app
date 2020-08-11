import React from 'react'
import {connect} from 'react-redux'
import RecipeCard from './RecipeCard'

function RecipeList(props){
    
    return(
        <div className="recipe-list">
            {
                props.list.map(r => <RecipeCard key={r.id} {...r}/>)
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        list: state.list
    }
}
export default connect(mapStateToProps)(RecipeList)