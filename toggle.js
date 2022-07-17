document.addEventListener('DOMContentLoaded', function () {

    let toggle = document.querySelector('header img')
    
    toggle.addEventListener('click', function() {
        document.body.classList.toggle('darkmode');
    })
})