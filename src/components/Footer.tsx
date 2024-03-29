import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image src="/nawy_logo.svg" alt="" width={118} height={18} />

          <p className="text-base text-gray-700">
            Nawy 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
      </div>
    </footer>
  );
}
