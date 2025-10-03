import React,{useState} from "react";

const useStateDemo2 = () => {
  const [loader, setLoader] = useState(true); // info : boolean
  const changeLoader = () => {
    setLoader(!loader);
  };
  return (
    <div>
      {loader == true && <h1>Loading</h1>}
      <button onClick={() => changeLoader()}>Change Loader </button>
    </div>
  );
};

export default useStateDemo2;
