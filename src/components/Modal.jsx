import { createPortal } from "react-dom"


function Modal({ title, content, show, onClose, onConfirm, confirmText = 'conferma' }) {
    const modalRoot = document.querySelector('#modal')

    if (show === false) {
        return null
    }

    return createPortal(
        <div>
            <h1>{title}</h1>
            {content}
            <button onClick={onClose}>
                annulla
            </button>
            <button onClick={onConfirm}>
                {confirmText}
            </button>
        </div>,
        modalRoot
    );
};

export default Modal