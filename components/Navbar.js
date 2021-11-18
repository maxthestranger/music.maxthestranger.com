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
    <header className="site-header">
      <Link href="/">
        <a className="btn-header btn-logo">
          <Image
            src="/static/img/logo.svg"
            alt="MTS Logo"
            width="128"
            height="48"
          />
        </a>
      </Link>
      <nav className="site-nav">
        <ul>
          {navLink.map((link, index) => (
            <li key={index}>
              <Link href={`/${link}`}>
                <a>
                  <span>{caps(link)}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
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
