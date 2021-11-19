import Image from 'next/image';

export default function Testimony() {
  const testimonies = [
    {
      clientName: 'Brandon',
      countryFlag: 'canada.svg',
      description: `Max's skill set was exactly what I was looking for. He was
            able to add awesome drums to our track. He was always available
            to make changes and help push the song to new places. Would
            definitely recommend if you are looking for high quality
            production and grooving percussion!`,
      location: 'North Vancouver, Canada',
      title: 'Drums for a funk track',
    },
    {
      clientName: 'Dj Frozen',
      countryFlag: 'saudi.svg',
      description: `Thanks to Max we executed the project in a perfect way`,
      location: 'Riyadh, Saudi Arabia',
      title: 'Produce An Afrobeat Remix with an Arabic Vocals',
    },
    {
      clientName: 'John March',
      countryFlag: 'us.svg',
      description: `Max turned out to be a pleasant surprise and it was a pleasure to work with him.
        Skill, talent, innovation, precision in work ...
        I am extremely satisfied and hope to be able to work with him for a long time.`,
      location: 'Covina, USA',
      title: 'Re-production of a rap beat (instrumental)',
    },
    {
      clientName: 'Ken Seo-yun',
      countryFlag: 'south_korea.svg',
      description: `Max made multiple revisions for my song, and he made a song which was beyond what i expected. God has blessed him on this project with me :)`,
      location: 'Namyangjushi, South Korea',
      title: "short 90's hip hop beat",
    },
    {
      clientName: 'Cyusa Kamoso',
      countryFlag: 'canada.svg',
      description: `Best producer of all time. Very patient, and much more.`,
      location: 'Pointe-Claire, Canada',
      title: 'Create Afrobeat remix from original songs',
    },
    {
      clientName: 'Oscar Nelson',
      countryFlag: 'us.svg',
      description: `Solid job. Great to work with!`,
      location: 'Astoria, USA',
      title: 'Vocals for a Hip Hop track.',
    },
    {
      clientName: 'Justin Boreland',
      countryFlag: 'uk.svg',
      description: `Still would like to commission him for my label`,
      location: 'Birmingham, UK',
      title: 'Sound Designer for Drill Sample Pack',
    },
  ];
  return (
    <section className="testimony">
      <div className="test-wrapper">
        <h2>You&apos;re in good company</h2>
        <p>
          I have worked with lots of artists across the globe on different
          projects.
        </p>
        <div className="card-con">
          {testimonies.map((testimony, index) => (
            <div key={index} className="test">
              <div className="test-con">
                <div className="top-sec">
                  <p>{testimony.title}</p>
                  <Image
                    src={`/static/img/${testimony.countryFlag}`}
                    alt={testimony.location}
                    width={24}
                    height={24}
                  />
                </div>
                <p className="desc">{testimony.description}</p>
                <div className="bottom-sec">
                  <p>@{testimony.clientName}</p>
                  <span>
                    {testimony.location.split(',')[0]}
                    ,<br />
                    {testimony.location.split(',')[1]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
