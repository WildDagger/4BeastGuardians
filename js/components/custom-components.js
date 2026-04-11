(function() {
    class ModalFrame extends HTMLElement {
        connectedCallback() {
            this.attachShadow({mode: "open"})
            this.shadowRoot.innerHTML = `
                <style>
                .modal-frame {
                    border: 85px solid transparent;
                    border-image-source: url('./img/Modal/Modal.svg');
                    border-image-slice: 220 300 220 300 fill;
                    border-image-width: 220px 300px 220px 300px;
                    border-image-repeat: stretch;

                    min-height: 600px;

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 12px;
                }
                </style>
                <div class="modal-frame">
                    <slot></slot>
                </div>
            `
        }
    }

    customElements.define('modal-frame', ModalFrame)
})()