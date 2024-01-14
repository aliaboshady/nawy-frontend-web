'use client';

import ApartmentCard from '@components/ApartmentCard';
import { useEffect, useState } from 'react';
import { Apartment } from '@types';

export default function ApartmentsSection() {
  const API_Apartments = 'http://localhost:5000/apartment';
  const [apartmentsData, setApartmentsData] = useState<Apartment[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(API_Apartments);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data: Apartment[] = await response.json();

        setApartmentsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-y-5 mx-32 my-10">
      {apartmentsData.map((apartment) => (
        <ApartmentCard key={apartment.ApartmentID} apartment={apartment} />
      ))}
    </div>
  );
}
