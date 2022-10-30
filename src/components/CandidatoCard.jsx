import { useState, useEffect } from 'react';
import '../styles/card.css';

function Card({ candData }) {
  const [partidoNumero, setPartidoNumero] = useState('');

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
          <img src={`/images/${candData.nm}.jpg`} alt="" />
        </div>
        <div className='info'>
          <p>{ partidoNumero }</p>
          <h3>{ candData.nm }</h3>
        </div>
      </div>
      <div className='result'>
        <p>{ candData.vap } Votos</p>
        <h3>{ candData.pvap } %</h3>
      </div>
    </section>
  )
}

export default Card;