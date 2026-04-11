(function() {
    const elementMainNavButtons = document.querySelectorAll('main-navbar nav-button')

    elementMainNavButtons.forEach((button) => {
        button.addEventListener('nav-button-click', (e) => {
            window.location.href = e.detail.link
        })
    })
})()