import { useState } from 'react';

export default function Accordation({ faq }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <article
      onClick={() => setIsActive(!isActive)}
      className={`quiz ${isActive && 'opened'}`}
    >
      <div className="quiz-info">
        <h2>{faq.quiz}</h2>
        <i className="ri-arrow-down-s-line"></i>
      </div>
      <div className="answer">
        <p>{faq.answer}</p>
      </div>
    </article>
  );
}
