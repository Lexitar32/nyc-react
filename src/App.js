import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Land from "./components/pages/Land";
import About from "./components/pages/About";
import Faq from "./components/pages/Faq";
import ForgotPassword from "./components/pages/ForgotPassword";
import ResetPassword from "./components/pages/ResetPassword";
import Terms from "./components/pages/Terms";
// import { Test } from "./testingForms";
// import MainUserpage from './components/reducer/Userpage/MainUserpage';
import SignUp from "./components/pages/SignUp";
import Default from "./components/pages/Default";
import ContactUs from "./components/pages/ContactUs";
import NavBar from "./sidebars/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div>
          <Switch>
            <Route exact path="/">
              <Land />
            </Route>
            <Route exact path="/about-us" component={About} />
            <Route exact path="/contact" component={ContactUs} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/faq" component={Faq} />
           
            <Route exact path="/login" component={SignUp} />
            <Route path="/userpage" component={NavBar} />
            <Route path="/forgot" component={ForgotPassword} />
            <Route path="/reset" component={ResetPassword} />
            <Route component={Default} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
