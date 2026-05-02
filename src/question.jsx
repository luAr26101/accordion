import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Question({ title, info, activeIndex, setActiveIndex, id }) {
  const handleClick = () => {
    if (activeIndex === id) {
      setActiveIndex(null);
    } else {
      setActiveIndex(id);
    }
  };

  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button type='button' className='question-btn' onClick={handleClick}>
          {activeIndex === id ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {activeIndex === id && <p>{info}</p>}
    </article>
  );
}

export default Question;
