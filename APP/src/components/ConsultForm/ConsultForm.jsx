import "./ConsultForm.css";

// Hooks

import { useParametersControl } from "../../hooks/useParametersControl";

export const ConsultForm = () => {
  const {
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
  } = useParametersControl();

  const handleChangeDelivery = (e) => {
    setDelivery(e.target.value);
    for (let i = 0; i < parameters.deliveries.length; i++) {
      if (e.target.value === parameters.deliveries[i].parameter) {
        setDeliveryPrice(Number(parameters.deliveries[i].price));
      }
    }
  };
  const handleChangeDimension = (e) => {
    setDimension(e.target.value);
    for (let i = 0; i < parameters.dimensions.length; i++) {
      if (e.target.value === parameters.dimensions[i].parameter) {
        setDimensionPrice(Number(parameters.dimensions[i].price));
      }
    }
  };
  const handleChangeSides = (e) => {
    setSides(e.target.value);
    for (let i = 0; i < parameters.sides.length; i++) {
      if (e.target.value === parameters.sides[i].parameter) {
        setSidesPrice(Number(parameters.sides[i].price));
      }
    }
  };
  const handleChangePaper = (e) => {
    setPaper(e.target.value);
    for (let i = 0; i < parameters.papers.length; i++) {
      if (e.target.value === parameters.papers[i].parameter) {
        setPaperPrice(Number(parameters.papers[i].price));
      }
    }
  };

  return (
    <form className="parameters-form">
      <fieldset>
        <label>Plazo de entrega</label>

        <select
          name="deliveries"
          id="deliveries"
          value={delivery}
          onChange={handleChangeDelivery}
        >
          {parameters?.deliveries.map((delivery) => (
            <option key={delivery.id} value={delivery.parameter}>
              {delivery.parameter}
            </option>
          ))}
        </select>
      </fieldset>

      <fieldset>
        <label>Dimensiones</label>

        <select
          name="dimensions"
          id="dimensions"
          value={dimension}
          onChange={handleChangeDimension}
        >
          {parameters?.dimensions.map((dimension) => (
            <option key={dimension.id} value={dimension.parameter}>
              {dimension.parameter}
            </option>
          ))}
        </select>
      </fieldset>

      <fieldset>
        <label>Nº Caras</label>

        <select
          name="sides"
          id="sides"
          value={sides}
          onChange={handleChangeSides}
        >
          {parameters?.sides.map((side) => (
            <option key={side.id} value={side.parameter}>
              {side.parameter}
            </option>
          ))}
        </select>
      </fieldset>

      <fieldset>
        <label>Papel</label>

        <select
          name="papers"
          id="papers"
          value={paper}
          onChange={handleChangePaper}
        >
          {parameters?.papers.map((paper) => (
            <option key={paper.id} value={paper.parameter}>
              {paper.parameter}
            </option>
          ))}
        </select>
      </fieldset>

      <button className="send">ENVIAR CONSULTA</button>
    </form>
  );
};
