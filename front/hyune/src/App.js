import './App.css';
import { RouterProvider } from 'react-router-dom';
import root from './router/root';

function App() {
  return (
    <div>
      <RouterProvider router={root}/>
    </div>
  );
}

export default App;
