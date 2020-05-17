import React from "react"
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


const withRedirect=(Component)=>{
    const RedirectComponent=(props)=>{
       if(!props.isAuth) {
           return <Redirect  to={"/react-redux/login"}/>
       }

       return <Component {...props}/>

    };

    return connect(mapStateToPropsEdited)(RedirectComponent);

};

const mapStateToPropsEdited=(state)=>({
    isAuth:state.auth.isAuth
});

export default withRedirect