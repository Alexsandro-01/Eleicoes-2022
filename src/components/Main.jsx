import axios from 'axios';
import { useEffect, useState } from 'react';
import CandidatoCard from './CandidatoCard';
import '../styles/main.css';


function Main() {
  const [candidatos, setCandidatos] = useState([]);
  const [totalApurado, setTotalApurado] = useState('0');
  const [localDate, setLocalDate] = useState({});

  async function fetchData() {
    const URL = 'https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json'
    const { data } = await axios.get(URL);
    
    setCandidatos(data.cand);
    setTotalApurado(Number(data.psi.replace(',', '.')));
    parseDateHour();
    console.log(1);
  }

  function parseDateHour() {
    const date = new Date().toLocaleDateString();
    const helpParse = date.split("/");
    const localDate = `${helpParse[1]}/${helpParse[0]}/${helpParse[2]}`;

    const now = new Date().toLocaleTimeString();

    setLocalDate({
      today: localDate,
      now
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className='container'>
      <section className='sec-pvv'>
        <p>Seções contabilizadas: {totalApurado} %</p>
        <div className='container-bar'>
          <div className='bar' style={{width: `${totalApurado}%`}}></div>
        </div>
      </section>

      <section className='atualization'>
        <p>Última atualização: { localDate.today } { localDate.now }</p>
        <button
          onClick={ () => fetchData() }
          type="button"
        >Atualizar</button>

      </section>
      {
        candidatos.length > 0 && (
          candidatos.map((cand) => <CandidatoCard key={cand.n} candData={ cand } /> )
        )
      }
    </main>
  )
}

export default Main;