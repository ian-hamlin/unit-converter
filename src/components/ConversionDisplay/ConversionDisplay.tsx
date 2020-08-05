import React from "react";
import { Helmet } from "react-helmet-async";

const ConversionDisplay = (props: any) => {
  const { match } = props;

  return <div>{match.params.id}</div>;
};

export default ConversionDisplay;
