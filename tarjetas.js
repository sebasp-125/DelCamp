const tarjetas=document.getElementById("tarjetas")
const body=document.getElementById("body2")
const form=document.getElementById("form")
const div2=document.getElementById("divpadre2")
const metodo=document.getElementById("metodo")
const tarjeta2=document.getElementById("comprobar_pago")
const pago=document.getElementById("pago_realizado")
const pagoefectivo=document.getElementById("pago_efectivo")
const credit=document.getElementById("credito")
const debit=document.getElementById("debito")
const efectivo=document.getElementById("efectivo")
const efectivop=document.getElementById("efectivop")
const boton=document.getElementById("boton")
const pse=document.getElementById("pse")
const bancos=document.getElementsByClassName("listado_bancos")
const divefecty=document.getElementById("efecty")
tarjetas.style.display="none"
let pay=null
pago.style.display="block"
function mostrar(){
    div2.style.display="block"
}

function iniciar(){
    div2.style.display="none"
    divefecty.style.display="none"
    tarjeta2.style.display="none"
    pse.style.display="none"
    pago.style.display="none"
    pagoefectivo.style.display="none"
}

form.addEventListener("submit",borrar)
function borrar(e){
    e.preventDefault()
    form.reset()
}

function datos(argum){
    switch (argum) {
        case 1:
            tarjetas.style.display="block"
            body.style.display="block"
            extraer(credit)
            break;
        case 2:
            tarjetas.style.display="block"
            body.style.display="block"
            extraer(debit)
            break;
        case 3:
            pagoefectivo.style.display="block"
            body.style.display="block"
            efectivop.addEventListener("click",function efec(){
                pagoefectivo.style.display="none"
                body.style.display="none"
                extraer(efectivo)
            })
            break;
        case 4:
            pse.style.display="block"
            body.style.display="block"
            for (let i = 0; i < bancos.length; i++) {
               bancos[i].addEventListener("click",function banco(){
                pse.style.display="none"
                body.style.display="none"
                metodo.innerHTML=`Vas a Pagar con PSE, en tu Banco ${bancos[i].id}`
               })
            }
            break;
        case 5:
            divefecty.style.display="block" 
            body.style.display="block"
            metodo.innerHTML="Vas a Pagar con Efecty"
            break;
    }
    
}
function extraer(element){
    let mandar=null
    switch (element.id) {
        case ("credito"):
            mandar="Vas a Pagar con Crédito"
            montar(mandar)
            break;
        case ("debito"):
            mandar="Vas a Pagar con Débito"
            montar(mandar)
            break;
        case ("efectivo"):
            mandar="Vas a Pagar en Efectivo"
            metodo.innerHTML=mandar
            break;
    }
}

function montar(mandar){
    boton.innerHTML=`<button id="botonmostrar"type="submit">Continuar</button>`
    const mostrarb=document.getElementById("botonmostrar")
    mostrarb.addEventListener("click",function mostrar(){
        tarjetas.style.display="none"
        body.style.display="none"
        metodo.textContent=mandar
    })
}

function cerrar(){
    tarjetas.style.display="none"
    tarjeta2.style.display="none"
    pago.style.display="none"
    pse.style.display="none"
    divefecty.style.display="none"
    body.style.display="none"
}

function pagar(){
    if(metodo.textContent==="No has seleccionado un método de pago"){
        tarjeta2.style.display="block"
        body.style.display="block"
    }else{
        pago.style.display="block"
        body.style.display="block"
    }
    
}
function convenio(arg){
    const conv=document.getElementById("conv")
    const ref=document.getElementById("ref")
    conv.innerHTML=null
    ref.innerHTML=null
    for(let i=0; i<=5;i++){
        conv.innerHTML+=Math.floor(Math.random()*10)
    }
    for(let i=0;i<=9;i++){
        ref.innerHTML+=Math.floor(Math.random()*10)
    }
    if(arg===1){
        divefecty.style.display="none" 
        body.style.display="none"
        metodo.innerHTML="No has seleccionado un método de pago"
    }
}
window.addEventListener("load",iniciar)


