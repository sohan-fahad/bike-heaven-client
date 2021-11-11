import { } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AllProducts from './Pages/AllProducts/AllProducts';
import AddReviews from './Pages/Dashboard/AddReviews/AddReviews';
import AddProduct from './Pages/Dashboard/Admin/AddProduct/AddProduct';
import Home from './Pages/Home/Home/Home';
import Registration from './Pages/Login/Registration/Registration';
import Login from './Pages/Login/Login/Login.js'
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Details from './Pages/Details/Details';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          {/* <Route path="/addproduct">
            <AddProduct></AddProduct>
          </Route> */}
          <PrivateRoute path="/details/:id">
            <Details></Details>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          {/* <PrivateRoute path="/addreviews">
            <AddReviews></AddReviews>
          </PrivateRoute> */}
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/explore">
            <AllProducts></AllProducts>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
