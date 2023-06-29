import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import {
  deleteTopping,
  getAllToppings,
  insertToppings,
  updateTopping,
} from '@/helpers/supabaseClient';
import { Topping } from '@/helpers/types';
import Footer from '@/scenes/footer/footer';

const ManageToppings: React.FC = () => {
  const [toppings, setToppings] = useState<Topping[]>([]);
  const [name, setName] = useState('');
  const newTopping: Topping = {
    id: toppings.length + 1,
    name: name,
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleToppingNameChange = (
    event: ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const { value } = event.target;
    setToppings((prevToppings) =>
      prevToppings.map((topping) =>
        topping.id === id ? { ...topping, name: value } : topping
      )
    );
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    newTopping.name = newTopping.name.trim();
    if (toppings.some((item) => item.name === newTopping.name)) {
      return;
    }

    try {
      await insertToppings(newTopping.name, newTopping.id);
      setToppings([...toppings, newTopping]);
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
  const handleUpdate = async (id: number, name: string) => {
    try {
      await updateTopping(name, id);
      const updatedToppings = toppings.map((topping) =>
        topping.id === id ? { ...topping, name: name } : topping
      );

      setToppings(updatedToppings);
      console.log('Topping updated successfully.');
    } catch (error) {
      console.error('Error updating topping:', error);
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
          className=" focus:ring-primary-600 focus:border-primary-600 w block w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900"
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
        <div key={topping.id} className="flex items-center px-8 py-4">
          <input
            type="text"
            value={topping.name}
            onChange={(event) => handleToppingNameChange(event, topping.id)}
            className="focus:ring-primary-600 focus:border-primary-600 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900"
          />
          <button
            onClick={() => handleDelete(topping.id)}
            className="rounded-xl bg-red-500 px-2 py-1 font-medium text-white hover:bg-red-900"
          >
            Remove
          </button>
          <button
            onClick={() => handleUpdate(topping.id, topping.name.trim())}
            className="rounded-xl bg-secondary-500 px-2 py-1 font-medium text-white hover:bg-red-900"
          >
            Update
          </button>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default ManageToppings;
