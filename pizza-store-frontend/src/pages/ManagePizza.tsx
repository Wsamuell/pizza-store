import InputBar from '@/components/InputBar';
import LogOutNav from '@/components/LogOutNav';
import ReusableInputWithButton from '@/components/ReusableInputWithButton';
import ToppingsBox from '@/components/ToppingsBox';
import {
  deletePizza,
  getAllPizza,
  getAllToppings,
  insertPizza,
  updatePizza,
} from '@/helpers/supabaseClient';
import { Pizza, Topping } from '@/helpers/types';
import Footer from '@/scenes/footer/footer';
import { Reorder } from 'framer-motion';

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

const ManagePizza = () => {
  const [pizza, setPizza] = useState<Pizza[]>([]);
  const [toppings, setToppings] = useState<Topping[]>([]);

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  const [name, setName] = useState('');

  const newPizza: Pizza = {
    id: pizza.length + 1,
    name: name,
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (pizza.some((item) => item.name === newPizza.name)) {
      return;
    }

    try {
      await insertPizza(newPizza.name);
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
      console.log(pizza);
      await updatePizza(name, id);
      const updatedPizzas = pizza.map((pie) =>
        pie.id === id ? { ...pie, name: name } : pie
      );

      setPizza(updatedPizzas);
      console.log(pizza);

      console.log('Pizza updated successfully.');
    } catch (error) {
      console.error('Error updating Pizza:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const retrievedPizza = await getAllPizza();
        if (retrievedPizza) {
          setPizza(retrievedPizza);
        } else {
          console.log('Failed to retrieve Pizza.');
        }
      } catch (error) {
        console.error('Error retrieving Pizza:', error);
      }
    };
    const fetchToppings = async () => {
      const retrievedToppings = await getAllToppings();
      if (retrievedToppings) {
        setToppings(retrievedToppings);
      } else {
        console.log('Failed to retrieve toppings.');
      }
    };

    fetchData();
    fetchToppings();
  }, []);

  return (
    <div className="app">
      <LogOutNav isTopOfPage={isTopOfPage} />

      <div>
        <InputBar
          handleSubmit={handleSubmit}
          placeholder={'Add a new pizza...'}
          handleNameChange={handleNameChange}
          inputValue={name}
        />
        <Reorder.Group values={pizza} onReorder={setPizza}>
          {pizza.map((pie) => (
            <Reorder.Item
              className="m-4 flex flex-col justify-center"
              key={pie.id}
              value={pie}
            >
              <ReusableInputWithButton
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                name={pie.name}
                id={pie.id}
                handlePizzaNameChange={handlePizzaNameChange}
              >
                <ToppingsBox toppings={toppings} pizzaId={pie.id} />
              </ReusableInputWithButton>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
      <Footer />
    </div>
  );
};

export default ManagePizza;
