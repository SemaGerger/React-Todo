import MakeTodo from './component/1.todo/MakeTodo';
import MakeTodoWithReducer from './component/2.withReducer/MakeTodoWithReducer';
import MakeTodoWithSapareteReducer from './component/3.withSapareteReducer/MakeTodoWithSapareteReducer';

function App() {
  return (
    <div>
      <MakeTodo />
      <MakeTodoWithReducer />
      <MakeTodoWithSapareteReducer />
    </div>
  );
}

export default App;
