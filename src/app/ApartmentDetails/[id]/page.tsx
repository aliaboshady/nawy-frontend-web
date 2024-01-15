'use client';
import Image from 'next/image';
import { Apartment } from '@types';
import { useEffect, useState } from 'react';
import { binaryImageToURL, formatAsCurrency } from '@utils/helpers';
import { ClipLoader } from 'react-spinners';

export default function ApartmentDetails({
  params,
}: {
  params: { id: string };
}) {
  const API_Apartments = `http://localhost:5000/apartment/${params.id}`;
  const [apartment, setApartment] = useState<Apartment | undefined>();

  async function fetchData() {
    try {
      const response = await fetch(API_Apartments);

      if (response.ok) {
        const data: Apartment[] = await response.json();
        setApartment(data[0]);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-center">
      {!apartment ? (
        <div className="h-60 mt-52">
          <ClipLoader />
        </div>
      ) : (
        <div className="w-full h-fit mx-40 my-10 border rounded-md border-gray-200 bg-white">
          <div className="relative w-full h-[30rem] rounded-t-md bg-gray-200 overflow-hidden">
            <Image
              className="hover:scale-125 transition-all duration-1000"
              src={binaryImageToURL(apartment.Image)}
              alt=""
              fill
              objectFit="contain"
            />
          </div>

          <div className="mx-4 my-3">
            <div className="w-full text-3xl font-semibold text-gray-800">
              {apartment.Title}
            </div>
            <div className="w-full text-xs mt-2 ml-1 text-gray-500">
              {apartment.Address}
            </div>
            <div className="w-full text-xl my-7 text-gray-500">
              {apartment.Description}
            </div>

            <div className="relative my-3 w-44 flex justify-between">
              <div className="relative">
                <Image
                  src="/bed.png"
                  alt=""
                  width={30}
                  height={30}
                  unoptimized
                />
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
                <Image
                  src="/size.png"
                  alt=""
                  width={20}
                  height={20}
                  unoptimized
                />
                <p className="ml-2">
                  {apartment.Size} m<sup className="align-top top-2">2</sup>
                </p>
              </div>
            </div>

            <p className="text-2xl font-bold text-gray-900">
              {formatAsCurrency(apartment.Price)} EGP
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
