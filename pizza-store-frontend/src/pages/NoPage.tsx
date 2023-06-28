import { useState } from 'react';
import { SelectedPage } from '@/helpers/types';
import ErrorPage from '@/scenes/error';

const NoPage = () => {
  const [_selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  return (
    <div className="app bg-gray-20">
      <ErrorPage setSelectedPage={setSelectedPage} />
    </div>
  );
};

export default NoPage;
