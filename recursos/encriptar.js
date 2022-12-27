
const textarea = document.getElementById("caja2");
let boton0 = document.getElementById("boton1");
let boton_1 = document.getElementById("boton2");
let boton_2 = document.getElementById("boton3");

boton0.addEventListener("click", function() {
    let items = [];
    items.push(caja1.value);
    console.log(items);
    let letras = Array.from(items[0])
    console.log(letras)

    const clave =[
        {letra: "a", code: "ai"},
        {letra: "e", code: "enter"},
        {letra: "i", code: "imes"},
        {letra: "o", code: "ober"},
        {letra: "u", code: "ufat"}
    ]
    
    for (let i = 0; i < letras.length; i++) {
        clave.forEach(item => {
          if (letras[i] === item.letra) {
            letras[i] = item.code;
          }
        });
      }
      let result = [letras.join("")]
      caja2.value = result
});
boton_1.addEventListener("click", function(){

    const lista1 = []
    lista1.push(caja1.value)
    console.log(lista1)
    
    const listaModificada = lista1.map(function(elemento) {
      return elemento.replace(/ai/g, "a")
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");  
  });
    caja2.value = listaModificada;
    console.log(listaModificada);
      
});

boton_2.addEventListener("click", function(){
  /*Utilice este metodo pór que es compatible con la mayoria de navegadores y tambien
  Porque al usar document.execCommand("") no me funcionaba en mi navegador y
  el visual code me subrayaba la palabra "execCommand" indicando que habia algo
  malo xd*/
  navigator.clipboard.writeText(textarea.value);
  
});
