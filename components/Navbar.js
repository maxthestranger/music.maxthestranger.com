import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const navLink = [
    'buy beats',
    'licencing',
    'sample packs',
    'services',
    'blog',
    'hit me up',
  ];
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
          <a>
            <Image
              src="/static/img/logo.svg"
              alt="MTS Logo"
              width="128"
              height="48"
            />
          </a>
        </Link>
      </div>
      <nav>
        {navLink.map((link, index) => (
          <div key={index} className="nav-item">
            <Link href={`/${link}`}>
              <a className="nav-text">{caps(link)}</a>
            </Link>
          </div>
        ))}
      </nav>

      <div className="hire">
        <button className="secondary" type="button">
          Hire Me
        </button>
      </div>
    </header>
  );
}

function caps(str) {
  return str.toLowerCase().replace(/\b[a-z](?=[a-z]{1})/g, function (letter) {
    return letter.toUpperCase();
  });
}
