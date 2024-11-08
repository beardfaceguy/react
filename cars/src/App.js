/*
Redux store design
  1. Identify what state exists in the app
  2. Identify how that state changes over time
  3. Group together common pieces of state
  4. Create a slice for each group




*/

import CarForm from './components/CarForm';
import CarList from './components/CarList';
import CarSearch from './components/CarSearch';
import CarValue from './components/CarValue';

function App() {
  return (
    <div>
      <CarForm />
      <CarList />
      <CarSearch />
      <CarValue />
    </div>
  );
}

export default App;
