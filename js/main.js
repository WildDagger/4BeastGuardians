window.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelectorAll('.navbar')
    //const navbarcontent = document.querySelector('.navbar .navbar-content')
    //const navbarbutton = document.querySelector('.navbar .navbar-button')
    const cards = document.querySelectorAll('.section .inner .contents .card')
    const modal = document.getElementById('modal')
    const modalIcon = modal.querySelector('.modal-icon-inner')
    const modalHeader = modal.querySelector('.modal-header')
    const modalContent = modal.querySelector('.modal-content')

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

    cards.forEach(function(card) {
        card.addEventListener('click', function(e) {
            var icon = card.querySelector('.card-background-inner')
            var titleNodes = card.querySelector('.card-title').childNodes
            var contentNodes = card.querySelector('.card-content').childNodes

            modalIcon.style.backgroundImage = icon.style.backgroundImage

            modalHeader.innerHTML = ''
            modalContent.innerHTML = ''

            titleNodes.forEach(function(node) {
                var cln = node.cloneNode(true)
                modalHeader.appendChild(cln)
            })
            contentNodes.forEach(function(node) {
                var cln = node.cloneNode(true)
                modalContent.appendChild(cln)
            })
            

            modal.classList.add('open')
        })
    })

    modal.addEventListener('click', function(e) {
        modal.classList.remove('open')
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
