import React from "react";
import { Helmet } from "react-helmet-async";
import conversionData from "../../data/conversions_v2.json";
import Conversion from "../../types/Conversion";
import { useTranslation } from "react-i18next";
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
      <div>{t(detail.category)}</div>
    </>
  );
};

export default ConversionDisplay;
