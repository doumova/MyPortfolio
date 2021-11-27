import './App.css';
import {Container, Grid} from '@material-ui/core';
import Profils from './components/Profils/Profils';
import Header from './components/Header/Header';
import Resume from './pages/Resume/Resume';
import Footer from './components/Footer/Footer';
import Portfolio from './pages/Portfolio/Portfolio';
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Profils/>
          </Grid>
          <Grid item xs style={{ backgroundColor:'blue' }} >
              <Header/>
              <Router>
                <Switch>
                <Route path="/Portfolio">
                <Portfolio/>
                </Route>
                <Route exact path="/">
                <Resume/>
                </Route>
                </Switch>
              </Router>
            {/* footer */}
              <Footer/>
             
            </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
