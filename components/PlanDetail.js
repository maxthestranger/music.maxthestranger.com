import { useState } from 'react';

export default function PriceDetail({ plan }) {
  const [show, setShow] = useState(false);

  return (
    <div className="desc-more">
      <button onClick={() => setShow(!show)} className="see-details-mobile">
        <i className="ri-arrow-down-s-line"></i>
        {show ? 'Hide Details' : 'See Details'}
      </button>
      <div className={`see-details ${show && 'show'}`}>
        <ul>
          {plan.rights.map((right, index) => (
            <li key={index}>
              {right.status ? (
                <i className="ri-checkbox-circle-line"></i>
              ) : (
                <i className="ri-close-circle-line"></i>
              )}

              <span>{right.detail}</span>
            </li>
          ))}
        </ul>
      </div>
      <a href="#" className="see-more">
        View full licence
      </a>
    </div>
  );
}
