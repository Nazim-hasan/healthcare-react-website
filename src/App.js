import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AboutUs from './pages/AboutUs/AboutUs/AboutUs';
import Doctors from './pages/Doctors/Doctors/Doctors';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';
import AllServices from './pages/Service/AllServices/AllServices';
import ServiceDetails from './pages/Service/Service/ServiceDetails';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <AuthProvider>
          <BrowserRouter>
            <Header/>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/services">
              <AllServices></AllServices>
            </Route>
            <Route exact path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route exact path="/about">
            <AboutUs></AboutUs>
            </Route>
            <PrivateRoute exact path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
