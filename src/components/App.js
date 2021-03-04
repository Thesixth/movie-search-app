import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { Globalprovider } from '../context/GlobalState';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IndividualMovie from './IndividualMovie';
import Favourites from './Favourites'
import About from './About';

const App = () => 
<div>
   <Globalprovider>
   <GlobalStyle />
        <div className="App">
        <Router basename="/movie-search">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/favourites" component={Favourites} />
                <Route path="/about" component={About}  />
                <Route exact path="/:movieId" component={IndividualMovie} />
            </Switch>
        </Router>
        </div>
   </Globalprovider>
</div>;

export default App;
