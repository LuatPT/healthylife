import React from 'react'
import FoodDetail from '../food/FoodDetail'
import SearchFood from '../food/SearchFood'


class FoodList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            keySearch : ""
        }
    }

    searchFood = (value) => {
        this.setState({
            keySearch: value
        })
    }
    render(){
        var foods: Object[] = [
            {
                id:1,
                name: "Rice",
                image: "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/how-to-cook-rice.jpg",
                set: 120,
                rep: 10,
                type: "Carb",
                content: ""
            },
             {
                id:2,
                name: "Potato",
                image: "https://cdn.britannica.com/89/170689-131-D20F8F0A/Potatoes.jpg",
                set: 200,
                rep: 100,
                type: "Carb",
                content: ""
            },
             {
                id:3,
                name: "Whey",
                image: "https://vinmec-prod.s3.amazonaws.com/images/20191030_074353_321093_Whey-Protein.max-800x800.jpg",
                set: 0,
                rep: 30,
                type: "Protein",
                content: ""
            },
             {
                id:4,
                name: "Peanut",
                image: "https://www.aboutpeanuts.com/images/com_joomrecipe/cropped-Raw-Shelled-Peanuts.jpg",
                set: 120,
                rep: 100,
                type: "Fat",
                content: ""
            },
             {
                id:5,
                name: "Salmon Fish",
                image: "https://images.thefishsite.com/fish/articles/processing/salmon-fillet.jpeg?profile=article-full",
                set: 150,
                rep: 50,
                type: "Protein",
                content: ""
            }
        ];
        const filterListFood = foods.filter(ele => ele.name.toLowerCase().includes(this.state.keySearch.toLowerCase()) === true);
        return(
            <div>
                <SearchFood  searchFood={this.searchFood}/>
                <div className="row justify-content-center">
                    {
                        filterListFood.map((ele,key) => (
                            <FoodDetail key={key} {...ele} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default FoodList;