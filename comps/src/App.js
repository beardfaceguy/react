import Dropdown from './components/Dropdown';
import { useState } from 'react';
function App() {
  const [selection, setSeletion] = useState(null);
  const handleSelect = (option) => {
    setSeletion(option);
  };
  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];
  return (
    <Dropdown options={options} value={selection} onChange={handleSelect} />
  );
}

export default App;
