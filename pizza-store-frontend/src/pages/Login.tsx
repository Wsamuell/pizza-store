import { Link } from 'react-router-dom';
import Logo from '@/assets/Logo.png';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const LogIn = () => {
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div className="mx-auto flex w-5/6 flex-wrap  items-center justify-center md:flex md:h-5/6">
        <div className="z-10 mt-32 md:basis-1/2">
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
            <img alt="Logo" src={Logo} />
            <p className="mt-8 text-sm">
              Internal tooling system for Managers & Chefs
            </p>
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
        <div className=" flex flex-wrap">
          <form
            className="mb-4 flex flex-col"
            // target="_blank"
            onSubmit={(_) => console.log}
          >
            <input
              className="placeholder-grey mt-5 rounded-md border-2 border-secondary-500 px-5 py-3"
              typeof="text"
              placeholder="User Name"
            />
            <input
              className="placeholder-grey mt-5 rounded-md border-2 border-secondary-500 px-5 py-3"
              typeof="text"
              placeholder="Password"
            />
            <button
              type="submit"
              className={
                'hover:text-blacks mt-5 items-center rounded-md bg-secondary-400 px-10 py-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:bg-primary-500 hover:delay-150'
              }
            >
              SUBMIT
            </button>
            <Link
              to="/"
              className="wrap text-primary-500' : ''} text-s mt-5
        flex transition duration-500 hover:text-primary-300"
            >
              <ArrowLeftIcon className="h-6 w-6" />
              Home
            </Link>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default LogIn;
