/*
Accessing State
  1. Find the component that needs to access some state
  2. Import the 'useSelector' hook from 'react-redux'
  3. Call the hook, passing in a selector function
  4. Use the state! Anytime state changes, the component will automatically rerender
*/
import { useDispatch, useSelector } from 'react-redux';
import { changeCost, changeName, addCar } from '../store';

function CarForm() {
  const dispatch = useDispatch();
  // const { name, cost } = useSelector((state) => {
  //   return {
  //     name: state.form.name,
  //     cost: state.form.cost,
  //   };
  // });
  const name = useSelector((state) => state.form.name);
  const cost = useSelector((state) => state.form.cost);

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };
  const handleCostChange = (event) => {
    const convertCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(convertCost));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ''}
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
