import MakeTodo from './component/1.todo/MakeTodo';
import MakeTodoWithReducer from './component/2.withReducer/MakeTodoWithReducer';
import MakeTodoWithSapareteReducer from './component/3.withSapareteReducer/MakeTodoWithSapareteReducer';
import Main from './component/4.callback/Main';
import Main2 from './component/5.callbackwithFilter/Main2';



function App() {
  return (
    <div>
      <MakeTodo />
      <MakeTodoWithReducer />
      <MakeTodoWithSapareteReducer />
      <Main />
      <Main2 />
     
    </div>
  );
}

export default App;
