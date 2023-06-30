import InputBar from '@/components/InputBar';
import ReusableInputWithButton from '@/components/ReusableInputWithButton';
import {
  deletePizza,
  getAllPizza,
  getAllToppingsOnPizza,
  insertPizza,
  updatePizza,
} from '@/helpers/supabaseClient';
import { Pizza, Topping } from '@/helpers/types';
import Footer from '@/scenes/footer/footer';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

const ManagePizza = () => {
  const [pizza, setPizza] = useState<Pizza[]>([]);
  const [toppingsData, setToppingsData] = useState({});
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

  const handleGetToppingsOnPizza = async (id: number) => {
    try {
      const allToppings = await getAllToppingsOnPizza(id);
      const toppingsData = allToppings?.map((a) => a);

      setToppingsData((prevData) => ({ ...prevData, toppingsData }));
    } catch (error) {
      console.error('Error retrieving ToppingsOnPizza:', error);
    }
  };

  // getAllToppingsOnPizza(1);
  // on delete of pizza we want to first find all toppings and delete them
  // useEffect(() => {
  //   pizza.map((pie) => {
  //     console.log('Im here');
  //     handleGetToppingsOnPizza(pie.id);
  //   });
  // }, [pizza, toppingsData]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const retrievedPizza = await getAllPizza();
        if (retrievedPizza) {
          setPizza(retrievedPizza);
          // retrievedPizza.forEach((pie) => {
          //   handleGetToppingsOnPizza(pie.id);
          // });
        } else {
          console.log('Failed to retrieve Pizza.');
        }
      } catch (error) {
        console.error('Error retrieving Pizza:', error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const retrievedPizza = await getAllPizza();
        if (retrievedPizza) {
          setPizza(retrievedPizza);

          retrievedPizza.forEach((pie) => {
            console.log('yay');
            handleGetToppingsOnPizza(pie.id);
          });
        } else {
          console.log('Failed to retrieve Pizza.');
        }
      } catch (error) {
        console.error('Error retrieving Pizza:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div>
        <InputBar
          handleSubmit={handleSubmit}
          placeholder={'Add a new pizza...'}
          handleNameChange={handleNameChange}
          inputValue={name}
        />
        {pizza.map((pie) => (
          <ReusableInputWithButton
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            name={pie.name}
            id={pie.id}
            handlePizzaNameChange={handlePizzaNameChange}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ManagePizza;
