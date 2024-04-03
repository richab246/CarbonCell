import { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register the components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const Population = () => {
  const [populationData, setPopulationData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
      const data = await response.json();
      const labels = data.data.map((item) => item.Year).sort((a, b) => a - b);
      const population = data.data.map((item) => item.Population).sort((a, b) => a - b);

      setPopulationData({
        labels,
        datasets: [
          {
            label: 'Population',
            data: population,
            borderColor: '#2AB32A',
            backgroundColor: 'rgba(3, 128, 47, 0.889)',
          },
        ],
      });
      
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-col bg-[#171717] rounded-md p-4 lg:w-1/2'>
      <div className='border-b-[1px] pb-[8px] mb-[16px] border-[#666666] text-xl font-semibold text-white'>Population Overview</div>
      <Line data={populationData} />
    </div>
  );
};

export default Population;
