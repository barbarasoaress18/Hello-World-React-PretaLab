function Formulario () {
function ligaClick () {
  console.log('estou clicando')
} 

   function ligaInput (event) {
    console.log (event.target.value)
   }

    return(
      <>
       <input onChange={ligaInput} placeholder ="Digite seu nome"/>
       <button onClick={ligaClick}> Enviar </button>
      </>
   )
}
  
  export default Formulario 

  // React Fragment 

  // Mostrar como capturar um input usando react
  // Mostrar como ligar o click de um botão usando react