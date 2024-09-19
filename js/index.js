(function() {
    document.addEventListener('DOMContentLoaded', () => {
        const btnModal = document.querySelector('.modal button')
        const modalTitle = document.querySelector('.modal .modal-title')
        const modalContent = document.querySelector('.modal .modal-content')
    
        const navMenuIcon = document.querySelector('nav .nav-menu-icon')
        const navMenuMobile = document.querySelector('nav .nav-menu-mobile')
    
        const brandLogoLink = document.querySelector('#brandLogo a')
        const menuHeader = document.querySelector('#menuHeader')
        const navMenuSelection = document.querySelectorAll('.nav-menu-selection a')
    
        navMenuIcon.addEventListener('click', (e) => {
            e.preventDefault()
            navMenuMobile.classList.toggle('active')
        })
    
        function openModal(modalId, title, content) {
            document.getElementById(modalId).classList.add('open')
            document.body.classList.add('modal-open')
    
            modalTitle.innerHTML = title
            modalContent.innerHTML = content
        }
    
        function closeModal() {
            document.querySelector('.modal.open').classList.remove('open')
            document.body.classList.remove('modal-open')
        }
    
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                closeModal()
            }
        })
        
        btnModal.addEventListener('click', (e) => {
            closeModal()
        })
    
        navMenuSelection.forEach((element) => {
            var target = element.getAttribute('href')
            element.addEventListener('click', (e) => {
                e.preventDefault()
    
                var eleTarget = document.querySelector(target)
                if (eleTarget != null) {
                    window.scrollTo({
                        top: eleTarget.offsetTop - menuHeader.offsetHeight,
                        behavior: "smooth"
                    })
                }
            })
        })
    
        brandLogoLink.addEventListener('click', (e) => {
            e.preventDefault()
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        })
    
        var listCell = document.querySelectorAll('.main-section .list .cell')
    
        listCell.forEach((value) => {
            var content = value.querySelector('.cell-content')
            value.addEventListener('click', (e) => {
                e.preventDefault()
    
                openModal('modal', content.title, content.innerHTML)
            })
        })

        // HeroSection Animation
        var tl_heroSection = gsap.timeline({repeat: 0})

        tl_heroSection.from("#sectionHero img.mecha.xuanwu-kaiser", {
            x: '2%',
            opacity: 0,
            duration: 0.3
        })
        tl_heroSection.from('#sectionHero img.chara.blue-panthar', {
            x: '1%',
            opacity: 0,
            duration: 0.25
        })
        tl_heroSection.from('#sectionHero img.chara.green-elephant', {
            x: '-1%',
            opacity: 0,
            duration: 0.25
        })
        tl_heroSection.from('#sectionHero img.chara.orange-tiger', {
            x: '1%',
            opacity: 0,
            duration: 0.25
        })
        tl_heroSection.from('#sectionHero img.chara.red-lion', {
            x: '-1%',
            opacity: 0,
            duration: 0.25
        })
        tl_heroSection.from('#sectionHero .catch-copy', {
            x: '-1.5%',
            scale: 1.5,
            opacity: 0,
            duration: 0.5
        })
        tl_heroSection.from('#sectionHero .logo', {
            scale: 2.5,
            opacity: 0,
            duration: 0.5
        })
    })
})()