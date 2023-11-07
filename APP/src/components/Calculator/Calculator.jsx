import "./Calculator.css";

// Hooks

import { useParametersControl } from "../../hooks/useParametersControl";

export const Calculator = () => {
  const {
    parametersSelected,
    units,
    unitsSelected,
    setUnitsSelected,
    consultPrice,
  } = useParametersControl();

  const handleChangeUnits = (e) => {
    console.log(e.target.value);
    setUnitsSelected(e.target.value);
  };

  return (
    <section className="calculator">
      <select
        name="units"
        id="units"
        value={isNaN(unitsSelected) ? 0 : unitsSelected}
        onChange={handleChangeUnits}
      >
        {units?.map((unit) => (
          <option key={unit.id} value={unit.parameter}>
            {unit.parameter} unidades
          </option>
        ))}
      </select>

      <ul className="parameters-selected">
        <li>{parametersSelected?.delivery}</li>
        <li>{parametersSelected?.dimension}</li>
        <li>{parametersSelected?.sides}</li>
        <li>{parametersSelected?.paper}</li>
      </ul>

      <section>
        <h3 className="price-title">TOTAL (IVA incluido)</h3>
        <p className="price">{isNaN(consultPrice) ? 0 : consultPrice} €</p>
        <aside>
          <p className="dimensioning">
            * Importe orientativo y no vinculante, puede sufrir variaciones al
            recibir los archivos.
          </p>
        </aside>
      </section>

      <aside className="send-email">
        <form>
          <fieldset>
            <label>Introduzca su email:</label>
            <input type="email" autoComplete="off" />
          </fieldset>

          <button className="send">RECIBIR PRESUPUESTO</button>
        </form>
      </aside>
    </section>
  );
};
