"use client";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { fetchProductosPorMarca } from "@/app/Services/Api";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PastelMarcas() {
  const [dataChart, setDataChart] = useState<any>({
    labels: [],
    datasets: [
      {
        label: "Productos por Marca",
        data: [],
        backgroundColor: [],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    fetchProductosPorMarca().then((data) => {
      const labels = data.map((item: any) => item.brandName);
      const values = data.map((item: any) => parseInt(item.cantidad_productos));

      const colors = labels.map(
        () => "#" + Math.floor(Math.random() * 16777215).toString(16)
      );

      setDataChart({
        labels,
        datasets: [
          {
            label: "Productos por Marca",
            data: values,
            backgroundColor: colors,
            borderWidth: 1,
          },
        ],
      });
    });
  }, []);

  return (
    <div style={{ width: 500, margin: "0 auto" }}>
      <h3>Productos por Marca</h3>
      <Pie data={dataChart} />
    </div>
  );
}
