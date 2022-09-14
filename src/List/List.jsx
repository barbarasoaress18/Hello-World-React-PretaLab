import livrosTEch from './dados'

export const List = () => {
  return(
    <>
      {
        livrosTEch.map(item => {
          return(
            <h2 key={item.id}>{item.nome}</h2>
          )
        })
      }
    </>
  )
}