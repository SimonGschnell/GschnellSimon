import Toast from "react-bootstrap/Toast";

const ToastComp = ({ title, text, styleC }) => {
  return (
    <Toast style={styleC}>
      <Toast.Header>
        <img src='holder.js/20x20?text=%20' className='rounded mr-2' alt='' />
        <strong className='mr-auto'>{title}</strong>
        <small>le miau 🚀</small>
      </Toast.Header>
      <Toast.Body>
        <pre>{text}</pre>
      </Toast.Body>
    </Toast>
  );
};

export default ToastComp;
