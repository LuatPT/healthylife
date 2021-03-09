import React from 'react';
import FoodList from '../food/FoodList';
import ExerciseList from '../exercise/ExerciseList'

class Body extends React.PureComponent{

    render(){
        const {typeComponent} = this.props;
        console.log(typeComponent);
        return(
            <div>
                {
                    typeComponent === "excercise" ? <ExerciseList /> : <FoodList /> 
                }
            </div>
        )
    }
}

export default Body;