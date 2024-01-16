'use client';
import Image from 'next/image';
import { Apartment, ApartmentImage } from '@types';
import { useEffect, useState } from 'react';
import { binaryImageToURL, formatAsCurrency } from '@utils/helpers';
import { ClipLoader } from 'react-spinners';

export default function ApartmentDetails({
  params,
}: {
  params: { id: string };
}) {
  const API_Apartments = `http://localhost:5000/apartment/${params.id}`;
  const API_ApartmentsImages = `http://localhost:5000/apartment/images/${params.id}`;

  const [apartment, setApartment] = useState<Apartment | undefined>();
  const [apartmentImages, setApartmentImages] = useState<
    ApartmentImage[] | undefined
  >();
  const [imageIndex, setImageIndex] = useState(0);

  async function fetchData() {
    try {
      const responseApartmentDetails = await fetch(API_Apartments);
      const responseApartmentImages = await fetch(API_ApartmentsImages);

      if (responseApartmentDetails.ok && responseApartmentImages.ok) {
        const dataDetails: Apartment[] = await responseApartmentDetails.json();
        const dataImages: ApartmentImage[] =
          await responseApartmentImages.json();

        setApartment(dataDetails[0]);
        setApartmentImages(dataImages);
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

  function changeImage(next: boolean) {
    if (!apartmentImages) return;

    if (next) {
      if (imageIndex < apartmentImages?.length - 1) {
        setImageIndex(imageIndex + 1);
      } else {
        setImageIndex(0);
      }
    } else {
      if (imageIndex > 0) {
        setImageIndex(imageIndex - 1);
      } else {
        setImageIndex(apartmentImages?.length - 1);
      }
    }
  }

  return (
    <div className="flex justify-center">
      {!apartment ? (
        <div className="h-60 mt-52">
          <ClipLoader />
        </div>
      ) : (
        <div className="w-full h-fit mx-40 my-10 border rounded-md border-gray-200 bg-white">
          <div className="flex flex-row justify-between relative w-full h-[30rem] rounded-t-md bg-gray-200 overflow-hidden">
            {apartmentImages && apartmentImages.length > 1 ? (
              <button
                className="group pr-16 pl-5 z-10"
                onClick={() => changeImage(false)}
              >
                <Image
                  className="group-hover:-translate-x-2 group-hover:opacity-100 rotate-180 opacity-70 transition-all duration-300"
                  src={'/next.png'}
                  alt=""
                  width={40}
                  height={40}
                  objectFit="contain"
                />
              </button>
            ) : null}

            {apartmentImages && apartmentImages.length > 0 ? (
              <Image
                className="hover:scale-125 transition-all duration-1000"
                src={binaryImageToURL(apartmentImages[imageIndex].Image)}
                alt=""
                fill
                objectFit="contain"
              />
            ) : null}

            {apartmentImages && apartmentImages.length > 1 ? (
              <button
                className="group pr-5 pl-16 z-10"
                onClick={() => changeImage(true)}
              >
                <Image
                  className="group-hover:translate-x-2 group-hover:opacity-100 opacity-70 transition-all duration-300"
                  src={'/next.png'}
                  alt=""
                  width={40}
                  height={40}
                  objectFit="contain"
                />
              </button>
            ) : null}
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
