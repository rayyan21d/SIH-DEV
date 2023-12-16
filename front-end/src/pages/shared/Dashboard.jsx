import React from 'react';
import {useLocation, Route, Routes, Link} from 'react-router-dom';
import Admin from './../admin/Admin';
import NotFound from './NotFound'

import ManageSiding from '../admin/ManageSiding';
import ManageStation from '../admin/ManageStation';

import Siding from '../siding/Siding';
import MakeRequest from '../siding/MakeRequest'
import CurrentRequest from '../siding/CurrentRequest'
import PastRequest from '../siding/PastRequest'


import Station from '../station/Station'
import TrainsOwned from '../station/TrainsOwned'
import TrainsInStation from '../station/TrainsInStation'
import StationHistory from '../station/StationHistory'



function Dashboard() {

  // // 1- Final way when using DB
  // const location = useLocation();
  // const { userType } = location.state;
  // Save this here permanantly somehow?? A jwt token, ek cookie, and ek variable

  // // 2- Test Route using local Memory
  const userType = localStorage.getItem('userType');


  switch (userType) {
    case 'admin':
      return(
        <Routes>

          <Route path="/" element={ <Admin />} />
          <Route path="/manage-siding" element={ <ManageSiding />} >
          </Route>

          <Route path="/manage-station" element={ <ManageStation/>} />
        </Routes>
        
      );
    case 'siding':
      return(
        <Routes>

          <Route path="/" element={ <Siding />} />
          <Route path="/make-request" element={ <MakeRequest />} />
          <Route path="/current-requests" element={ <CurrentRequest/>} />
          <Route path="/past-requests" element={ <PastRequest/>} />

        </Routes>
        
      );
    case 'station':
      return(
        <Routes>

          <Route path="/" element={ < Station />} />
          <Route path="/trains-owned" element={ < TrainsOwned/>} />
          <Route path="/trains-in-station" element={ < TrainsInStation />} />
          <Route path="/station-history" element={ < StationHistory />} />

        </Routes>
        
      );

    case 'error':
      return <Link to="/error" element={<NotFound/>} />;
    default:
      return <Link to="/" />;
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












// If you want to persist the userType across different pages and even after the user refreshes the page, you have a few options:

// Local Storage: You can save the userType in the local storage. The local storage data persists even after the page is refreshed. However, it's not secure and should not be used to store sensitive information.
// And then retrieve it with:

// Session Storage: Similar to local storage, but the data is cleared when the page session ends.

// Cookies: You can save the userType in a cookie. Cookies can be secure and can also persist after the page is refreshed.

// JWT Token: If the userType is part of the user's authentication data, it might be included in a JWT token. You would save the JWT token in a cookie or in the local storage and decode it to get the userType.

// State Management Libraries: Libraries like Redux or the Context API can be used to manage global state. However, they don't persist state after the page is refreshed.

// Server-side: If the userType is part of the user's data, you might want to consider storing it on the server-side and retrieving it when needed.

// Choose the option that best fits your needs. If userType is sensitive data, you should use a secure method like JWT tokens or secure cookies. If it's not sensitive, local storage or session storage might be sufficient.