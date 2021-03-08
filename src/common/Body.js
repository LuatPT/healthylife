import React from 'react';
import FoodList from '../food/FootList'

class Body extends React.PureComponent{

    render(){
        return(
            <div>
                <FoodList/>
            </div>
        )
    }
}

export default Body;