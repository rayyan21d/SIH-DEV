import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Admin from './../admin/Admin';
// import StationDashboard from './Station/StationDashboard';
// import DestinationDashboard from './Destination/DestinationDashboard';
import Home from './../Home'
function Dashboard() {
  const userType = 'admin'

  switch (userType) {
    case 'admin':
      return(
        <Routes>
          <Route path="/" element={ <Admin />} />
          <Route path="/manage-siding" element={ <Home />} />
          <Route path="/manage-station" element={ <Home />} />
        </Routes>
        
      );
  //   case 'station':
  //     return <StationDashboard />;
  //   case 'siding':
  //     return <DestinationDashboard />;
  //   default:
  //     return <Redirect to="/signin" />;
  // }

  }
}

export default Dashboard;




//<Route>, <Link>, and <Redirect> are all components provided by react-router-dom and they each serve different purposes:

// <Route>: This component is used to define the mapping between the current URL and the component that should be rendered. When the current URL matches the path prop of a Route, the Route renders the specified component.
// In this example, when the URL is '/about', the About component is rendered.

// <Link>: This component is used to create links in your application. It renders an <a> element that changes the URL when clicked, but it prevents the default browser behavior of reloading the page. This allows for fast navigation between different parts of your application.
// In this example, clicking the link changes the URL to '/about'.

// <Redirect>: This component is used to redirect from one URL to another. When a Redirect component is rendered, it changes the current URL and renders the Route that matches the new URL.
// In this example, the URL is immediately changed to '/about' and the About component is rendered (assuming you have a Route for '/about').