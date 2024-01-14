import Image from 'next/image';
import CreateApartmentForm from './CreateApartmentForm';

export default function Hero() {
  return (
    <div className="relative w-full h-[26rem]">
      <Image src="/hero_bg.png" alt="Background Image" fill />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col py-6 px-36">
        <h1 className="text-white text-6xl mb-4 font-extrabold">
          Find Your New Home
        </h1>
        <p className="text-white text-lg">
          Search & compare among 5000+ properties and 500+ compounds or list
          your property for sale
        </p>

        <CreateApartmentForm />
      </div>
    </div>
  );
}
