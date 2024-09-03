import PumpList from './context/components/PumpList';
import ZoneList from './context/components/ZoneList';
import MoistureSesnorList from './context/components/MoistureSensorList';

function App() {
  return (
    <div className="app">
      <h1>aquaCola</h1>
      <PumpList />
      <MoistureSesnorList />
      <ZoneList />
    </div>
  );
}
export default App;
