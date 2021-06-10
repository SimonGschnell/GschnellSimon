import { ReactComponent as Logo } from "../../images/logo.svg";

let footer = () => (
  <>
    <footer className='bg-dark mt-auto  px-5 py-3 text-white-50'>
      <p>
        {" "}
        This site has{" "}
        <a href='/' className='text-white'>
          Copyright ©
        </a>
        , by{" "}
        <a href='/' className='text-white'>
          Simon Gschnell
        </a>
        .
        <span className='float-right'>
          created with{" "}
          <span className='text-white'>
            React <Logo />
          </span>
        </span>
      </p>
    </footer>
  </>
);

export default footer;
