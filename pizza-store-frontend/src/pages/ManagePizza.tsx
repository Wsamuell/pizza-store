import {
  deletePizza,
  getAllPizza,
  // getAllToppingsOnPizza,
  insertPizza,
  updatePizza,
} from '@/helpers/supabaseClient';
import { Pizza } from '@/helpers/types';
import Footer from '@/scenes/footer/footer';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

const ManagePizza = () => {
  const [pizza, setPizza] = useState<Pizza[]>([]);
  const [name, setName] = useState('');
  // const [toppings, setToppings] = useState([]);

  const newPizza: Pizza = {
    id: pizza.length + 1,
    name: name,
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (pizza.some((item) => item.name === newPizza.name)) {
      return;
    }

    try {
      await insertPizza(newPizza.name, newPizza.id);
      setPizza([...pizza, newPizza]);
    } catch (error) {
      console.error('Error adding new pizza:', error);
    }

    setName('');
  };
  const handlePizzaNameChange = (
    event: ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const { value } = event.target;
    setPizza((prevPizza) =>
      prevPizza.map((pizza) =>
        pizza.id === id ? { ...pizza, name: value } : pizza
      )
    );
  };
  const handleDelete = async (id: number) => {
    try {
      await deletePizza(id);
      setPizza((prevPizza) => prevPizza.filter((pie) => pie.id !== id));
      console.log('Pizza deleted successfully.');
    } catch (error) {
      console.error('Error deleting Pizza:', error);
    }
  };
  const handleUpdate = async (id: number, name: string) => {
    try {
      await updatePizza(name, id);
      const updatedPizza = pizza.map((pie) =>
        pie.id === id ? { ...pie, name: name } : pie
      );

      setPizza(updatedPizza);
      console.log('Pizza updated successfully.');
    } catch (error) {
      console.error('Error updating Pizza:', error);
    }
  };
  // const handleGetToppingsOnPizza = async (id: number) => {
  //   try {
  //     const toppingsList = await getAllToppingsOnPizza(id);
  //     if (toppingsList) {
  //       console.log(toppingsList.map((item) => item.toppings));
  //       // console.log(toppingsList.map(topping: Topping) => topping.name);
  //       // setToppings(toppingsList.map((item) => item.toppings));
  //     } else {
  //       console.log('Failed to retrieve ToppingsOnPizza.');
  //     }
  //   } catch (error) {
  //     console.error('Error retrieving ToppingsOnPizza:', error);
  //   }
  // };
  // handleGetToppingsOnPizza(1);
  useEffect(() => {
    getAllPizza().then((retrievedPizza) => {
      if (retrievedPizza) {
        setPizza(retrievedPizza);
      } else {
        console.log('Failed to retrieve Pizza.');
      }
    });
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

      {pizza.map((pie) => (
        <div key={pie.id} className="flex items-center px-8 py-4">
          <div>
            <input
              type="text"
              value={pie.name}
              onChange={(event) => handlePizzaNameChange(event, pie.id)}
              className="focus:ring-primary-600 focus:border-primary-600 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900"
            />
          </div>
          <button
            onClick={() => handleDelete(pie.id)}
            className="rounded-xl bg-red-500 px-2 py-1 font-medium text-white hover:bg-red-900"
          >
            Remove
          </button>
          <button
            onClick={() => handleUpdate(pie.id, pie.name.trim())}
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

export default ManagePizza;
