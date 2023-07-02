import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import {
  deleteTopping,
  getAllToppings,
  insertToppings,
  updateTopping,
} from '@/helpers/supabaseClient';
import { Topping } from '@/helpers/types';
import Footer from '@/scenes/footer/footer';
import InputBar from '@/components/InputBar';
import ReusableInputWithButton from '@/components/ReusableInputWithButton';
import LogOutNav from '@/components/LogOutNav';
import { Reorder } from 'framer-motion';

const ManageToppings: React.FC = () => {
  const [toppings, setToppings] = useState<Topping[]>([]);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  const [name, setName] = useState('');
  const newTopping: Topping = {
    id: toppings.length + 1,
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
      await insertToppings(newTopping.name);
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
    <div className="app">
      <LogOutNav isTopOfPage={isTopOfPage} />
      <InputBar
        handleSubmit={handleSubmit}
        placeholder={'Add a new topping...'}
        handleNameChange={handleNameChange}
        inputValue={name}
      />
      <Reorder.Group
        values={toppings}
        onReorder={setToppings}
        className="flex flex-col"
      >
        {toppings.map((topping) => (
          <Reorder.Item value={topping} key={topping.id}>
            <ReusableInputWithButton
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              name={topping.name}
              id={topping.id}
              handlePizzaNameChange={handleToppingNameChange}
            />
          </Reorder.Item>
        ))}
      </Reorder.Group>
      <Footer />
    </div>
  );
};

export default ManageToppings;
