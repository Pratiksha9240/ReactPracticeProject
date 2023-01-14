import { useState } from "react";

const NameError = (props) => {
  const [flag, setFlag] = useState(false);

  const onCancel = () => {
    setFlag(true);
  };

  return (
    <div style={props.style}>
      {flag === false && (
        <form>
          <p>Please Enter Name</p>
          <button onClick={onCancel}>Cancel</button>
        </form>
      )}
    </div>
  );
};

export default NameError;
