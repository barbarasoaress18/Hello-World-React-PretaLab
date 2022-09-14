import filmes from './dados'

export const Lista = () => {
 return (
       <>
            {filmes.map(filmes => {
              return(
                 <li key={filmes.id}>(filmes.nome)</li>
              )
           })}
       </>
 )
}   