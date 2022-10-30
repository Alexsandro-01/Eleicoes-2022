import axios from 'axios';
import { useEffect, useState } from 'react'

function Main() {
  const [cand, setCand] = useState([]);

  async function fetchData() {
    const URL = 'https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json'
    const { data } = await axios.get(URL);
    
    setCand(data.cand);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <main>
      <p>helo</p>
    </main>
  )
}

export default Main;