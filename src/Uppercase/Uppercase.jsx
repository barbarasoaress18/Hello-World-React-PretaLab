 function UpperCase (props) {
    const textoInserido = props.info // o texto sera inserido quando for usar o componente no app
    const textoTransformado = textoInserido.toUpperCase() // transforma o texto recebido em maiusculo

    return (
        <p> {textoTransformado} </p>
    )
 }


 export default UpperCase