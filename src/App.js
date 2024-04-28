
import './App.css';
import Todos from './components/Todos';
import AddTodos from './components/AddTodos';

function App() {
  return (
    <>
    <h1 className='text-center text-3xl t'>Todo using Redux ToolKit</h1>
    <AddTodos/>
    <Todos/>
    </>
  );
}

export default App;
