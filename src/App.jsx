import "./App.css";
import {useState} from  'react';


function App() {
  const [quizzes, setQuizzes] = useState(0)
  const fetchQuiz =  async() => {
    const res = await fetch('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple');
    const {results} = res.json();
    setQuizzes(results)
    console.log(results)
  }
    return (
        <div className="container sm mx-auto placeholder:bg-fuchsia-100 ">
            <h1 className="text-3xl font-bold">Hello from React</h1>
            <button className="mt-5 py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75" onClick={fetchQuiz}>Star Quiz</button>
        </div>
    );
}

export default App;
