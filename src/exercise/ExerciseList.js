import React from 'react'
import ExerciseDetail from '../exercise/ExerciseDetail'
import SearchExercise from '../exercise/SearchExercise'


class ExerciseList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            keySearch : ""
        }
    }

    searchExercise = (value) => {
        this.setState({
            keySearch: value
        })
    }
    render(){
        var exercises: Object[] = [
            {
                id:1,
                name: "Bench Press",
                image: "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/how-to-cook-rice.jpg",
                set: 3,
                rep: 10,
                type: "Chest",
                content: "It's good for chest"
            },
             {
                id:2,
                name: "Lat Pulldown",
                image: "https://cdn.britannica.com/89/170689-131-D20F8F0A/Potatoes.jpg",
                set: 3,
                rep: 12,
                type: "Chest",
                content: "It's good for lat and back"
            },
             {
                id:3,
                name: "Squat",
                image: "https://vinmec-prod.s3.amazonaws.com/images/20191030_074353_321093_Whey-Protein.max-800x800.jpg",
                set: 4,
                rep: 8,
                content: "It's good for leg"
            },
             {
                id:4,
                name: "Deadlift",
                image: "https://www.aboutpeanuts.com/images/com_joomrecipe/cropped-Raw-Shelled-Peanuts.jpg",
                set: 4,
                rep: 8,
                content: "It's good for hip"
            },
             {
                id:5,
                name: "Shoulder Press",
                image: "https://images.thefishsite.com/fish/articles/processing/salmon-fillet.jpeg?profile=article-full",
                set: 2,
                rep: 8,
                content: "Shoulder"
            }
        ];
        const filterListExercise = exercises.filter(ele => ele.name.toLowerCase().includes(this.state.keySearch.toLowerCase()) === true);
        return(
            <div>
                <SearchExercise  searchExercise={this.searchExercise}/>
                <div className="row justify-content-center">
                    {
                        filterListExercise.map((ele,key) => (
                            <ExerciseDetail key={key} {...ele} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default ExerciseList;