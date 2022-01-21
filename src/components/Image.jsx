import React from 'react'
import './Image.css'
import ModalImage from 'react-modal-image'

export default props => {
    return (
        <div className="imagens-component overlay">
            <ModalImage
                small={props.caminho}
                hideDownload= 'true'
                hideZoom= 'true'
                large={props.caminho}
                alt={props.alt}
                imageBackgroundColor='#FFF'
            />
        </div>
    )
}