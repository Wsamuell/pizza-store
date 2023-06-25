import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types';
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
// const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="bg-gray-20 gap-16 py-10 md:h-full md:pb-0">
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        <div>
          <div>
            <img alt="home-page-text" src={HomePageText} />
          </div>
          <p>
            Indulge in the Irresistible Delights of Crusty Sam's Pizzeria: Where
            Every Slice is a Savory Symphony of Handcrafted Crust and
            Mouthwatering Toppings, Bringing You the Ultimate Pizza Experience!
          </p>
        </div>
        <div>
          <ActionButton setSelectedPage={setSelectedPage}>
            Join Now!
          </ActionButton>
          <AnchorLink
            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
          >
            <p>Learn About Us!</p>
          </AnchorLink>
          <div>
            <img alt="home-page-graphic" src={HomePageGraphic} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
