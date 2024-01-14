'use client';
import { useState } from 'react';

export default function CreateApartmentForm() {
  const API_CreateApartments = 'http://localhost:5000/apartment/create';

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState(10000);
  const [size, setSize] = useState(50);
  const [countBeds, setCountBeds] = useState(1);
  const [countToilets, setCountToilets] = useState(1);
  const [isCreating, setIsCreating] = useState(false);

  async function submit(e: any) {
    e.preventDefault();
    setIsCreating((isCreatingCurrent) => true);

    const newApartment = {
      Title: title,
      Description: description,
      Address: address,
      Price: price,
      Size: size,
      CountBeds: countBeds,
      CountToilets: countToilets,
    };

    const res = await fetch(API_CreateApartments, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newApartment),
    });

    if (res.ok) {
      setIsCreating((isCreatingCurrent) => false);
      window.location.reload();
    }
  }

  return (
    <div className="mt-5">
      <h1 className="text-white text-xl">Create a new Apartment</h1>
      <form
        onSubmit={submit}
        className="bg-gray-100 py-4 px-4 w-fit rounded-md opacity-95"
      >
        <div className="flex items-center">
          <div className="flex flex-col gap-4">
            <label>
              <input
                className="pl-2 text-lg"
                required
                placeholder="Title"
                type="text"
                onChange={(e) => {
                  e.preventDefault();
                  setTitle(e.target.value);
                }}
                value={title}
              ></input>
            </label>

            <label>
              <input
                className="pl-2 text-lg"
                required
                placeholder="Description"
                type="text"
                onChange={(e) => {
                  e.preventDefault();
                  setDescription(e.target.value);
                }}
                value={description}
              ></input>
            </label>

            <label>
              <input
                className="pl-2 text-lg"
                required
                placeholder="Address"
                type="text"
                onChange={(e) => {
                  e.preventDefault();
                  setAddress(e.target.value);
                }}
                value={address}
              ></input>
            </label>
          </div>

          <div className="flex flex-col mx-5 gap-4">
            <label>
              <p>Price (EGP)</p>
              <input
                className="pl-2 text-lg"
                required
                type="number"
                min={10000}
                onChange={(e) => {
                  e.preventDefault();
                  setPrice(Number(e.target.value));
                }}
                value={price}
              ></input>
            </label>

            <label>
              <p>
                Size (m<sup className="align-top top-2">2</sup>)
              </p>
              <input
                className="pl-2 text-lg"
                required
                type="number"
                min={50}
                onChange={(e) => {
                  e.preventDefault();
                  setSize(Number(e.target.value));
                }}
                value={size}
              ></input>
            </label>
          </div>

          <div className="flex flex-col gap-4">
            <label>
              <p>Beds</p>
              <input
                className="pl-2 text-lg"
                required
                type="number"
                min={1}
                onChange={(e) => {
                  e.preventDefault();
                  setCountBeds(Number(e.target.value));
                }}
                value={countBeds}
              ></input>
            </label>

            <label>
              <p>Toilets</p>
              <input
                className="pl-2 text-lg"
                required
                type="number"
                min={1}
                onChange={(e) => {
                  e.preventDefault();
                  setCountToilets(Number(e.target.value));
                }}
                value={countToilets}
              ></input>
            </label>
          </div>
        </div>

        <button
          className="bg-blue-950 text-white py-2 px-3 mt-5 rounded-md"
          disabled={isCreating}
        >
          {!isCreating && 'Add Apartment'}
          {isCreating && 'Loading...'}
        </button>
      </form>
    </div>
  );
}
