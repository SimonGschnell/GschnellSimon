import Navigation from "./components/Nav.js";
import Footer from "./components/footer/footer";
import routes from "./routes/routes";
import Container from "react-bootstrap/Container";
import "./style/App.css";
import { useState, useLayoutEffect, Suspense, useRef } from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  let currHeight = useRef();
  let [pageHeight, setPageHeight] = useState(0);

  useLayoutEffect(() => {
    //setTimeout used to render the height at the end of the event queue
    setTimeout(() => {
      console.log(currHeight.current.getBoundingClientRect().height);
      setPageHeight(currHeight.current.getBoundingClientRect().height);
    }, 0);
  });

  return (
    <>
      <div className='d-flex w-100 h-100  mx-auto flex-column'>
        <Navigation></Navigation>
        <div className='my-5' style={{ minHeight: pageHeight }}>
          <Container className='position-relative' fluid='md'>
            <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={300}
                    classNames='fade'
                  >
                    <Suspense fallback={<div>Loading...</div>}>
                      <Switch location={location}>
                        {routes.map(({ route, Component, options }) => {
                          return (
                            <Route
                              key={route}
                              path={route}
                              {...options}
                              component={({ history }) => {
                                return (
                                  <div
                                    ref={currHeight}
                                    id='page'
                                    className='page '
                                  >
                                    <Component history={history} />
                                  </div>
                                );
                              }}
                            />
                          );
                        })}
                      </Switch>
                    </Suspense>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </Container>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
