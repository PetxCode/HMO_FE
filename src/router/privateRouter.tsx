import { FC, PropsWithChildren, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { homeGETAPI, userCookieAPI } from "../api/userAPI";
import { jwtDecode } from "jwt-decode";

const PrivateRouter: FC<PropsWithChildren> = ({ children }) => {
  const user = useSelector((state: any) => state.user);
  const [state, setState] = useState();
  const [userData, setUserData] = useState();
  const [read, setRead] = useState<boolean>();

  useEffect(() => {
    homeGETAPI();

    const token: any = jwtDecode(user!);
    setUserData(token.id);

    userCookieAPI().then((res: any) => {
      setState(res.data);
    });

    setRead(userData === state);
  }, [userData, state]);

  return (
    <div>
      {user! ? (
        <div>{read! && <div>{children} </div>}</div>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default PrivateRouter;
