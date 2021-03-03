import React from 'react'

class FoodDetail extends React.PureComponent{

    render(){
        var ele : Object = this.props;
        return(
            <div className="col-md-3">
                <p>{ele.id}</p>
                <p>{ele.name}</p>
                <p>{ele.caloNum}</p>
                <p>{ele.perServing}</p>
                <p>{ele.typeMacro}</p>
            </div>
        )
    }
}

export default FoodDetail;