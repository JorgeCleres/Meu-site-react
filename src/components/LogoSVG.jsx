import React, { useEffect } from 'react';
import ReactVivus from 'react-vivus';
import imageSVG from './logo_animated.svg'

export default props => {

    useEffect( () => {
        
    }, [])
    
    return (
        <ReactVivus 
            id="foo"
            option={{
                file: imageSVG,
            }}
            style={{ height: '100px', width: '140px', margin: '0 -25px' }}
        />
    )
}