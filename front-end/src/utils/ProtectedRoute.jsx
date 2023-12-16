import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest }) {
   /* const userType = get the user type from your auth system */

  return (
    <Route
    //   {...rest}
    //   render={props =>
    //     userType === rest.requiredUserType ? (
    //       <Component {...props} />
    //     ) : (
    //       <Redirect to="/signin" />
    //     )
    //   }
    />
  );
}

export default ProtectedRoute;





// <Switch>
//   <Route path="/signin" component={SignIn} />
//   <ProtectedRoute path="/admin/dashboard" component={AdminDashboard} requiredUserType="admin" />
//   <ProtectedRoute path="/station/dashboard" component={StationDashboard} requiredUserType="station" />
//   <ProtectedRoute path="/destination/dashboard" component={DestinationDashboard} requiredUserType="destination" />
//   {/* other routes... */}
// </Switch>




// ProtectedRoute.js: This file defines a special kind of Route component. When this component is used in your routing configuration, it checks the user's authentication status and user type before deciding what to render. If the user is authenticated and has the correct user type, it renders the specified component. If not, it redirects the user to the sign-in page.