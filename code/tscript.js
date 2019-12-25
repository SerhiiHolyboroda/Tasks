let f1 = document.forms.f1
let but = f1.elements.but1
let hh = f1.elements.inpt
let tarea = f1.elements.ttt
 
but.addEventListener('click', function(){
//    
//   let div = document.createElement('div');
//  div.innerHTML  = `<strong>${hh.value}</strong> `;
//  div.innerHTML  = `<p>${tarea.value}</p> `;
//   document.body.append(div);
    
x()
}) 
let x =()=>{
let div = document.createElement('div');
  div.className = "alert";
  div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";

 return document.body.appendChild(div);
}

 
 