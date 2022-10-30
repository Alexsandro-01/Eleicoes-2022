import { useEffect, useState } from 'react';
import CandidatoCard from './CandidatoCard';
import '../styles/main.css';
import Loading from './Loading';


function Main() {
  const [candidatos, setCandidatos] = useState([]);
  const [totalApurado, setTotalApurado] = useState('0');

  async function fetchData() {
    const URL = 'https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json'
    const response = await fetch(
      URL
    )
    const data = await response.json();
    setCandidatos(data.cand);
    setTotalApurado(Number(data.psi.replace(',', '.')));
  }

  function b() {
    setInterval(fetchData, 10000);
  }

  
  useEffect(() => {
    fetchData();
    b();
  }, []);

  return (
    <main className='container'>
      <section className='sec-pvv'>
        <p>Seções contabilizadas: {totalApurado} %</p>
        <div className='container-bar'>
          <div className='bar' style={{width: `${totalApurado}%`}}></div>
        </div>
      </section>

      {
        candidatos.length > 0 && (
          candidatos.map((cand) => <CandidatoCard key={cand.n} candData={ cand } /> )
        )
      }
      {
        candidatos.length === 0 && (
          <Loading />
        )
      }
    </main>
  )
}

export default Main;