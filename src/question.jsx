import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

function Question({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button
          type='button'
          className='question-btn'
          onClick={() => setShowInfo((prevShowInfo) => !prevShowInfo)}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
}

export default Question;
