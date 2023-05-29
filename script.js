const wrapper = document.querySelector(".wrapper"),
    carousel = document.querySelector(".carousel"),
    images = document.querySelector("img"),
   buttons = Array.from(document.querySelectorAll(".button"))

let imageIndex = 1, interValid;


//Muda imagem automaticamente para a proxima a cada 2 segundos
// function autoSlide(){
//     interValid = setInterval(() => {
//         if(imageIndex >= 0){

//             slideImage(++imageIndex)
//         }else{
//             slideImage(--imageIndex)
//         }
//     }, 2000);
// }

// autoSlide();


//Função que vai mudar imagem
const slideImage = ()  =>{
    
    //Calculando o proximo update
   // imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
    
    if(imageIndex=== images.length){
        imageIndex = 0
    }else{
        images.length  = -1;
    }
    
    
    //Atualiza o carossel para mostrar a imagem escolhida
    carousel.style.transform = `translate(-${imageIndex * 35}%)`;
    
};


const updateClick = (e) =>
{
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