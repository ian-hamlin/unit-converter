import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import CategoryDisplay from "../CategoryDisplay/CategoryDisplay";
import ConversionDisplay from "../ConversionDisplay/ConversionDisplay";


const App = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  }

  return (
    <Container className="p-3">
      <Helmet>
        <title>{t("App_Title")}</title>
      </Helmet>
      <div className="text-center">
        <img
          className="d-block mx-auto mb-4"
          src="/unit-converter/android-chrome-192x192.png"
          alt=""
          width="72"
          height="72"
        />
        <h2>{t("App_Title")}</h2>
        <p className="lead">{t("App_SubTitle")}</p>
      </div>
      <Router>
        <Switch>
          <Route
            path="/:id"
            render={(props) => {
              return <ConversionDisplay {...props} />;
            }}
          />
          <Route path="/">
            <CategoryDisplay />
          </Route>
        </Switch>
      </Router>
      <footer className="pt-5 text-muted text-center text-small">
        <p className="mb-1">icons by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>, source code on <a target="_blank" rel="noopener noreferrer" href="https://github.com/ian-hamlin/unit-converter">GitHub</a></p>
        <p>
          <Button onClick={() => changeLanguage("en")}variant="link">{t("Lang_English")}</Button>
          <Button onClick={() => changeLanguage("es")} variant="link">{t("Lang_Spanish")}</Button>
        </p>
      </footer>
    </Container>
  );
};

export default App;
