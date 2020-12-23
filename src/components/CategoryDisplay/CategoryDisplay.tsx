import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import conversionData from "../../data/conversions_v2.json";
import Conversion from "../../types/Conversion";
import { chunkArray } from "../../utils";

/* Some sizes to break the grid on */
const xs_size: number = 2;
const sm_size: number = 2;
const md_size: number = 2;
const lg_size: number = 4;

const ConversionCard = (props: {
  category: string;
  icon_url: string;
  navigate_to: string;
}) => {
  const { t } = useTranslation();
  let history = useHistory();

  function handleClick() {
    history.push(props.navigate_to);
  }

  return (
    <Col>
      <Card className="mb-3">
        {/* <Card.Img variant="top" src={props.icon_url} /> */}
        <Card.Title className="text-center mb-0 mt-1">
          <img src={props.icon_url} alt={t(props.category)} />
        </Card.Title>
        <Card.Body className="text-center">
          <Button
            className="stretched-link"
            variant="success"
            onClick={handleClick}
          >
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
          navigate_to={conversion.slug}
        />
      ))}
    </Row>
  );
};

const CategoryDisplay = () => {
  // Load the arary from the local json conversions file.
  const conversions: Conversion[] = [...conversionData];
  conversions.sort((a, b) => {
    return a.sort - b.sort;
  });
  const chunks: Conversion[][] = chunkArray(conversions, lg_size);

  return (
    <>
      {chunks.map((chunk, idx) => (
        <ConversionRow key={idx} columns={chunk} />
      ))}
    </>
  );
};

export default CategoryDisplay;
