import HText from '@/helpers/HText';
import { BenefitType, SelectedPage } from '@/helpers/types';
import { motion } from 'framer-motion';
import Benefit from './Benefits';
import { BanknotesIcon } from '@heroicons/react/24/solid';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';
import {
  ArrowTrendingUpIcon,
  HeartIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import ActionButton from '@/helpers/ActionButton';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const benefits: Array<BenefitType> = [
  {
    icon: <HeartIcon className="h-6 w-6" />,
    title: 'Health insurance and wellness programs',
    description:
      'Health insurance and wellness programs provide comprehensive coverage and support for employees physical and mental well-being, ensuring access to healthcare services and promoting a healthy lifestyle',
  },
  {
    icon: <ShoppingBagIcon className="h-6 w-6" />,
    title: 'Unlimited PTO',
    description:
      'Unlimited PTO (Paid Time Off) allows employees to take time off as needed without a predetermined limit, providing flexibility and autonomy in managing their work-life balance',
  },
  {
    icon: <ArrowTrendingUpIcon className="h-6 w-6" />,
    title: 'Growth Opportunity',
    description:
      'Growth opportunities offer employees the chance to expand their skills, knowledge, and responsibilities, paving the way for professional development, career advancement, and personal fulfillment within the organization',
  },
  {
    icon: <BanknotesIcon className="h-6 w-6" />,
    title: 'Competitive wages',
    description:
      'Competitive wages ensure that employees are offered salaries that are on par with or higher than industry standards, recognizing and rewarding their skills, experience, and contributions.',
  },
];

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST PIZZA.</HText>
          <p className="my-5 text-sm">
            At Crusty Sam's, we go above and beyond to create a remarkable
            experience not only for our customers but also for our dedicated
            team members. We believe in fostering a supportive and rewarding
            work environment where every employee is valued and appreciated
          </p>
        </motion.div>
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            className="mx-auto w-1/2"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <HText>
                LOVE WHAT YOU DO -
                <span className="text-primary-500"> CRUSTY</span>
              </HText>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Every day is a new opportunity to embrace the possibilities that
                life presents. Dare to dream big, believe in yourself, and take
                courageous steps towards your goals. Remember, within you lies
                the strength, resilience, and creativity to overcome challenges
                and achieve greatness. Trust in your journey, for even amidst
                uncertainties, you have the power to create a life filled with
                purpose, joy, and boundless fulfillment. Keep pushing forward,
                for the world eagerly awaits the unique brilliance that only you
                can bring
              </p>
              <p className="mb-5">
                Embrace your journey, unleash your potential, and make every
                moment count.
              </p>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton
                  setSelectedPage={setSelectedPage}
                  navAction={SelectedPage.ContactUs}
                >
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
