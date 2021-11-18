import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
  const [mail, setMail] = useState('');
  const [disabled, setDisabled] = useState(true);
  const socials = [
    {
      imgUrl: 'fb.svg',
      altText: 'facebook',
      url: 'https://facebook.com/maxthestranger/',
    },
    {
      imgUrl: 'yt.svg',
      altText: 'youtube',
      url: 'https://youtube.com/channel/UCh3IffS3fHpi8GQGq61SppA',
    },
    {
      imgUrl: 'tw.svg',
      altText: 'twitter',
      url: 'https://twitter.com/Maxthestranger',
    },
    {
      imgUrl: 'ig.svg',
      altText: 'instagram',
      url: 'https://instagram.com/mts_beatz/',
    },
    {
      imgUrl: 'sc.svg',
      altText: 'soundcloud',
      url: 'https://soundcloud.com/maxthestranger',
    },
  ];

  function handleChange(e) {
    setMail(e.target.value);

    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.target.value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  return (
    <footer className="footer">
      <div className="mail-list">
        <h3>Yes! Send me some FREE!! 🔥🔥🔥 beats and tips 💯</h3>
        <form className="form">
          <div className="form-group">
            <i className="ri-mail-send-line"></i>
            <input
              type="email"
              placeholder="Enter your email"
              value={mail}
              onChange={handleChange}
            />
          </div>
          <button type="submit" disabled={disabled}>
            Subscribe
          </button>
        </form>
      </div>
      <div className="socials">
        {socials.map((social, index) => (
          <a key={index} href={social.url} target="_blank" rel="noreferrer">
            <Image
              src={`/static/img/${social.imgUrl}`}
              alt={social.altText}
              width={40}
              height={40}
            />
          </a>
        ))}
      </div>
      <div className="copyright">
        <div>© {new Date().getFullYear()} Mts Beatz, Inc. • Version: 1.0.0</div>
      </div>
    </footer>
  );
}
