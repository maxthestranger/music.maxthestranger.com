import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Image from 'next/image';

export default function MarketPlace() {
  const sampleData = [
    {
      title: 'Dreamland Lofi',
      artist: 'Mts',
      price: '$20.99',
      img: 'pack2.webp',
    },
    {
      title: '808 Sauce 3',
      artist: 'Landr',
      price: '$15.00',
      img: 'pack3.webp',
    },
    {
      title: 'Dusk Beats II',
      artist: 'Landr',
      price: '$10.55',
      img: 'pack4.webp',
    },
    {
      title: 'Bad Habist Vol 3',
      artist: 'Nazizi',
      price: '$8.45',
      img: 'pack5.webp',
    },
    {
      title: 'Chilled Guitar Stacks',
      artist: 'Nux',
      price: '$20.00',
      img: 'pack6.webp',
    },
    {
      title: 'Autonomy - Hiphop & Trap',
      artist: 'Apex Audio',
      price: '$50.00',
      img: 'pack7.webp',
    },
    {
      title: 'Aesthetics',
      artist: 'Jet Set',
      price: '$45.50',
      img: 'pack8.webp',
    },
    {
      title: 'Skygarden',
      artist: 'Jet Set',
      price: '$32.32',
      img: 'pack9.webp',
    },
    {
      title: 'King Chop Kit',
      artist: 'Yung Chop',
      price: '$40.00',
      img: 'pack10.webp',
    },
    {
      title: 'Faces',
      artist: 'Hustle Rush',
      price: '$41.00',
      img: 'pack1.webp',
    },
  ];

  const params = {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    centeredSlides: false,
    breakpoints: {
      1024: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  };
  return (
    <section className="market">
      <div className="market-pad">
        <div className="max-w">
          <div className="pos-rel">
            <div className="market-title">
              <h2>
                Sample MarketPlace <a href="">Show more</a>
              </h2>
              <div className="right-swipe">
                <div className="swiper-control">
                  <div className="wrapper-swiper-controller">
                    <button className="btn-swiper-controller" disabled>
                      <span className="controller-icon left"></span>
                    </button>
                    <button className="btn-swiper-controller">
                      <span className="controller-icon right"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Swiper {...params}>
              {sampleData.map((sample, index) => (
                <SwiperSlide key={index}>
                  <div className="pack-card">
                    <div className="grid-item">
                      <figure className="card-figure">
                        <div className="thumbnail-group">
                          <div className="something">
                            <span className="back-layer"></span>
                            <span className="front-layer"></span>
                          </div>
                          <div className="hover-thumbnail-group">
                            <div className="card-figure-counter"></div>
                            <div className="hover-section">
                              <div className="top-left-corner"></div>
                              <div className="btn-play">
                                <div className="d-flex">
                                  <button className="btn-play-btn">
                                    <i className="ri-play-fill"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a href="#" className="figure-data">
                            <div className="shadow-overlay square"></div>

                            <div className="figure-image">
                              <Image
                                src={`/static/img/${sample.img}`}
                                alt={sample.title}
                                width={248}
                                height={248}
                              />
                            </div>
                          </a>
                        </div>
                        <figcaption>
                          <div className="grid-itemy">
                            <div className="item-title">
                              <div className="text-m-loud">
                                <a href="#" className="name">
                                  {sample.title}
                                </a>
                              </div>
                            </div>
                            <div className="item-subtitle">
                              <div className="inline-flex fit-parent">
                                <a href="#" className="name">
                                  {sample.artist}
                                </a>
                              </div>
                            </div>
                            <div className="extra-info">
                              <button className="button-add-to-cart-sound-kit">
                                <div>
                                  <span className="blue-label">
                                    {sample.price}
                                  </span>
                                </div>
                              </button>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
