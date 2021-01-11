import './App.css';
import Colors from './components/Colors';
import SpesificColor from './components/SpesificColor';
import AddColor from './components/AddColor'
import Added from './components/AddedComponent'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const addColor = (color) => {
    console.log(color)
    return <Added youColor = {color}>{color}</Added>

}

  return (
    <>
      <Router>
    <div className="App"></div>

    <Switch>
      <Route exact path='/' component={Colors}></Route>
      <Route exact path='/colors' component={Colors}></Route>
      <Route exact path='/colors/new' render={() => (<AddColor addColor={addColor}></AddColor>)}></Route>
      <Route exact path='/colors/:color' component={SpesificColor}></Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
