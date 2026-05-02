import { useState } from "react";
import Question from "./question";

function Questions({ questions }) {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <section className='container'>
      <h1>Questions</h1>
      {questions.map((question) => (
        <Question
          key={question.id}
          {...question}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </section>
  );
}

export default Questions;
