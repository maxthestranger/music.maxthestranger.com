import Image from 'next/image';

export default function Services() {
  const servicesData = [
    {
      title: 'Custom Production',
      desc: `Customize your Pro Page to tell your story. We have
            countless customization options.`,
      img: 'create-storefront.svg',
    },
    {
      title: 'Mixing and Mastering',
      desc: `Whether it be beats, custom services, sound kits, merch, and much more - we make selling easy.`,
      img: 'share-products.svg',
    },
    {
      title: 'Song Writing',
      desc: `There is no delay in collecting your earnings. Get paid every time you make a sale.`,
      img: 'get-paid.svg',
    },
  ];
  return (
    <section className="services">
      <div className="d-block">
        <div className="padding-con pb-0">
          <div className="max-width-con">
            <h1 className="title">Other services</h1>
            <p className="subtitle-all">
              Create and customize your storefront with the Pro Page
            </p>
            <div className="services-section">
              {servicesData.map((service, index) => (
                <div key={index} className="service">
                  <div className="player">
                    <Image
                      src={`/static/img/${service.img}`}
                      alt={service.title}
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="service-detail">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.desc}</p>

                    <a href="#" className="order">
                      Order
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
