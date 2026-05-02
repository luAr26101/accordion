import questionsData from "./data";
import Questions from "./questions";

const App = () => {
  return (
    <main>
      <Questions questions={questionsData} />
    </main>
  );
};
export default App;
