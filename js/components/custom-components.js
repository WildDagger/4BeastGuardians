(function() {
    class ModalFrame extends HTMLElement {
        static _template = (() => {
            const template = document.createElement('template')
            template.innerHTML = `
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
            return template
        })()

        connectedCallback() {
            this.attachShadow({mode: "open"})
            this.shadowRoot.appendChild(ModalFrame._template.content.cloneNode(true))
        }
    }

    customElements.define('modal-frame', ModalFrame)

    class LoadingOverlay extends HTMLElement {
        static _template = (() => {
            const template = document.createElement('template')
            template.innerHTML = `
                <style>
                    .loading-overlay {
                        z-index: 9999;
                        width: 100vw;
                        height: 100vh;
                        overflow: hidden;
                        background-color: #fff;
                        position: fixed;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        top: 0;
                        left: 0;
                        opacity: 1;
                        transition: opacity 1s ease-out;
                    }

                    .loading-overlay .loader {
                        position: relative;
                        margin: 0 auto;
                        width: 100px;
                    }

                    .loading-overlay .loader::before {
                        content: '';
                        display: block;
                        padding-top: 100%;
                    }

                    .loading-overlay .loader .circular {
                        animation: rotate 2s linear infinite;
                        height: 100%;
                        transform-origin: center center;
                        width: 100%;
                    }

                    .path {
                        stroke-dasharray: 1, 200;
                        stroke-dashoffset: 0;
                        animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
                        stroke-linecap: round;
                    }
                    
                    @keyframes rotate {
                        100% {
                        transform: rotate(360deg);
                        }
                    }
                    
                    @keyframes dash {
                        0% {
                            stroke-dasharray: 1, 200;
                            stroke-dashoffset: 0;
                        }
                        50% {
                            stroke-dasharray: 89, 200;
                            stroke-dashoffset: -35px;
                        }
                        100% {
                            stroke-dasharray: 89, 200;
                            stroke-dashoffset: -124px;
                        }
                    }
                    
                    @keyframes color {
                        100%,
                        0% {
                            stroke: #be8832;
                        }
                        20% {
                            stroke: #d12d33;
                        }
                        40% {
                            stroke: #fca211;
                        }
                        60% {
                            stroke: #007c59;
                        }
                        80% {
                            stroke: #0074c6;
                        }
                    }
                </style>
                <div class="loading-overlay" data-wait-for="main news">
                    <div class="loader">
                        <svg class="circular" viewBox="25 25 50 50">
                            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
                        </svg>
                    </div>
                </div>
            `
            return template
        })()

        connectedCallback() {
            this.attachShadow({mode: "open"})
            this.shadowRoot.appendChild(LoadingOverlay._template.content.cloneNode(true))

            document.addEventListener('loading-complete', () => {
                var overlay = this.shadowRoot.querySelector('.loading-overlay')
                overlay.style.opacity = 0
                setTimeout(() => {
                    overlay.style.display = 'none'
                }, 1000)
            })
        }
    }
    
    customElements.define('loading-overlay', LoadingOverlay)
})()