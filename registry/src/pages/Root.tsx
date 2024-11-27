import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

export default function Root() {
  // Outlet is the component that displays whichever page is currently selected
  return (
    <div>
      <Header />

      <Outlet />
    </div>
  );
}
