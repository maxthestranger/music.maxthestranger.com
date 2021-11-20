import Image from 'next/image';

export default function Yt() {
  return (
    <section className="yt">
      <div>
        <div className="col">
          <div className="widget">
            <div className="w">
              <p className="w-title">Subscribe Today</p>
            </div>
            <div className="w">
              <h2>The fastest growing YouTube producer channel</h2>
            </div>
            <div className="w">
              <p className="w-desc">
                We give producers exposure on YouTube and help them put their
                quality music in front of today’s community of undiscovered
                artists.
              </p>
            </div>
            <div className="w">
              <a href="#" target="_blank">
                Subscribe Now
              </a>
            </div>
            <div className="w">
              <ul>
                <li>
                  <i className="ri-check-double-line"></i> Over 1200+ beats on
                  YouTube and the Instant Beat Store
                </li>
                <li>
                  <i className="ri-check-double-line"></i> Close to 1 million
                  subscribers
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="widget">
            <Image
              src="/static/img/yt.png"
              alt="youtube"
              width={800}
              height={471}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
