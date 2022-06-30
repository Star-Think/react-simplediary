import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "김종효",
    content: "하이 1",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "최은정",
    content: "하이 2",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "이선",
    content: "하이 3",
    emotion: 1,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList dummyList={dummyList} />
    </div>
  );
}

export default App;
