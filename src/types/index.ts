export interface Apartment {
  apartmentID: number;
  title: string;
  description: string;
  address: string;
  price: number;
  size: number;
  countBeds: number;
  countToilets: number;
  images?: ApartmentImage[];
}

export interface ApartmentImage {
  imageID: number;
  apartmentID: number;
  imagePath: string;
}
