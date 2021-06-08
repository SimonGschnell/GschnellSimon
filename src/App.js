
import Navigation from './components/Nav.js';
import Footer from './components/footer/footer';
import routes from './routes/routes'
import Container from 'react-bootstrap/Container'
import './style/App.css'
import {useState , useEffect} from 'react'
import {  Switch, Route } from 'react-router-dom'
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";



function App() {
  
  let [pageHeight, setPageHeight] = useState(0);

  useEffect(()=>{
    const height = document.getElementById('page').clientHeight;
    setPageHeight(height);
  },[pageHeight])

  return (
    <>
    <div className="d-flex w-100 h-100  mx-auto flex-column">
    
      <Navigation></Navigation>
      <div style={{minHeight:pageHeight}}>
      <Container className="position-relative" fluid="md">
        <Route render={({location})=>
      <TransitionGroup>
        <CSSTransition
        key={location.key}
        timeout={300}
        classNames="fade"
        >

      <Switch location={location}>
      
        
        {routes.map(({route,Component,options})=>{return (
        <Route key={route} path={route} {...options} 
          component={({history}) => 
            {
              return <div id="page" className="page mt-5"><Component  history={history}  /></div>
            }
          }/>
        )})}
        
      </Switch>  
         </CSSTransition>
      </TransitionGroup>
      
      }/>
 
      </Container>
      </div>
      
      <Footer></Footer>
      </div>
    </>
  );
}

export default App;
