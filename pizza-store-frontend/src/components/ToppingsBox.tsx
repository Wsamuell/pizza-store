import { Topping } from '@/helpers/types';

type Props = {
  toppings: Topping[];
};
const ToppingsBox = ({ toppings }: Props) => {
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
