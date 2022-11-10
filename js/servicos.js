const servicoHover = () => {
    let btn = document.querySelector('.servicos-btn')
    let svg = document.querySelector('.servicos-svg')
    let txt = document.querySelector('.servicos-txt')

        btn.addEventListener('mouseover', () => {
            document.getElementsByClassName('servicos-svg').style.display = 'none'
        })
}

servicoHover();