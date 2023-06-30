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
    <div className="flex justify-center">
      <InputBar
        handleSubmit={handleSubmit}
        placeholder={'Add a new topping...'}
        handleNameChange={handleNameChange}
        inputValue={name}
      />
      {toppings.map((topping) => (
        <ReusableInputWithButton
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          name={topping.name}
          id={topping.id}
          handlePizzaNameChange={handleToppingNameChange}
        />
      ))}
      <Footer />
    </div>
  );
};

export default ManageToppings;
