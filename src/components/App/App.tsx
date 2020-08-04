import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { chunkArray } from "../../utils";
import conversionData from "../../data/conversions.json";
import Conversion from "../../types/Conversion";
import { useTranslation } from "react-i18next";

const xs_size: number = 2;
const sm_size: number = 2;
const md_size: number = 2;
const lg_size: number = 4;

const ConversionCard = (props: { category: string; icon_url: string }) => {
  const { t, i18n } = useTranslation();

  return (
    <Col>
      <Card className="mb-3">
        {/* <Card.Img variant="top" src={props.icon_url} /> */}
        <Card.Title className="text-center mb-0 mt-1">
          <img src={props.icon_url} />
        </Card.Title>
        <Card.Body className="text-center">
          <Button className="stretched-link" variant="success">
            {t(props.category)}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

const ConversionRow = (props: { columns: Conversion[] }) => {
  return (
    <Row xs={xs_size} sm={sm_size} md={md_size} lg={lg_size}>
      {props.columns.map((conversion) => (
        <ConversionCard
          key={conversion.category}
          category={conversion.category}
          icon_url={conversion.icon}
        />
      ))}
    </Row>
  );
};

const App = () => {
  const { t, i18n } = useTranslation();

  // Load the arary from the local json conversions file.
  const conversions: Conversion[] = [...conversionData];
  const chunks: Conversion[][] = chunkArray(conversions, lg_size);

  return (
    <Container className="p-3">
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
      {chunks.map((chunk, idx) => (
        <ConversionRow key={idx} columns={chunk} />
      ))}
      icons by{" "}
      <a target="_blank" href="https://icons8.com">
        Icons8
      </a>
      , source code on{" "}
      <a target="_blank" href="https://github.com/ian-hamlin/unit-converter">
        GitHub
      </a>
    </Container>
  );
};

export default App;
