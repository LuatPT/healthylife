import React from 'react'

class ExerciseDetail extends React.PureComponent{

    render(){
        var ele : Object = this.props;
        return(
            <div className="col-md-3 ExerciseDetail">
                <img src={ele.image} className="center" width="100%" height="55%" alt={ele.name}/>
                {/* <p>{ele.id}</p> */}
                <p>Name:  {ele.name}</p>
                <p>Volume: {ele.set} x {ele.rep} </p>
                {/* <p>{ele.typeMacro}</p> */}
            </div>
            )
    }
}

export default ExerciseDetail;