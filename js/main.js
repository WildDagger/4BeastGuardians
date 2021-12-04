window.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelectorAll('.navbar')
    //const navbarcontent = document.querySelector('.navbar .navbar-content')
    //const navbarbutton = document.querySelector('.navbar .navbar-button')

    navbar.forEach(function(element) {
        var navbarContent = element.querySelectorAll('.navbar-content')
        var navbarToggleButton = element.querySelectorAll('.navbar-toggle a')
        var navbarButtons = element.querySelectorAll('.navbar-content a')

        navbarToggleButton.forEach(function(element) {
            element.addEventListener('click', function(e) {
                e.preventDefault()
                navbarContent.forEach(function(elem) {
                    elem.classList.toggle('toggle')
                })
            })
        })

        navbarButtons.forEach(function(element) {
            element.addEventListener('click', function(e) {
                e.preventDefault()
            })
        })
        
        var elemTop = element.offsetTop

        window.addEventListener('scroll', throttle(function() {
            if (window.scrollY > elemTop) {
                element.classList.add('sticky')
            } else {
                element.classList.remove('sticky')
            }
        }, 1000 / 15))

        window.dispatchEvent(new Event('scroll'))
    })

    /*navbarbutton.addEventListener('on', function(e) {
        e.preventDefault()
        navbarcontent.classList.toggle('toggle')
    })*/
})

function throttle(fn, wait) {
    var time = Date.now()
    return function() {
        if ((time + wait) - Date.now() < 0) {
            fn()
            time = Date.now()
        }
    }
}
