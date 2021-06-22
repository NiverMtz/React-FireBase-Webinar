import React, {useState} from 'react'

export const Temperatura = () => {

    const [temperatura, setTemperatura] = useState(19)
    const Subir = () => {
        setTemperatura(temperatura + 1)
    }
    const Bajar = () => {
        setTemperatura(temperatura - 1)
    } 

    return (
        <div>
            <h2>La temperatura es: {temperatura}</h2>
            <p>
                {
                    temperatura > 21 ? 'Hace calorcito' : 'Hace fresquito'
                }
            </p>
            <div class="d-grid gap-2 col-6 mx-auto">
                <button className='btn btn-success' onClick={Subir}>Aumentar temperatura</button>
                <button className='btn btn-success' onClick={Bajar}>Reducir temperatura</button>
            </div>
        </div>
    )
}

export default Temperatura
