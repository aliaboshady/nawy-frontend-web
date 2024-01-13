import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  return (
    <header className="w-full z-10">
      <nav className="max-w-[1440px] max-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link className="flex justify-center items-center" href="/">
          <Image src="/nawy_logo.svg" alt="" width={118} height={18} />
        </Link>
      </nav>
    </header>
  );
}
