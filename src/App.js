import { useState } from "react";
import Calculator from "./components/Calculator/Calculator";
import CustomWindow from "./components/CustomWindow/CustomWindow";
import RollWnd from "./components/RollWnd/RollWnd";
import Window from "./components/Window/Window";
const App = () => {
  const [rollUp, setRollUp] = useState(true);
  return (
    <div>
      {rollUp ? (
        <RollWnd setRollUp={setRollUp} />
      ) : (
        //<Window setRollUp={setRollUp} children={<Calculator />} />
        <CustomWindow setRollUp={setRollUp} children={<Calculator />} />
      )}
    </div>
  );
};

export default App;
