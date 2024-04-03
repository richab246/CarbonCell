import { IoTrendingUp } from "react-icons/io5";
import { FiInfo } from "react-icons/fi";
import { IconContext } from "react-icons";
import { AiFillDollarCircle, AiFillEuroCircle, AiFillPoundCircle } from "react-icons/ai";
import { PiCurrencyInrFill } from "react-icons/pi";
import { useState, useEffect } from "react";

// Sample data structure for cryptocurrencies
const currencyIcon = {
  "USD" : <AiFillDollarCircle size={32} color="white" />,
  "EUR" : <AiFillEuroCircle size={32} color="white" />,
  "GBP" : <AiFillPoundCircle size={32} color="white" />,
  "INR" : <PiCurrencyInrFill size={32} color="white" />,
};

const Assets = () => {

  const [currencyData, setCurrencyData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.json();
        const currencyWithIcon = Object.values(data.bpi).map(currency => ({
          ...currency,
          icon: currencyIcon[currency.code]
        }))
        setCurrencyData(currencyWithIcon)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching population data:', error);
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1 className="text-xl font-semibold text-white mb-[16px]">
        Assets
      </h1>
      {!loading ? 
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currencyData.map((crypto, index) => (
          <div key={index} className="p-4 bg-sidebar-bg shadow-md rounded-md">
            <div className="flex justify-between items-center">
              <IconContext.Provider value={{ className: "react-icons" }}>
                {crypto.icon}
              </IconContext.Provider>
              <p className="text-lg font-semibold">{crypto.code}</p>
            </div>
            <div className="text-gray-500 mt-4">{crypto.description}</div>
            <div className="flex justify-between items-center mt-2">
              <p className="text-lg font-semibold">{crypto.rate}</p>
              <div className="flex items-center ml-2">
                <p className={`text-green-500 mr-2`}>{crypto.rate_float}</p>
                <IoTrendingUp className="text-white" />
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <FiInfo className="text-primary w-6 h-6" />
              <button className="px-4 py-2 bg-primary hover:bg-[#2ab32ad3] text-white rounded-md transition duration-300">
                Trade
              </button>
            </div>
          </div>
        ))}
      </div> : <div>loading...</div>  
    }
    </div>
  );
};

export default Assets;
