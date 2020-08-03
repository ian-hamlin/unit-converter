import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import { chunkArray } from "../../utils";
import conversionData from "../../data/conversions.json";
import Conversion from "../../types/Conversion";
import { useTranslation } from "react-i18next";

const xs_size: number = 1;
const md_size: number = 2;
const lg_size: number = 4;

const ConversionCard = (props: { category: string; icon_url: string }) => {
  const { t, i18n } = useTranslation();

  return (
    <Col>
      <Card border="success" className="mb-3">
        <Card.Body>
          <Media>
            <img
              width={64}
              height={64}
              className="align-self-start mr-3"
              src={props.icon_url}
              alt={t(props.category)}
            />
            <Media.Body>
              <h5>{t(props.category)}</h5>
              <Button className="stretched-link" variant="success">
                {t(props.category)}
              </Button>
            </Media.Body>
          </Media>
        </Card.Body>
      </Card>
    </Col>
  );
};

const ConversionRow = (props: { columns: Conversion[] }) => {
  return (
    <Row xs={xs_size} md={md_size} lg={lg_size}>
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
    </Container>
  );
};

export default App;
