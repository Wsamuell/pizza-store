import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import {
  deleteTopping,
  getAllToppings,
  insertToppings,
} from '@/helpers/supabaseClient';
import { Topping } from '@/helpers/types';
import Footer from '@/scenes/footer/footer';

const ManageToppings: React.FC = () => {
  const [toppings, setToppings] = useState<Topping[]>([]);
  const [name, setName] = useState('');

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log(name, toppings.length + 1);

    try {
      const newTopping = await insertToppings(name, toppings.length + 1);
      setToppings((prevToppings) => [...prevToppings, newTopping]);
      console.log('Topping inserted successfully.');
    } catch (error) {
      console.error('Error adding new topping:', error);
    }
  };
  const handleDelete = async (id: number) => {
    try {
      await deleteTopping(id);
      setToppings((prevToppings) =>
        prevToppings.filter((topping) => topping.id !== id)
      );
      console.log('Topping deleted successfully.');
    } catch (error) {
      console.error('Error deleting topping:', error);
    }
  };

  useEffect(() => {
    const fetchToppings = async () => {
      const retrievedToppings = await getAllToppings();
      if (retrievedToppings) {
        setToppings(retrievedToppings);
      } else {
        console.log('Failed to retrieve toppings.');
      }
    };

    fetchToppings();
  }, []);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap items-center justify-evenly p-5"
      >
        <input
          type="text"
          name="userNameInput"
          className="focus:ring-primary-600 focus:border-primary-600 w block w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900"
          placeholder="Sam's Special"
          onChange={handleNameChange}
          value={name}
        />
        <button
          type="submit"
          className={`hover:bg-primary-700 rounded-lg bg-secondary-500 px-5 py-2.5 text-center text-sm font-medium text-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-300 ${
            name === '' ? 'opacity-25' : ''
          }`}
          disabled={name === ''}
        >
          Insert Pizza
        </button>
      </form>

      {toppings.map((topping) => (
        <div key={topping.id}>
          <p>{topping.name}</p>
          <button onClick={() => handleDelete(topping.id)}>Delete</button>
          {/* <button onClick={() => handleUpdate(topping)}>Update</button> */}
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default ManageToppings;
