import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "./firebase";

import {
  setActiveUser,
  setUserLogout,
  selectUserEmail,
  selectUserName,
} from "./features/users/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  const handleSignIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch(
        setActiveUser({
          userName: result.user.displayName,
          userEmail: result.user.email,
        })
      );
    });
  };
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUserLogout());
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      {userEmail ? (
        <>
          <button onClick={handleSignOut}>Sign Out</button>
          <h1>{userName}</h1>
          <h2>{userEmail}</h2>
        </>
      ) : (
        <button onClick={handleSignIn}>Sign In</button>
      )}
    </div>
  );
};

export default App;
