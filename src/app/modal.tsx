import { MouseEvent } from "react";

export const Modal = ({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) => {
  const handleModalClose = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    if (e.target !== e.currentTarget) return;
    onClose();
  };

  return (
    <div className="modal" onClick={handleModalClose}>
      <div className="modal__wrapper">{message}</div>
    </div>
  );
};
