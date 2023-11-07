import "./Home.css";

// React

import { useNavigate } from "react-router-dom";

// Material

import { SvgIcon } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// Components

import { ConsultForm } from "../../components/ConsultForm/ConsultForm";
import { Calculator } from "../../components/Calculator/Calculator";

export const Home = () => {
  const navigate = useNavigate();
  const handleClickSettings = () => {
    navigate("/settings");
  };

  return (
    <section className="home">
      <section className="flyers">
        <nav className="home-nav">
          <h2 className="page-title">FLYERS</h2>

          <button className="icon-button" onClick={handleClickSettings}>
            <SvgIcon className="icon" component={SettingsIcon} inheritViewBox />
          </button>
        </nav>

        <aside>
          <p>
            El flyer estándar se imprime sobre papel estucado brillo en el
            formato deseado.
          </p>
        </aside>

        <ConsultForm />

        <aside>
          <p className="answer">¿Tienes alguna duda?</p>
          <p className="response">
            Pregunta a nuestros expertos a través de un chat directo por
            WhatsApp.
          </p>
          <section className="last-p">
            <SvgIcon
              className="whatsapp-icon"
              component={WhatsAppIcon}
              inheritViewBox
            />
            <p className="tlf">600 00 00 00</p>
          </section>
        </aside>
      </section>

      <Calculator />
    </section>
  );
};
