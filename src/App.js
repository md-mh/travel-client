import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Account/Login";
import Registration from "./Components/Account/Registration";
import Footer from "./Components/Common/Footer/Footer";
import Header from "./Components/Common/Header/Header";
import Nopage from "./Components/Common/Nopage/Nopage";
import Home from "./Components/Home/Home";
import Singleservice from "./Components/Home/Services/Singleservice/Singleservice";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AddPlace from "./Components/Profiles/AddPlace";
import PlaceOrder from "./Components/Profiles/PlaceOrder";
import ManageTour from "./Components/Profiles/ManageTour";
import MyTour from "./Components/Profiles/MyTour";
import AuthProvider from "./Context/AuthProvider";


function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/"> <Home></Home></Route>
          <Route path="/home"> <Home></Home></Route>
          <Route path="/login"> <Login></Login></Route>
          <Route path="/registration"> <Registration></Registration> </Route>
          <Route exact path="/service/:id"><Singleservice></Singleservice></Route>
          <PrivateRoute exact path="/placeOrder/:id"> <PlaceOrder></PlaceOrder> </PrivateRoute >
          <PrivateRoute path="/addPlace"><AddPlace></AddPlace></PrivateRoute >
          <PrivateRoute path="/manageTour"> <ManageTour></ManageTour> </PrivateRoute >
          <PrivateRoute path="/myTour"> <MyTour></MyTour> </PrivateRoute >

          <Route path='/*'><Nopage></Nopage></Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
