import { Apartment } from '@types';

export const apartments: Apartment[] = [
  {
    apartmentID: 1,
    title: 'Modern Apartment in Zamalek',
    description:
      'A spacious and modern apartment with a great view of the Nile',
    address: 'Zamalek, Cairo, Egypt',
    price: 2500000,
    size: 150,
    countBeds: 3,
    countToilets: 2,
    images: [
      {
        imageID: 1,
        apartmentID: 1,
        imagePath: '/house.jpg',
      },
    ],
  },
  {
    apartmentID: 2,
    title: 'Cozy Studio in Maadi',
    description:
      'A compact studio perfect for singles, located in a quiet neighborhood',
    address: 'Maadi as Sarayat Al Gharbeyah, Maadi, Cairo, Egypt',
    price: 850000,
    size: 50,
    countBeds: 1,
    countToilets: 1,
    images: [
      {
        imageID: 1,
        apartmentID: 2,
        imagePath: '/house.jpg',
      },
    ],
  },
  {
    apartmentID: 3,
    title: 'Luxurious Penthouse in New Cairo',
    description:
      'An exquisite penthouse with modern amenities and a panoramic city view',
    address: '5th Settlement, New Cairo City, Cairo, Egypt',
    price: 4700000,
    size: 200,
    countBeds: 4,
    countToilets: 3,
    images: [
      {
        imageID: 1,
        apartmentID: 3,
        imagePath: '/house.jpg',
      },
    ],
  },
  {
    apartmentID: 4,
    title: 'Affordable Apartment in Nasr City',
    description:
      'An ideal apartment for small families, close to schools and shopping centers',
    address: 'Nasr City, Cairo, Egypt',
    price: 1500000,
    size: 120,
    countBeds: 2,
    countToilets: 2,
    images: [
      {
        imageID: 1,
        apartmentID: 4,
        imagePath: '/house.jpg',
      },
    ],
  },
  {
    apartmentID: 5,
    title: 'Vintage Style Apartment in Heliopolis',
    description:
      'A charming apartment with a vintage style in a historic neighborhood',
    address: 'Heliopolis, Cairo, Egypt',
    price: 2000000,
    size: 130,
    countBeds: 3,
    countToilets: 1,
    images: [
      {
        imageID: 1,
        apartmentID: 5,
        imagePath: '/house.jpg',
      },
    ],
  },
  {
    apartmentID: 6,
    title: 'Elegant Apartment in Downtown',
    description:
      'Luxury apartment located in the heart of the city with easy access to amenities',
    address: 'Downtown, Cairo, Egypt',
    price: 3200000,
    size: 160,
    countBeds: 3,
    countToilets: 2,
    images: [
      {
        imageID: 1,
        apartmentID: 6,
        imagePath: '/house.jpg',
      },
    ],
  },
];
