import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Question({ title, info, activeIndex, setActiveIndex, id }) {
  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button
          type='button'
          className='question-btn'
          onClick={() => setActiveIndex(id)}
        >
          {activeIndex === id ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {activeIndex === id && <p>{info}</p>}
    </article>
  );
}

export default Question;
