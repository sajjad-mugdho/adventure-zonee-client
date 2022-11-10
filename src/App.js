
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Pages/Routes/Routes';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
