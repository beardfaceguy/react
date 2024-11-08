/*
Accessing State
  1. Find the component that needs to access some state
  2. Import the 'useSelector' hook from 'react-redux'
  3. Call the hook, passing in a selector function
  4. Use the state! Anytime state changes, the component will automatically rerender
*/
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../store';

function CarForm() {
  const dispatch = useDispatch();
  const nameStr = useSelector((state) => {
    return state.form.name;
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={nameStr}
              onChange={handleNameChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
