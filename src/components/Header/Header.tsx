import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory, useLocation } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [showHeader, setShowHeader] = useState<boolean>(true);

  let history = useHistory();

  function handleClick() {        
    if (location.pathname !== "/") {
      history.push("/");
    }    
  }
  
  useEffect(() => {
    setShowHeader(location.pathname === "/");
  }, [location.pathname]);

  return (
    <div className="text-center">
      <button className="btn btn-default" onClick={handleClick}>
        <img
          className="d-block mx-auto mb-4"
          src="/unit-converter/android-chrome-192x192.png"
          alt=""
          width="72"
          height="72"
        />
      </button>
      {showHeader ?
      <><h2>{t("App_Title")}</h2>
      <p className="lead">{t("App_SubTitle")}</p></>
      : <></>}
    </div>
  );
};

export default Header;

