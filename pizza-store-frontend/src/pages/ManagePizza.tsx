import { getAllPizza, insertPizza } from '@/helpers/supabaseClient';
import Footer from '@/scenes/footer/footer';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

type Props = {};

interface Pizza {
  id: number;
  name: string;
}
const ManagePizza = (props: Props) => {
  const [pizza, setPizza] = useState<Pizza[]>([]);
  const [name, setName] = useState('');
  const disabledStyle = name === '' ? 'opacity-25' : 'opacity-100';

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    insertPizza(name);
  };

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
          className="focus:ring-primary-600 focus:border-primary-600 w block w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900"
          placeholder="Sam's Special"
          onChange={handleNameChange}
          value={name}
        />
        <button
          type="submit"
          className={`hover:bg-primary-700  rounded-lg bg-secondary-500 px-5 py-2.5 text-center text-sm font-medium text-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-300 ${disabledStyle}`}
          disabled={name === ''}
        >
          Insert Pizza
        </button>
      </form>
      {pizza.map((pie) => (
        <div key={pie.id}>{pie.name}</div>
      ))}
      <Footer />
    </div>
  );
};

export default ManagePizza;
