import "./ResetButton.css";

// React

import { useState } from "react";

// Hooks

import { resetDatabase } from "../../services/api";

export const ResetButton = () => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showChangeMadeModal, setShowChangeMadeModal] = useState(false);

  const handleClickReset = () => {
    setShowConfirmModal(true);
  };

  const handleClickAway = () => {
    setShowConfirmModal(false);
    setShowChangeMadeModal(false);
  };

  const handleClickConfirm = (e) => {
    e.stopPropagation();
    resetDatabase();
    setShowChangeMadeModal(true);
    setShowConfirmModal(false);
    setTimeout(() => {
      setShowChangeMadeModal(false);
    }, 1500);
  };

  const handleClickCancel = (e) => {
    e.stopPropagation();
    setShowConfirmModal(false);
  };

  return (
    <>
      <section className="reset">
        <h3 className="reset-title">Resetear base de datos</h3>
        <button className="reset-button" onClick={handleClickReset}>
          Reset
        </button>
      </section>

      {showConfirmModal && (
        <section className="modal-back dark" onClick={handleClickAway}>
          <section className="modal-body">
            <h2>¿Estás seguro de que quieres resetear la base de datos?</h2>

            <section className="modals-buttons">
              <button className="modal-button" onClick={handleClickConfirm}>
                Si
              </button>
              <button className="modal-button" onClick={handleClickCancel}>
                No
              </button>
            </section>
          </section>
        </section>
      )}

      {showChangeMadeModal && (
        <section className="modal-back dark">
          <section className="modal-body">
            <h3>Base resetada correctamente</h3>

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
    </>
  );
};
