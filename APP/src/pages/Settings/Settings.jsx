import "./Settings.css";

// Components

import { ResetButton } from "../../components/ResetButton/ResetButton";
import { ParametersForm } from "../../components/ParametersForm/ParametersForm";

export const Settings = () => {
  return (
    <section className="settings">
      <ParametersForm />
      <ResetButton />
    </section>
  );
};
