import {
  CloudArrowUpIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';
import { MinusIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

import { ChangeEvent } from 'react';

type Props = {
  handleDelete: (id: number) => Promise<void>;
  name: string;
  id: number;
  handlePizzaNameChange: (
    event: ChangeEvent<HTMLInputElement>,
    id: number
  ) => void;
  handleUpdate: (id: number, name: string) => Promise<void>;
  children?: React.ReactNode;
};

const ReusableInputWithButton = ({
  handleDelete,
  handleUpdate,
  name,
  id,
  handlePizzaNameChange,
  children,
}: Props) => {
  return (
    <motion.div
      className="m-5 flex justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <div className=" flex w-1/2 transform flex-wrap items-center justify-around  rounded-xl bg-white p-5 shadow-lg transition duration-500 hover:scale-105 hover:shadow-xl">
        <div className="flex flex-row flex-wrap justify-center sm:flex-nowrap md:w-1/2">
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <PaperAirplaneIcon className="h-6 w-6" />
            </div>
            <input
              type="text"
              className="focus:border-secondary-500-500 focus:ring-secondary-500-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900"
              value={name}
              onChange={(event) => handlePizzaNameChange(event, id)}
            />
          </div>
          <button
            className="flex cursor-pointer rounded-lg px-4 py-3 font-semibold text-gray-500"
            onClick={() => handleUpdate(id, name.trim())}
          >
            <CloudArrowUpIcon className="h-6 w-6 text-secondary-500" />
          </button>
        </div>

        <button
          onClick={() => handleDelete(id)}
          className="duration-3000 hover:ring-bg-red-600 m-3 cursor-pointer rounded-lg bg-red-600 px-5 py-2 font-semibold text-white opacity-75 transition hover:opacity-100 hover:shadow-lg hover:ring-4 hover:ring-red-600"
        >
          <MinusIcon className="h-6 w-6" />
        </button>
      </div>

      {children}
    </motion.div>
  );
};

export default ReusableInputWithButton;
