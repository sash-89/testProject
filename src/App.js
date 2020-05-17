import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import './App.css';

import CarContainer from "./Car/CarContainer";
import Header from "./Header/Header";
import Tabs from "./Tabs/Tabs";
import ScrollBlock from "./ScrollBlock/ScrollBlock";
import ScrollBlock2 from "./ScrollBlock2/ScrollBlock2";
import QuizContainer from "./Quiz/QuizContainer";
import Menu from "./Menu/Menu";
import ToDoContainer2 from "./ToDo2/ToDoContainer2";
import AuthContainer from "./Auth/AuthContainer";
import Layout from "./_Project React_Redux/Layout";
import {Provider} from "react-redux";
import store from "./_Project React_Redux/redux/store";
import ToDoContainer from "./ToDo/ToDoContainer";


const App = () =>{
    return (
        <Provider store={store}>
            <div className={"App"}>
                <header>
                    <Header/>
                </header>
                <Menu/>
                <div className="Container">
                    <Route path="/" render={() => (<Redirect to="/react-redux" />)}/>
                    <Route path="/react-redux" component={Layout}/>
                    <Route path="/auth" component={AuthContainer}/>
                    <Route path="/cars" component={CarContainer}/>
                    <Route path="/tabs" component={Tabs}/>
                    <Route path="/quiz" component={QuizContainer}/>
                    <Route path="/todo" component={ToDoContainer}/>
                    <Route path="/todo2" component={ToDoContainer2}/>
                    <Route path="/scroll_block" component={ScrollBlock}/>
                    <Route path="/scroll_block2" component={ScrollBlock2}/>
                </div>
            </div>
        </Provider>
    )
}

export default App;
