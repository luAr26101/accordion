import { useState } from "react";
import questionsData from "./data";
import Question from "./question";
import Questions from "./questions";

const App = () => {
  const [questions, setQuestions] = useState(questionsData);
  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
};
export default App;
