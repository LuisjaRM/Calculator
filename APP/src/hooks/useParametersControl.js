// React

import { useEffect, useState } from "react";

// Hooks

import { useGetParameters } from "../services/api";

// Contexts

import { useSetParametersContext } from "../contexts/SetParametersContext";
import { useSetPriceContext } from "../contexts/SetPriceContext";

export const useParametersControl = () => {
  const { data } = useGetParameters();
  const parameters = data?.parameters;

  const deliveryDefault = parameters?.deliveries[0]?.parameter;
  const dimensionDefault = parameters?.dimensions[0]?.parameter;
  const sidesDefault = parameters?.sides[0]?.parameter;
  const paperDefault = parameters?.papers[0]?.parameter;

  const [delivery, setDelivery] = useState(deliveryDefault);
  const [dimension, setDimension] = useState(dimensionDefault);
  const [sides, setSides] = useState(sidesDefault);
  const [paper, setPaper] = useState(paperDefault);

  const deliveryPriceDefault = Number(parameters?.deliveries[0]?.price);
  const dimensionPriceDefault = Number(parameters?.dimensions[0]?.price);
  const sidesPriceDefault = Number(parameters?.sides[0]?.price);
  const paperPriceDefault = Number(parameters?.papers[0]?.price);

  const [deliveryPrice, setDeliveryPrice] = useState(deliveryPriceDefault);
  const [dimensionPrice, setDimensionPrice] = useState(dimensionPriceDefault);
  const [sidesPrice, setSidesPrice] = useState(sidesPriceDefault);
  const [paperPrice, setPaperPrice] = useState(paperPriceDefault);

  const [parametersSelected, setParametersSelected] = useSetParametersContext();

  useEffect(() => {
    setParametersSelected({
      delivery: delivery === undefined ? deliveryDefault : delivery,
      dimension: dimension === undefined ? dimensionDefault : dimension,
      sides: sides === undefined ? sidesDefault : sides,
      paper: paper === undefined ? paperDefault : paper,
    });
  }, [
    setParametersSelected,
    delivery,
    dimension,
    sides,
    paper,
    deliveryDefault,
    dimensionDefault,
    sidesDefault,
    paperDefault,
  ]);

  const [price, setPrice] = useSetPriceContext();

  useEffect(() => {
    setPrice(
      (isNaN(deliveryPrice) ? deliveryPriceDefault : deliveryPrice) +
        (isNaN(dimensionPrice) ? dimensionPriceDefault : dimensionPrice) +
        (isNaN(sidesPrice) ? sidesPriceDefault : sidesPrice) +
        (isNaN(paperPrice) ? paperPriceDefault : paperPrice)
    );
  }, [
    setPrice,
    deliveryPrice,
    dimensionPrice,
    sidesPrice,
    paperPrice,
    deliveryPriceDefault,
    dimensionPriceDefault,
    sidesPriceDefault,
    paperPriceDefault,
  ]);

  const units = data.parameters?.units;
  const unitsDefault = Number(parameters?.units[0]?.parameter);
  const [unitsSelected, setUnitsSelected] = useState(unitsDefault);
  const consultPrice =
    price * (isNaN(unitsSelected) ? unitsDefault : unitsSelected);

  return {
    parameters,
    delivery,
    setDelivery,
    dimension,
    setDimension,
    sides,
    setSides,
    paper,
    setPaper,
    setDeliveryPrice,
    setDimensionPrice,
    setSidesPrice,
    setPaperPrice,
    parametersSelected,
    units,
    unitsSelected,
    setUnitsSelected,
    consultPrice,
  };
};
