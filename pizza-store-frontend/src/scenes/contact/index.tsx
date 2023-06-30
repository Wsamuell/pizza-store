import { useForm } from 'react-hook-form';
import { SelectedPage } from '@/helpers/types';
import { motion } from 'framer-motion';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png';
import HText from '@/helpers/HText';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          className="md:3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500 ">JOIN</span> THE CRUSTY TEAM
          </HText>
          <p className="my-5">
            We're here for you! Feel free to reach out anytime for assistance,
            questions, or any support you may need. We're just a message away!
          </p>
        </motion.div>
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              className="mb-4 rounded-lg bg-white p-3 shadow"
              target="_blank"
              onSubmit={() => onSubmit}
              method="POST"
              action="https://formsubmit.co/ebcb4d5f8ee8dfe6d29cc3d87eb33e82"
            >
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-500 md:text-2xl">
                Lets get you connected!
              </h1>
              <div className="mt-4">
                <label className="mb-2 block text-sm font-medium text-gray-500">
                  Name
                </label>
                <input
                  className="focus:ring-primary-600 focus:border-primary-600  block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900"
                  autoComplete="off"
                  typeof="text"
                  placeholder="Samuel L. Jackson"
                  {...register('name', {
                    required: true,
                    maxLength: 30,
                  })}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-rose-500">
                    {errors.name.type === 'required' &&
                      'Please enter First Name'}
                    {errors.name.type === 'maxLength' &&
                      'Max Character limit: 30'}
                  </p>
                )}
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm font-medium text-gray-500">
                  Email
                </label>
                <input
                  className="focus:ring-primary-600 focus:border-primary-600  block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900"
                  autoComplete="off"
                  typeof="text"
                  placeholder="Email@gmail.com"
                  {...register('email', {
                    required: true,
                    maxLength: 100,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-rose-500">
                  {errors.email.type === 'required' && 'Please enter email'}
                  {errors.email.type === 'pattern' && 'Invalid email provided'}
                </p>
              )}
              <div className="mt-4">
                <label className="mb-2 block text-sm font-medium text-gray-500">
                  Email
                </label>
                <textarea
                  className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900"
                  placeholder="Message"
                  rows={4}
                  cols={50}
                  {...register('message', {
                    required: true,
                    maxLength: 2000,
                  })}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-rose-500">
                    {errors.message.type === 'required' &&
                      'Please enter Message'}
                    {errors.message.type === 'maxLength' &&
                      'Max Character limit: 30'}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="mt-5 w-full rounded-md bg-secondary-400 px-4  py-2"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img
                className="w-full"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
