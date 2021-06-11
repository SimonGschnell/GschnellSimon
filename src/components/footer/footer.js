import { ReactComponent as Logo } from "../../images/logo.svg";

const heartLogo = (
  <svg
    className='mx-2 text-danger'
    width='22'
    fill='currentColor'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
      clipRule='evenodd'
    />
  </svg>
);

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
            React <Logo /> & {heartLogo}
          </span>
        </span>
      </p>
    </footer>
  </>
);

export default footer;
