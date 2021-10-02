import React from 'react'
import Imagem from './Imagem'

const ListaImagens = ({ pics, imgStyle }) => {
    return (
        pics.map((pic, ind) => (
            <Imagem
                imgStyle={imgStyle} 
                pic={pic.src.small} 
                key={ind}    
            />
        ))
    )
}

export default ListaImagens
