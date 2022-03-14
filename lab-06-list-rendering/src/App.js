import TodoList from './TodoList.js'

function App() {

  // to understand list rendering, 2 impt concepts:
  // 1. JSX elements are just javascript objects
  // 2. we can render Arrays of JSX elements

  return (
    <div>
        <h1>My Todos</h1>
        <TodoList/>
    </div>
  );
}

export default App;
