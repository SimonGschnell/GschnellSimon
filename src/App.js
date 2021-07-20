import Navigation from "./components/Nav.js";
import Footer from "./components/footer/footer";
import routes from "./routes/routes";
import Container from "react-bootstrap/Container";
import Toast from "./components/UI/toasts/Toast";
import "./style/App.css";
import {
  useState,
  useLayoutEffect,
  useEffect,
  Suspense,
  useRef,
  useMemo,
} from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ToastContext from "./contexts/ToastContext";

function App() {
  let location = useLocation();
  let currHeight = useRef();

  let [height, setHeight] = useState(document.body.scrollHeight);

  let [toastContent, setToastContent] = useState(["", ""]);
  const toastProviderValue = useMemo(
    () => ({ toastContent, setToastContent }),
    [toastContent, setToastContent]
  );
  let [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    setHeight(0);
    console.log(document.body.scrollHeight);
    setTimeout(() => {
      setHeight(document.body.scrollHeight);
    }, 700);
  }, [location.pathname]);

  return (
    <>
      <div
        style={{
          background: "url('/img/bbgg.gif')",
          minHeight: height,
          backgroundAttachment: "fixed",
        }}
        className='d-flex w-100 h-100  mx-auto flex-column'
      >
        <Footer></Footer>
        <Navigation></Navigation>

        <div className='my-5'>
          <Container className='position-relative' fluid='md'>
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={300}
                classNames='alert'
              >
                <ToastContext.Provider value={toastProviderValue}>
                  <Switch location={location}>
                    {routes.map(({ route, Component, options }) => {
                      return (
                        <Route
                          key={route}
                          path={route}
                          {...options}
                          component={({ history }) => {
                            return (
                              <div ref={currHeight} id='page' className='page '>
                                <Component history={history} test='test' />
                              </div>
                            );
                          }}
                        />
                      );
                    })}
                  </Switch>
                </ToastContext.Provider>
              </CSSTransition>
            </TransitionGroup>
          </Container>

          {
            // Toast just for debugging purpose
          }
          <Toast
            title={toastContent[0]}
            text={toastContent[1]}
            styleC={{
              position: "fixed",
              bottom: "5rem",
              left: "2rem",
              minWidth: "200px",
              color: "black",
            }}
          />
        </div>

        {
          //<Footer></Footer>
        }
      </div>
    </>
  );
}

export default App;
