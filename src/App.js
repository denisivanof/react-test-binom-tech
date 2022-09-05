import PieChart from "./components/PieChart/PieChart";
function App() {
    const options ={
        nit: 100000,
        nitAll: 246051,
        forecast: 100000,
        forecastAll: 283500,
        colorNit: 'orange',
        colorForecast: '#989797'
    }
  return (
    <div>
        <PieChart  options={options}/>
    </div>
  );
}

export default App;
