
import Navigation from './components/Nav.js';
import Footer from './components/footer/footer';
import routes from './routes/routes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



function App() {
  return (
    <>
    <div className="d-flex w-100 h-100  mx-auto flex-column">
    <Router>
      <Navigation></Navigation>
      <Switch>
        {routes.map(({route,Component,options})=>{return (<Route path={route} {...options} component={({history}) => { return <Component history={history}  />}}/>)})}
        
      </Switch>
      </Router>
      <Footer></Footer>
      </div>
    </>
  );
}

export default App;
