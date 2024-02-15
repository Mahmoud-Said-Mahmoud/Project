const button=document.querySelector('#login');
button.addEventListener('click',()=>{
  window.location.replace("../Detector/script.html");
}); 
console.log(button)
const names = window.localStorage.getItem('name');
button.innerHTML=names

const About=document.querySelector('#About');
About.addEventListener('click',()=>{
  window.location.replace('../About/about.html')
})
