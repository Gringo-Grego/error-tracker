import React from "react";
import { Route, Redirect } from "react-router-dom";
// import auth from "./auth";

export const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          // alert(localStorage.getItem("token"))
        //   if(localStorage.getItem('user')){
            return <Component {...props} />;
        //   }
          // else{

          // }
          
        }
        //  else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        // }
      }}
    />
  );
};