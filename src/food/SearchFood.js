import React from 'react'

class SearchFood extends React.PureComponent{
    onChange = () => {
        
    }
    render(){
        return(
            <div className="row ">
                  <input className="col-md-9" type="search" placeholder="Search"/>
                   <button className="btn btn-outline-success col-md-2">Search</button>
            </div>
        )
    }
}

export default SearchFood;