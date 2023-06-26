import Logo from '@/assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Indulge in the unrivaled flavors of our mouthwatering pizzas and
            discover why we stand tall as the unrivaled champions of culinary
            delight in town; with our perfect blend of meticulously crafted
            crust, premium quality ingredients, and a dedication to culinary
            excellence, we invite you to savor a slice of pizza perfection that
            will leave you in no doubt that we are indeed the crowned kings of
            the pizza realm in this vibrant town.
          </p>
          <p>© Crusty Sam's All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">StrongMind Interview process</p>
          <p className="my-5">Github Wsamuell maybe Lorem</p>
          <p>Running out of things to type</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            We welcome any questions you may have! Don't hesitate to reach out
            to us for assistance or clarification. Our team is here to provide
            you with prompt and helpful support.
          </p>
          <p>(555)555-0001</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
