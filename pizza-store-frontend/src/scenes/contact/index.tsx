import { useForm } from 'react-hook-form';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
// import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png';
import HText from '@/shared/HText';

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
              className='mb-4" rounded bg-white px-8 pb-8 pt-6 shadow-md'
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/ebcb4d5f8ee8dfe6d29cc3d87eb33e82"
            >
              <div className="flex w-full flex-wrap justify-between">
                <div className="flex-col">
                  <input
                    className="placeholder-grey mt-5 rounded-md border-2 border-secondary-500 px-5 py-3"
                    typeof="text"
                    placeholder="First Name"
                    {...register('firstName', {
                      required: true,
                      maxLength: 30,
                    })}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-xs text-rose-500">
                      {errors.firstName.type === 'required' &&
                        'Please enter First Name'}
                      {errors.firstName.type === 'maxLength' &&
                        'Max Character limit: 30'}
                    </p>
                  )}
                </div>
                <div className="flex-col">
                  <input
                    className="placeholder-grey mt-5 rounded-md border-2 border-secondary-500 px-5 py-3"
                    typeof="text"
                    placeholder="Last Name"
                    {...register('lastName', {
                      required: true,
                      maxLength: 30,
                    })}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-xs text-rose-500">
                      {errors.lastName.type === 'required' &&
                        'Please enter Last Name'}
                      {errors.lastName.type === 'maxLength' &&
                        'Max Character limit: 30'}
                    </p>
                  )}
                </div>
              </div>
              <input
                className="placeholder-grey mt-5 w-full rounded-md border-2 border-secondary-500 px-5 py-3"
                typeof="text"
                placeholder="Email"
                {...register('email', {
                  required: true,
                  maxLength: 100,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-rose-500">
                  {errors.email.type === 'required' && 'Please enter email'}
                  {errors.email.type === 'pattern' && 'Invalid email provided'}
                </p>
              )}
              <input
                className="placeholder-grey mt-5 w-full rounded-md border-2 border-secondary-500 px-5 py-3"
                typeof="text"
                placeholder="Message"
                {...register('message', {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-rose-500">
                  {errors.message.type === 'required' && 'Please enter Message'}
                  {errors.message.type === 'maxLength' &&
                    'Max Character limit: 30'}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 w-full rounded-md bg-secondary-400 px-4  py-2"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
