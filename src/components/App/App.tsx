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

const xs_size: number = 1;
const md_size: number = 2;
const lg_size: number = 2;

const ConversionCard = (props: { category: string }) => {
  const { t, i18n } = useTranslation();

  return (
    <Col>
      <Card border="success" className="mb-3">
        <Card.Body>
          <Card.Title>{t(props.category)}</Card.Title>
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
    <Row xs={xs_size} md={md_size} lg={lg_size}>
      {props.columns.map((column) => (
        <ConversionCard key={column.category} category={column.category} />
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
    </Container>
  );
};

export default App;
