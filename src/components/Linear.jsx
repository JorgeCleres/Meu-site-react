import React, {useState, useEffect} from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import './Linear.css'

export default props => {
    const [progress, setProgress] = useState(0)

    useEffect( () => {
        setTimeout( () => {
            setProgress( (valorAntigo) => {
                const numRandom = Math.random() * 10
                return Math.min(numRandom + valorAntigo, props.value)
            })
        }, 500)
        
    }, [progress])

    return (
        <div>
            <h5>{props.value}%</h5>
            <LinearProgress variant="determinate" value={progress} />
        </div>
    )
}
