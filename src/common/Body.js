import React from 'react';
import FoodListContainer from '../member/container/food/FoodListContainer';
import ExerciseListContainer from '../member/container/exercise/ExerciseListContainer'

class Body extends React.PureComponent{

    render(){
        const {typeComponent} = this.props;
        console.log(typeComponent);
        return(
            <div>
                {
                    typeComponent === "excercise" ? <ExerciseListContainer /> : <FoodListContainer /> 
                }
            </div>
        )
    }
}

export default Body;