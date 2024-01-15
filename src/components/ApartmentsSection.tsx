'use client';
import ApartmentCard from '@components/ApartmentCard';
import { useEffect, useState } from 'react';
import { Apartment } from '@types';
import { ClipLoader } from 'react-spinners';

export default function ApartmentsSection() {
  const API_Apartments = 'http://localhost:5000/apartment';
  const [apartmentsData, setApartmentsData] = useState<Apartment[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsRefreshing((isRefreshingCurrent) => true);
        const response = await fetch(API_Apartments);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data: Apartment[] = await response.json();

        setApartmentsData(data);
        setIsRefreshing((isRefreshingCurrent) => false);
      } catch (error) {
        setIsRefreshing((isRefreshingCurrent) => false);
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div
      className={
        isRefreshing
          ? 'flex justify-center'
          : 'grid grid-cols-3 gap-y-5 mx-32 my-10'
      }
    >
      {isRefreshing ? (
        <ClipLoader className="my-28" />
      ) : (
        apartmentsData.map((apartment) => (
          <ApartmentCard key={apartment.ApartmentID} apartment={apartment} />
        ))
      )}
    </div>
  );
}
