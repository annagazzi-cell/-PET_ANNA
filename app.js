async function imagemApi(){
    let respostaApi = await fetch('https://dog.ceo/api/breeds/image/random');
    let dadosApi = await respostaApi.json();
    document.querySelector(".img-dog").src =dadosApi.message;
    console.log(dadosApi);
}
imagemApi();

function whatsApp(){
const texto = "Olá, vim pelo site PinkPet e gostaria de agendar um horário para o meu pet!";
const textoFormatado = encodeURIComponent(texto);
const url = "https://wa.me/5598209330?text=" + textoFormatado;
open(url,'_blank');
console.log(url);
}

function whatsAppB(){
const texto = "Olá, vim pelo site PinkPet e gostaria de agendar um horário para meu pet tomar banho!";
const textoFormatado = encodeURIComponent(texto);
const url = "https://wa.me/5598209330?text=" + textoFormatado;
open(url,'_blank');
console.log(url);  
}

function whatsAppR(){
const texto = "Olá, vim pelo site PinkPet e gostaria de comprar ração para o meu pet!";
const textoFormatado = encodeURIComponent(texto);
const url = "https://wa.me/5598209330?text=" + textoFormatado;
open(url,'_blank');
console.log(url);  
}

function whatsAppV(){
const texto = "Olá, vim pelo site PinkPet e gostaria de agendar um horário para meu pet atualizar as suas vacinas!";
const textoFormatado = encodeURIComponent(texto);
const url = "https://wa.me/5598209330?text=" + textoFormatado;
open(url,'_blank');
console.log(url);  
}