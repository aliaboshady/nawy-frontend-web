import ApartmentCard from '@components/ApartmentCard';
import { apartments } from '@data/apartments';

export default function ApartmentsSection() {
  return (
    <div className="grid grid-cols-3 gap-y-5 mx-32 my-10">
      {apartments.map((apartment) => (
        <ApartmentCard key={apartment.apartmentID} apartment={apartment} />
      ))}
    </div>
  );
}
