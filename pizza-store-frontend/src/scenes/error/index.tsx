import { SelectedPage } from '@/helpers/types';
import ErrorImage from '@/assets/Error.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ErrorPage = ({ setSelectedPage }: Props) => {
  return (
    <section id="error" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h1 className="mt-8 text-4xl">CRUST... NOT FOUND</h1>
            <Link
              to="/"
              className="wrap text-primary-500' : ''} text-s mt-5
        flex transition duration-500 hover:text-primary-300"
            >
              <ArrowLeftIcon className="h-6 w-6" />
              Home
            </Link>
          </motion.div>
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          ></motion.div>
        </div>
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={ErrorImage} />
        </div>
      </motion.div>
    </section>
  );
};

export default ErrorPage;
