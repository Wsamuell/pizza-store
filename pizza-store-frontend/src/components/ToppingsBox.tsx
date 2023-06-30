import { getAllToppingsOnPizza } from '@/helpers/supabaseClient';
import { Topping } from '@/helpers/types';
import { useEffect, useState } from 'react';

type Props = {
  toppings: Topping[];
  pizzaId: number;
};
const ToppingsBox = ({ toppings, pizzaId }: Props) => {
  // useEffect(() => {
  //   const [pizzaToppings, setPizzaToppings] = useState<Topping[]>([]);
  //   const fetchToppingOnPizza = async () => {
  //     try {
  //       const retrievedToppings = await getAllToppingsOnPizza(pizzaId);
  //       if (retrievedToppings) {
  //         console.log('Retrieved Pizza:', retrievedToppings);
  //         // setPizzaToppings(retrievedToppings);
  //         console.log(pizzaToppings);
  //       } else {
  //         console.log('Failed to retrieve Pizza.');
  //       }
  //     } catch (error) {
  //       console.error('Error retrieving Pizza:', error);
  //     }
  //   };
  // }, [pizzaId]);
  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center">
        {toppings.map((topping) => (
          <div
            key={topping.id}
            className="m-1 rounded-xl p-2 text-xs shadow-lg hover:scale-105 hover:bg-secondary-500 hover:shadow-xl"
          >
            {topping.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToppingsBox;
