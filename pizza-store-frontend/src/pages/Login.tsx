import { Link } from 'react-router-dom';
import Logo from '@/assets/Logo.png';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import LinkButton from '@/shared/LinkButton';

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
        <div className=" flex flex-col justify-between">
          <LinkButton link="" className="mt-5">
            Manage Toppings
          </LinkButton>
          <LinkButton link="" className="mt-5">
            Manage Pizzas
          </LinkButton>

          <Link
            to="/"
            className="wrap text-primary-500' : ''} text-s mt-5
        flex transition duration-500 hover:text-primary-300"
          >
            <ArrowLeftIcon className="h-6 w-6" />
            Home
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default LogIn;
