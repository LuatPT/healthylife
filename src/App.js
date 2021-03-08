import './App.css';
import React from 'react';
import Footer from './common/Footer';
import Body from './common/Body';
import Header from './common/Header';
import withModal from './common/WrapperComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render(){
       const menus: Object[] = [
            {
                id: 1,
                name: "Home",
                path: "/",
                component: Body
            },
             {
                id: 2,
                name: "Find meal",
                path: "/findMeal",
                component: Body
            },
             {
                id: 3,
                name: "Hire a PT",
                path: "/hirePT",
                component: Body
            },
             {
                id: 4,
                name: "Excercise guide",
                path: "/findExercise",
                component: Body
            }, 
            {
                id: 5,
                name: "Caculator",
                path: "/caculator",
                component: Body
            },
             {
                id: 6,
                name: "About me",
                path: "/aboutMe",
                component: Body
            }
        ];
        return (
        <Router>
          <div className="App">
          <Header />
              <Switch>
                {
                  menus.map((ele,key) =>
                    {
                      
                      let MyComponent = ele.component;
                      return(
                        <Route key={key} path={ele.path}>
                          <MyComponent/>
                        </Route>

                      )
                    })
                }
              </Switch>
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;
