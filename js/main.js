window.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelectorAll('.navbar')

    navbar.forEach(function(element) {
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
