export default function Pricing() {
  const pricingData = [
    {
      title: 'Premium',
      description: 'For artisys just starting their music career.',
      price: '49.00',
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
        'For sellers who want to grow their business and have access to selected features.',
      price: '99.00',
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
        'For sellers who want to scale their business quickly, have a customized storefront, and complete features.',
      price: '600.00',
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
          <div className="plans-con">
            {pricingData.map((plan, index) => (
              <div key={index} className="plan">
                <div className="plan-col">
                  <div className="top-wrapper">
                    <div className="title-sub">
                      <div className="title-con">
                        <span className="tt">{plan.title}</span>
                      </div>
                      <p className="sub">{plan.description}</p>
                    </div>
                    <div className="price-con">
                      <span className="price">{plan.price}</span>
                      <span className="plan-period">/beat</span>
                    </div>
                  </div>
                  <div className="desc-more">
                    <div className="see-details">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
