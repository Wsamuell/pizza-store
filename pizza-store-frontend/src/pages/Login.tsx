import Logo from '@/assets/Logo.png';
import { motion } from 'framer-motion';

const LogIn = () => {
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div className="mx-auto w-5/6 items-center justify-between md:flex md:h-5/6">
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
            <img alt="Logo" src={Logo} />
            <p className="mt-8 text-sm">
              Indulge in the Irresistible Delights of Crusty Sam's Pizzeria:
              Where Every Slice is a Savory Symphony of Handcrafted Crust and
              Mouthwatering Toppings, Bringing You the Ultimate Pizza
              Experience!
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
        <div className=" flex justify-center">
          <form
            className="mb-4 flex flex-col"
            target="_blank"
            onSubmit={(_) => console.log}
            method="POST"
            action="https://formsubmit.co/ebcb4d5f8ee8dfe6d29cc3d87eb33e82"
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
              className="mt-5 w-full rounded-md bg-secondary-400 px-4  py-2"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default LogIn;
