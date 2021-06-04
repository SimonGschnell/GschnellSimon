
import Navigation from './Nav.js';
import Heading from './landing/Jumbo';
import Footer from './footer/footer';

function App() {
  return (
    <>
    <div className="d-flex w-100 h-100  mx-auto flex-column">
      <Navigation></Navigation>
      <Heading></Heading>
      
      <Footer></Footer>
      </div>
    </>
  );
}

export default App;
