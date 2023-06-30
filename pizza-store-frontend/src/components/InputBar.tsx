import { PaperAirplaneIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import React from 'react';

type Props = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  placeholder: string;
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
};

const InputBar = ({
  handleSubmit,
  placeholder,
  handleNameChange,
  inputValue,
}: Props) => {
  return (
    <div className="flex justify-center">
      <form
        className="flex w-full items-center justify-center p-3 md:w-1/2 "
        onSubmit={handleSubmit}
      >
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <PaperAirplaneIcon className="h-6 w-6" />
          </div>
          <input
            type="text"
            className="focus:border-secondary-500-500 focus:ring-secondary-500-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900"
            placeholder={`${placeholder}`}
            onChange={handleNameChange}
            value={inputValue}
          />
        </div>
        <button
          type="submit"
          className={` ${
            inputValue === '' ? 'opacity-25' : ''
          } ml-2 inline-flex items-center rounded-lg border border-secondary-500 bg-secondary-500 px-3 py-2.5
            text-sm font-medium text-white focus:border-secondary-500 focus:outline-none focus:ring-4
          focus:ring-secondary-500`}
          disabled={inputValue === ''}
        >
          <PlusSmallIcon className="h-6 w-6" />
        </button>
      </form>
    </div>
  );
};

export default InputBar;
