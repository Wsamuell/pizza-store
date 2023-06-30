import { getAllToppingsOnPizza } from '@/helpers/supabaseClient';
import { Topping } from '@/helpers/types';
import { useEffect, useState } from 'react';

type Props = {
  toppings: Topping[];
  pizzaId: number;
};
const ToppingsBox = ({ toppings, pizzaId }: Props) => {
  const [pizzaToppings, setPizzaToppings] = useState<Topping[]>([]);
  useEffect(() => {
    console.log('grabbing Toppings on Pizza');
  }, []);
  useEffect(() => {
    const fetchToppingOnPizza = async () => {
      try {
        const retrievedToppings = await getAllToppingsOnPizza(pizzaId);
        if (retrievedToppings) {
          setPizzaToppings(
            retrievedToppings?.flatMap((topping) => topping.toppings)
          );
        } else {
          console.log('Failed to retrieve Pizza.');
        }
      } catch (error) {
        console.error('Error retrieving Pizza:', error);
      }
    };
    fetchToppingOnPizza();
  }, [pizzaId]);

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center">
        {toppings.map((topping) => {
          pizzaToppings.map((topping) => topping.id).includes(topping.id)
            ? console.log('Here')
            : console.log('Not here');
          return (
            <div
              key={topping.id}
              className={`m-1 rounded-xl p-2 text-xs shadow-lg hover:scale-105 hover:bg-secondary-500 hover:shadow-xl ${
                pizzaToppings.map((topping) => topping.id).includes(topping.id)
                  ? 'bg-secondary-500'
                  : ''
              }`}
            >
              {topping.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToppingsBox;
