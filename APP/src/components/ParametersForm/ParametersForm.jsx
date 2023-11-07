import "./ParametersForm.css";

// React

import { useState } from "react";

// Hooks

import { newPostParameter } from "../../services/api";

export const ParametersForm = () => {
  const [delivery, setDelivery] = useState("");
  const [dimension, setDimension] = useState("");
  const [sides, setSides] = useState("");
  const [paper, setPaper] = useState("");
  const [units, setUnits] = useState("");

  const [deliveryPrice, setDeliveryPrice] = useState("");
  const [dimensionPrice, setDimensionPrice] = useState("");
  const [sidesPrice, setSidesPrice] = useState("");
  const [paperPrice, setPaperPrice] = useState("");

  const deliveryTable = "deliveries";
  const dimensionTable = "dimensions";
  const sidesTable = "sides";
  const paperTable = "papers";
  const unitsTable = "units";

  const [deliveryError, setDeliveryError] = useState("");
  const [dimensionError, setDimensionError] = useState("");
  const [sidesError, setSidesError] = useState("");
  const [paperError, setPaperError] = useState("");
  const [unitsError, setUnitsError] = useState("");

  const handleOnChangeDelivery = (e) => {
    setDelivery(e.target.value);
  };
  const handleOnChangeDimension = (e) => {
    setDimension(e.target.value);
  };
  const handleOnChangeSides = (e) => {
    setSides(e.target.value);
  };
  const handleOnChangePaper = (e) => {
    setPaper(e.target.value);
  };
  const handleOnChangeUnits = (e) => {
    setUnits(e.target.value);
  };

  const handleOnChangeDeliveryPrice = (e) => {
    setDeliveryPrice(e.target.value);
  };
  const handleOnChangeDimensionPrice = (e) => {
    setDimensionPrice(e.target.value);
  };
  const handleOnChangeSidesPrice = (e) => {
    setSidesPrice(e.target.value);
  };
  const handleOnChangePaperPrice = (e) => {
    setPaperPrice(e.target.value);
  };

  const [showChangeMadeModal, setShowChangeMadeModal] = useState(false);
  const [table, setTable] = useState("");

  const handleFormDelivery = async (e) => {
    e.preventDefault();

    try {
      await newPostParameter({
        parameter: delivery,
        price: deliveryPrice,
        table: deliveryTable,
      });
      setDelivery("");
      setDeliveryPrice("");
      setDeliveryError("");
      setTable("Plazo de entrega añadido");

      setShowChangeMadeModal(true);
      setTimeout(() => {
        setShowChangeMadeModal(false);
      }, 1500);
    } catch (error) {
      setDeliveryError(error.message);
    }
  };

  const handleFormDimension = async (e) => {
    e.preventDefault();

    try {
      await newPostParameter({
        parameter: dimension,
        price: dimensionPrice,
        table: dimensionTable,
      });
      setDimension("");
      setDimensionPrice("");
      setDimensionError("");
      setTable("Dimensión añadida");

      setShowChangeMadeModal(true);
      setTimeout(() => {
        setShowChangeMadeModal(false);
      }, 1500);
    } catch (error) {
      setDimensionError(error.message);
    }
  };

  const handleFormSides = async (e) => {
    e.preventDefault();

    try {
      await newPostParameter({
        parameter: sides,
        price: sidesPrice,
        table: sidesTable,
      });
      setSides("");
      setSidesPrice("");
      setSidesError("");
      setTable("Nº de caras añadida");

      setShowChangeMadeModal(true);
      setTimeout(() => {
        setShowChangeMadeModal(false);
      }, 1500);
    } catch (error) {
      setSidesError(error.message);
    }
  };

  const handleFormPaper = async (e) => {
    e.preventDefault();

    try {
      await newPostParameter({
        parameter: paper,
        price: paperPrice,
        table: paperTable,
      });
      setPaper("");
      setPaperPrice("");
      setPaperError("");
      setTable("Tipo de papel añadido");

      setShowChangeMadeModal(true);
      setTimeout(() => {
        setShowChangeMadeModal(false);
      }, 1500);
    } catch (error) {
      setPaperError(error.message);
    }
  };

  const handleFormUnits = async (e) => {
    e.preventDefault();

    try {
      await newPostParameter({
        parameter: units,
        table: unitsTable,
      });
      setUnits("");
      setUnitsError("");
      setTable("Número de unidades añadido");

      setShowChangeMadeModal(true);
      setTimeout(() => {
        setShowChangeMadeModal(false);
      }, 1500);
    } catch (error) {
      setUnitsError(error.message);
    }
  };

  return (
    <section className="parameters-forms">
      <section className="new-post">
        <h2>Añadir plazo de entrega</h2>

        <form className="post-form" onSubmit={handleFormDelivery}>
          <fieldset>
            <label>Plazo:</label>

            <input
              type="text"
              name="delivery_name"
              id="delivery_name"
              autoComplete="off"
              value={delivery}
              onChange={handleOnChangeDelivery}
              required
            />
          </fieldset>

          <fieldset>
            <label>Precio:</label>

            <input
              type="number"
              name="delivery_price"
              id="delivery_price"
              autoComplete="off"
              value={deliveryPrice}
              onChange={handleOnChangeDeliveryPrice}
              required
            />
          </fieldset>

          <button className="send button">Enviar</button>
        </form>

        {deliveryError ? <p className="error">⚠️ {deliveryError}</p> : null}
      </section>

      <section className="new-post">
        <h2>Añadir dimension</h2>

        <form className="post-form" onSubmit={handleFormDimension}>
          <fieldset>
            <label>Dimension:</label>

            <input
              type="text"
              name="dimension_name"
              id="dimension_name"
              autoComplete="off"
              value={dimension}
              onChange={handleOnChangeDimension}
              required
            />
          </fieldset>

          <fieldset>
            <label>Precio:</label>

            <input
              type="number"
              name="dimension_price"
              id="dimension_price"
              autoComplete="off"
              value={dimensionPrice}
              onChange={handleOnChangeDimensionPrice}
              required
            />
          </fieldset>

          <button className="send button">Enviar</button>
        </form>

        {dimensionError ? <p className="error">⚠️ {dimensionError}</p> : null}
      </section>

      <section className="new-post">
        <h2>Añadir nº de caras</h2>

        <form className="post-form" onSubmit={handleFormSides}>
          <fieldset>
            <label>Nº de caras:</label>

            <input
              type="text"
              name="sides_name"
              id="sides_name"
              autoComplete="off"
              value={sides}
              onChange={handleOnChangeSides}
              required
            />
          </fieldset>

          <fieldset>
            <label>Precio:</label>

            <input
              type="number"
              name="sides_price"
              id="sides_price"
              autoComplete="off"
              value={sidesPrice}
              onChange={handleOnChangeSidesPrice}
              required
            />
          </fieldset>

          <button className="send button">Enviar</button>
        </form>

        {sidesError ? <p className="error">⚠️ {sidesError}</p> : null}
      </section>

      <section className="new-post">
        <h2>Añadir tipo de papel</h2>

        <form className="post-form" onSubmit={handleFormPaper}>
          <fieldset>
            <label>Tipo de papel:</label>

            <input
              type="text"
              name="paper_name"
              id="paper_name"
              autoComplete="off"
              value={paper}
              onChange={handleOnChangePaper}
              required
            />
          </fieldset>

          <fieldset>
            <label>Precio:</label>

            <input
              type="number"
              name="paper_price"
              id="paper_price"
              autoComplete="off"
              value={paperPrice}
              onChange={handleOnChangePaperPrice}
              required
            />
          </fieldset>

          <button className="send button">Enviar</button>
        </form>

        {paperError ? <p className="error">⚠️ {paperError}</p> : null}
      </section>

      <section className="new-post little">
        <h2>Añadir unidades</h2>

        <form className="post-form" onSubmit={handleFormUnits}>
          <fieldset>
            <label>Nº de unidades:</label>

            <input
              type="text"
              name="units_name"
              id="units_name"
              autoComplete="off"
              value={units}
              onChange={handleOnChangeUnits}
              required
            />
          </fieldset>

          <button className="send button">Enviar</button>
        </form>

        {unitsError ? <p className="error">⚠️ {unitsError}</p> : null}
      </section>

      {showChangeMadeModal && (
        <section className="modal-back dark">
          <section className="modal-body">
            <h3>{table}</h3>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="50"
              viewBox="0 0 118.43873 118.43873"
            >
              <path
                className="check"
                strokeLinejoin="round"
                d="M34.682 60.352l15.61 15.61 33.464-33.464"
                stroke="black"
                strokeLinecap="round"
                strokeWidth="4.3"
                fill="none"
              />
              <circle
                className="circle"
                strokeLinejoin="round"
                cx="59.219"
                strokeLinecap="round"
                stroke="black"
                cy="59.219"
                r="57.069"
                strokeWidth="4.3"
                fill="none"
              />
            </svg>
          </section>
        </section>
      )}
    </section>
  );
};
