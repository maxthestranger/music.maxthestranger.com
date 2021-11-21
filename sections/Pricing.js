import { useMediaPredicate } from 'react-media-hook';
import Link from 'next/link';
import PriceDetail from '../components/PlanDetail';

export default function Pricing() {
  const tablet = useMediaPredicate('(max-width: 1024px)');
  const pricingData = [
    {
      title: 'Premium',
      description:
        'Beginner artists that want to promote their song on SoundCloud or Youtube.',
      price: '$49.00',
      rights: [
        {
          detail: 'High Quality MP3 & WAV Files',
          status: true,
        },
        {
          detail: '50,0000 Streams',
          status: true,
        },
        {
          detail: '3,000 Distribution',
          status: true,
        },
        {
          detail: '2 Radio Stations',
          status: true,
        },
        {
          detail: '1 Music Videos',
          status: true,
        },
        {
          detail: '50 Paid Performances',
          status: true,
        },
        {
          detail: 'WAV Trackout / Stems',
          status: false,
        },
        {
          detail: 'Beat Removed From Store',
          status: false,
        },
        {
          detail: 'Buy 2 Get 1 Free',
          status: true,
        },
      ],
    },
    {
      title: 'Unlimited',
      description:
        'Artists that are releasing their song on digital platforms (e.g. Spotify, iTunes, etc.) No limits',
      price: '$99.00',
      rights: [
        {
          detail: 'High Quality MP3 & WAV Files',
          status: true,
        },
        {
          detail: 'Unlimited Streams',
          status: true,
        },
        {
          detail: 'Unlimited Distribution',
          status: true,
        },
        {
          detail: 'Unlimited Radio Stations',
          status: true,
        },
        {
          detail: 'Unlimited Music Videos',
          status: true,
        },
        {
          detail: 'Unlimited Paid Performances',
          status: true,
        },
        {
          detail: 'WAV Trackout / Stems',
          status: true,
        },
        {
          detail: 'Beat Removed From Store',
          status: false,
        },
        {
          detail: 'Buy 2 Get 1 Free',
          status: true,
        },
      ],
    },
    {
      title: 'Exclusive',
      description:
        'If you’re serious and think you need exclusive rights, get in touch',
      price: '$600.00+',
      rights: [
        {
          detail: 'High Quality MP3 & WAV Files',
          status: true,
        },
        {
          detail: 'Unlimited Streams',
          status: true,
        },
        {
          detail: 'Unlimited Distribution',
          status: true,
        },
        {
          detail: 'Unlimited Radio Stations',
          status: true,
        },
        {
          detail: 'Unlimited Music Videos',
          status: true,
        },
        {
          detail: 'Unlimited Paid Performances',
          status: true,
        },
        {
          detail: 'WAV Trackout / Stems',
          status: true,
        },
        {
          detail: 'Beat Removed From Store',
          status: true,
        },
        {
          detail: 'Buy 2 Get 1 Free',
          status: true,
        },
      ],
    },
  ];
  return (
    <section className="pricing">
      <div className="max-w">
        <div className="plans-section">
          <h1 className="title">Choose your path to success</h1>
          <p className="subtitle">Cancel or change plans at anytime!</p>
          <div className={`plans-con ${tablet && 'single-plan'}`}>
            {pricingData.map((plan, index) => (
              <div key={index} className="plan">
                <div className={`plan-col ${tablet && 'single-plan'}`}>
                  <div className="top-wrapper">
                    <div className="title-sub">
                      <div className="title-con">
                        <span className="tt">{plan.title}</span>
                        {plan.title === 'Unlimited' && (
                          <div className="most-popular-badge">
                            <i className="ri-shield-star-line"></i>
                            <span>Most Popular</span>
                          </div>
                        )}
                      </div>
                      <p className="sub">{plan.description}</p>
                      <div className="price-con single-plan-tablet">
                        <span className="price">{plan.price}</span>
                        <span className="plan-period">/beat</span>
                      </div>
                    </div>
                    <div className="price-con">
                      <span className="price">{plan.price}</span>
                    </div>
                    {plan.title === 'Exclusive' && (
                      <Link href="/contact">
                        <a className="get-started-btn">
                          Request Exclusive Rights
                        </a>
                      </Link>
                    )}
                  </div>
                  <PriceDetail plan={plan} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
