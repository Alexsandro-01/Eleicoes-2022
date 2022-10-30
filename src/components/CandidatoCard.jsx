import { useState, useEffect } from 'react';
import '../styles/card.css';
import lula from '../images/LULA.jpg';
import bolsonaro from '../images/JAIR BOLSONARO.jpg'

function Card({ candData }) {
  const [partidoNumero, setPartidoNumero] = useState('');

  const IMAGES = {
    "JAIR BOLSONARO": bolsonaro,
    "LULA": lula
  }

  function formatString() {
    const ccSlice = candData.cc.split(' ')
    setPartidoNumero(`${ccSlice[0]} - ${candData.n}`);
  }

  useEffect(() => {
    formatString();
  }, []);

  return (
    <section className='card'>
      <div className='box-info'>
        <div className='image'>
          <img src={ IMAGES[candData.nm] } alt={ `Imagen do candidato a presidência ${ candData.nm }` } />
        </div>
        <div className='info'>
          <p>
            <span>{ partidoNumero }</span>
            {' '}
            {
              candData.st !== '' && (
                <span style={{color: '#059128'}}>
                  - { candData.st }
                </span>
              )
            }
          </p>
          <h3>{ candData.nm }</h3>
        </div>
      </div>
      <div className='result'>
        <p><span>{ candData.vap } Votos</span></p>
        <h3>{ candData.pvap } %</h3>
      </div>
    </section>
  )
}

export default Card;