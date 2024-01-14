import Image from 'next/image';
import { Apartment } from '@types';
import { formatAsCurrency, binaryImageToURL } from '@utils/helpers';

interface ApartmentCardProps {
  apartment: Apartment;
}

export default function ApartmentCard({ apartment }: ApartmentCardProps) {
  const imageURL = binaryImageToURL(apartment.Image);

  return (
    <div className="w-96 h-fit mx-5 border rounded-md border-gray-200">
      <div className="relative w-full h-64 rounded-t-md bg-gray-200 overflow-hidden">
        <Image
          className="hover:scale-125 transition-all duration-1000"
          src={imageURL}
          alt=""
          fill
          objectFit="contain"
        />
      </div>

      <div className="mx-4 my-3">
        <div className="w-full font-semibold text-gray-800">
          {apartment.Title}
        </div>
        <div className="w-full text-xs text-gray-500">{apartment.Address}</div>

        <div className="relative my-3 w-44 flex justify-between">
          <div className="relative">
            <Image src="/bed.png" alt="" width={30} height={30} unoptimized />
            <div className="absolute top-0 left-0 text-xs">
              {apartment.CountBeds}
            </div>
          </div>

          <div className="relative">
            <Image
              src="/toilet.png"
              alt=""
              width={30}
              height={30}
              unoptimized
            />
            <div className="absolute top-0 left-0 text-xs">
              {apartment.CountToilets}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <p className="mr-2 text-gray-200 text-xl">|</p>
            <Image src="/size.png" alt="" width={20} height={20} unoptimized />
            <p className="ml-2">
              {apartment.Size} m<sup className="align-top top-2">2</sup>
            </p>
          </div>
        </div>

        <p className="text-lg font-bold text-gray-000">
          {formatAsCurrency(apartment.Price)} EGP
        </p>
      </div>
    </div>
  );
}
