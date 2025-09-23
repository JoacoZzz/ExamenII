'use client'
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,PointElement, LineElement } from 'chart.js';
import { fetchPromedioValorPorCategoria} from '@/app/Services/Api';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,PointElement, LineElement);

export default function page() {

  const [charData, setCharData] = useState({
    labels: [],
    datasets: [{
      label: '',
      data: [],
      borderColor: '',
      fill: true
    }]
  });

  useEffect(()=>{

   fetchPromedioValorPorCategoria()
  .then(data => {
    const labels = data.map((item: any) => item.categoryName);
    const promedioValores = data.map((item: any) => item.avg_value);

    setCharData({
      labels: labels,
      datasets: [{
        label: 'Promedio de valor por categoría',
        data: promedioValores,
        borderColor: 'rgba(80, 230, 21, 1)',
        fill: true,
      }]
    });
  })
  .catch(() => alert("Ocurrió un error al obtener los datos"));


  },[]);

  return (
    <div>


      {
        charData ? (
          <div>
            <h2>Grafico lineal de valor promedio de productos por categoría </h2>
            <Line data={charData}></Line>
          </div>
        )
        :
        (
          <p>Informacion se esta cargando</p>
        )

      }
    </div>
  )
}
