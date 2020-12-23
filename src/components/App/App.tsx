import React from "react";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import CategoryDisplay from "../CategoryDisplay/CategoryDisplay";
import ConversionDisplay from "../ConversionDisplay/ConversionDisplay";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const App = () => {
  const { t } = useTranslation();
  
  return (
    <Container className="p-3">
      <Helmet>
        <title>{t("App_Title")}</title>
      </Helmet>
      <Router>
        <Header />
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
        <Footer />
      </Router>
    </Container>
  );
};

export default App;
