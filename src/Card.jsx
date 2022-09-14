import Titulo from './Titulo'
import Paragrafo from './Paragrafo'
import image from './assets/babi.webp'

import './card.styless.css'

function Card () {
    return(

        <div className= "card-container">
            <img src={image} alt="ilustracao de mulher preta olhando para o lado"   />
        <Titulo /> 
        <Paragrafo />

        </div>
    )
}

export default Card