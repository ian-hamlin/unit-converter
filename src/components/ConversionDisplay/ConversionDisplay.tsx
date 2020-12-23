import React from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import conversionData from "../../data/conversions_v2.json";
import Conversion from "../../types/Conversion";
import NotFound from "../NotFound/NotFound";

const ConversionDetail = (id: string) => {
  const conversions: Conversion[] = [...conversionData];
  const conversion: Conversion[] = conversions.filter((con) => con.slug === id);

  if (conversion.length === 0) {
    return null;
  }

  return conversion[0];
};

const ConversionDisplay = (props: any) => {
  const { t } = useTranslation();

  const { match } = props;
  const detail = ConversionDetail(match.params.id);

  if (detail === null) {
    return (
      <>
        <Helmet>
          <title>404 - {t("App_Title")}</title>
        </Helmet>
        <NotFound />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>
          {t(detail.category)} - {t("App_Title")}
        </title>
      </Helmet>
      <Row>
        <Col className="text-center">
        <h3>{t(detail.category)}</h3>
        </Col>
      </Row>            
      <Row xs="1" sm="1" md="3" lg="3">
        <Col className="text-right">
                    <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">{t("Convert_From")}</InputGroup.Text>
            </InputGroup.Prepend>
<Form.Control as="select" custom>
      {detail.units.map((unit) => (
        <option value={unit.resourceName}>{t(unit.resourceName)}</option>
      ))}
    </Form.Control>
          </InputGroup>
        </Col>
        <Col className="text-center">
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">{t("Convert_Value")}</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
        </Col>
        <Col className="text-left">
<InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">{t("Convert_To")}</InputGroup.Text>
            </InputGroup.Prepend>
<Form.Control as="select" custom>
      {detail.units.map((unit) => (
        <option value={unit.resourceName}>{t(unit.resourceName)}</option>
      ))}
    </Form.Control>
          </InputGroup>

        </Col>
      </Row>
    </>
  );
};

export default ConversionDisplay;
