let input1 = document.querySelector('.input');
let button1 = document.querySelector('button');
let p1 = document.querySelector('p');

button1.addEventListener('click' , ()=>{
     let d = new persianDate( new Date(input1.value));
     d.formatPersian = false;
     p1.innerHTML = d.format('YYYY-MM-DD');
})

