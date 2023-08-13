
//Slider das fotos, parte de endereço
const wrapper = document.querySelector(".wrapper"),
    buttons = Array.from(document.querySelectorAll(".button"))

let carousel = document.querySelector(".carousel")
let images = document.querySelector("img")

let imageIndex = 0, interValid;


function autoSlide() {
    interValid = setInterval(() => {
        if (imageIndex >= 0) {

            slideImage(++imageIndex)
        } else {
            slideImage(--imageIndex)
        }
    }, 3000);
}

autoSlide();


//Função que vai mudar imagem
const slideImage = () => {

    //Calculando o proximo update

    if (imageIndex === images.length) {
        imageIndex = 0
    } else {
        images.length = 6;
    }


    //Atualiza o carossel para mostrar a imagem escolhida
    carousel.style.transform = `translate(-${imageIndex * 100}%)`;

};


const updateClick = (e) => {
    //Para o autoSlide
    clearInterval(interValid);

    //Calcula o update da imagem indexada de acordo com o botão clicado
    imageIndex += e.target.id === "next" ? 1 : -1;
    slideImage(imageIndex);

    //Reinicia o slide automatico
    autoSlide();

}


//Adiciona evento de clicar no botão 
buttons.forEach((button) => button.addEventListener("click", updateClick));

//Ao colocar o mouse sobre a imagem o autoslide é desligado
wrapper.addEventListener("mouseover", () => clearInterval(interValid));

//Quando tirar o mouse de cima da imagem o autoslide é ativado novamente
wrapper.addEventListener("mouseleave", autoSlide);


const slider = document.querySelector(".slides");

var sectionIndex = 0;


//Menu Slider das avaliações, responsavel por mover as divs
document.querySelectorAll(".avaliacoes label").forEach(function (indicador, ind) {
    indicador.addEventListener('click', function () {
        sectionIndex = ind;
        if (window.innerWidth < 769) {
            
            slider.style.transform = 'translate(' + (sectionIndex) * -74.5 + "%)";
            slider.style.transition = "0.6s";
        } else {

            // sectionIndex = ind;
            slider.style.transform = 'translate(' + (sectionIndex) * -58 + "%)";
            slider.style.transition = "0.6s";
        }


    });
});

const observer = new ResizeObserver(entries => {
    entries = document.querySelector(".slide1").checked = true;
});




class MobileBarV{
    constructor(Itens, navList, NavLinks){
        this.Itens = document.querySelector(Itens);   
        this.navList = document.querySelector(navList);   
        this.NavLinks = document.querySelectorAll(NavLinks);
        this.ActiveClass = "active";
        
        this.handleClick = this.handleClick.bind(this)

    }


    handleClick(){
        this.navList.classList.toggle(this.ActiveClass)
    }


    addEventClick(){    
        this.Itens.addEventListener("click", this.handleClick)
        this.navList.addEventListener("click", this.handleClick)

    }

    init(){
        if(this.Itens && this.NavLinks){
            this.addEventClick();
        }
        return this;
    }


}

const MobileBar = new MobileBarV(".bars-menu", ".itens", ".itens a")


MobileBar.init();