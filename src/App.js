
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Pages/Routes/Routes';


function App() {
  return (
    <div className="App glass">
      <RouterProvider router={router}>

      </RouterProvider>

    </div>
  );
}

export default App;
