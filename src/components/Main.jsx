import axios from 'axios';
import { useEffect, useState } from 'react';
import CandidatoCard from './CandidatoCard';
import '../styles/main.css';


function Main() {
  const [candidatos, setCandidatos] = useState([]);

  async function fetchData() {
    const URL = 'https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json'
    const { data } = await axios.get(URL);
    
    setCandidatos(data.cand);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <main className='container'>
      {
        candidatos.length > 0 && (
          candidatos.map((cand) => <CandidatoCard key={cand.n} candData={ cand } /> )
        )
      }
    </main>
  )
}

export default Main;