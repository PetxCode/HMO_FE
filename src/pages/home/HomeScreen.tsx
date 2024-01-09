import { useEffect, useState } from "react";
import Button from "../../components/reUse/Button";
import { useDispatch } from "react-redux";
import { loginState, logoutState } from "../../global/reduxState";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState();

  return (
    <div>
      <div>This is Home</div>
    </div>
  );
};

export default HomeScreen;
