import {BrowserRouter as Router , Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavB from './components/Home/NavB';
import Slider from './components/Home/Slider';
import More from './components/Home/More';
import Contact from './components/Home/Contact';
import Signup from './components/Home/Signup';
import Signin from './components/Home/Signin';
import DashboardE from './components/Profile/DashboardE';
import TabsF from './components/Profile/Tabs/TabesFemme/TabsF';
import TabsH from './components/Profile/Tabs/TabesHomme/TabsH';
import TabsE from './components/Profile/Tabs/TabesEnfant/TabsE';
import CardsList from './components/Profile/CardsList';
import CardsListC from './components/Profile/CardsListC';
import CardListJ from './components/Profile/CardListJ';
function App() {
  return (
    <Router>
    <div>
  <Route path="/"  component={NavB}  />
  <Route path ="/" exact  component={Slider} />
  <Route path ="/" exact  component={More} />
  <Route path = "/"exact   component={Contact} />
  <Route path = "/Contact"exact   component={Contact} />
  <Route path ="/DashboardE/Femme" exact   component ={TabsF} />
  <Route path ="/DashboardE/Homme" exact   component ={TabsH} />
  <Route path ="/DashboardE/Enfant" exact   component ={TabsE} />
  <Route path ="/DashboardE/all/tshirt" exact  component ={CardsList} />
  <Route path ="/DashboardE/all/shoes" exact  component ={CardsListC} />
  <Route path ="/DashboardE/all/jeans" exact  component ={CardListJ} />
   <Route path = "/DashboardE"   component={DashboardE} />
   <Route path ="/login"  component={Slider} />
   <Route path = "/login"   component={Signin} />
   <Route path = "/register"   component={Signup} />
    </div>
    </Router>
  );
}

export default App;
