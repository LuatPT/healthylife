import React from 'react'
import FoodDetail from '../food/FoodDetail'
import SearchFood from '../food/SearchFood'

class FoodList extends React.Component{

    render(){
        var foods: Object[] = [
            {
                id:1,
                name: "Rice",
                image: "",
                caloNum: 120,
                perServing: 10,
                typeMacro: "Carb"
            },
             {
                id:2,
                name: "Potato",
                image: "",
                caloNum: 200,
                perServing: 100,
                typeMacro: "Carb"
            },
             {
                id:3,
                name: "Whey",
                image: "",
                caloNum: 0,
                perServing: 30,
                typeMacro: "Protein"
            },
             {
                id:4,
                name: "Peanut",
                image: "",
                caloNum: 120,
                perServing: 100,
                typeMacro: "Fat"
            },
             {
                id:5,
                name: "Salmon Fish",
                image: "",
                caloNum: 150,
                perServing: 50,
                typeMacro: "Protein"
            }
        ];
        return(
            <div>
                <SearchFood />
                <div className="row">
                    {
                        foods.map((ele,key) => (
                            <FoodDetail key={key} {...ele}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default FoodList;