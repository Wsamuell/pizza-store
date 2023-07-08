import Logo from '@/assets/Logo.png';
import LogInImg from '@/assets/LogInImg.png';
import { motion } from 'framer-motion';
import Footer from '@/scenes/footer/footer';
import ContactUs from '@/scenes/contact';
import { useEffect, useState } from 'react';
import {
  LogInStatus,
  SelectedPage,
  UserData,
  UserPrivateRoute,
  UserType,
} from '@/helpers/types';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/helpers/supabaseClient';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  userAuthenticated: LogInStatus;
  setUserAuthenticated: (value: LogInStatus) => void;
};
const LogIn = ({ userAuthenticated, setUserAuthenticated }: Props) => {
  const getUserAuthenticated = localStorage.getItem('userAuthenticated');
  let userType = localStorage.getItem('userType');
  const navigate = useNavigate();

  const route =
    userType === UserType.Chef ? UserPrivateRoute.Chef : UserPrivateRoute.Owner;

  useEffect(() => {
    if (userAuthenticated === LogInStatus.Success && userType) {
      navigate(route);
    }
  }, [userAuthenticated, userType, navigate, route]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [_selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [userNameInput, setUserNameInput] = useState<string>('');
  const [passWordInput, setPassWordInput] = useState<string>('');
  const isDisabled = userNameInput === '' || passWordInput === '';
  const disabledStyle = isDisabled ? 'opacity-25' : 'opacity-100';
  if (getUserAuthenticated === LogInStatus.Success) {
    setUserAuthenticated(LogInStatus.Success);
    navigate(route);
  }
  const login = async () => {
    const { data } = await supabase
      .from('users')
      .select('user_name, password')
      .eq(`user_name`, `${userNameInput}`);

    const user = data?.[0] as UserData | null;

    if (user?.user_name === userNameInput && user?.password === passWordInput) {
      setUserAuthenticated(LogInStatus.Success);
      userType = userNameInput;
      localStorage.setItem('userAuthenticated', LogInStatus.Success);
      localStorage.setItem('userType', user?.user_name);
      const route =
        userType === UserType.Chef
          ? UserPrivateRoute.Chef
          : UserPrivateRoute.Owner;

      navigate(route);
    } else {
      setUserAuthenticated(LogInStatus.Failed);
    }
  };
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div className=" md: mb-10 flex flex-col items-center justify-center lg:flex-row">
        <motion.div
          className="mt-8 flex w-1/2 items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img alt="LogoImg" src={LogInImg} />
        </motion.div>
        <div className=" flex flex-wrap items-center justify-center px-6 py-8 lg:py-0 md:h-screen md:w-full">
          <motion.div
            className=" items-center justify-center md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="min-w-1/2 w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0">
              <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
                <img
                  alt="Logo"
                  src={Logo}
                  className="flex items-center justify-center"
                />
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-500 md:text-2xl">
                  Sign in to your account
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  action="#"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-500">
                      User Name
                    </label>
                    <input
                      type="text"
                      name="userNameInput"
                      value={userNameInput}
                      className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900"
                      placeholder="Chef | Owner"
                      onChange={(e) => setUserNameInput(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-500">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      value={passWordInput}
                      className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900  sm:text-sm"
                      onChange={(e) => setPassWordInput(e.target.value)}
                    />
                    {userAuthenticated === LogInStatus.Failed && (
                      <p className="mt-1 text-xs text-rose-500">
                        Invalid User Credentials
                      </p>
                    )}
                  </div>
                  <div className="flex items-center">
                    <AnchorLink
                      className="text-sm font-medium text-gray-500  hover:underline"
                      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                      href={`#${SelectedPage.ContactUs}`}
                    >
                      <p className=""> Forgot password?</p>
                    </AnchorLink>
                  </div>
                  <button
                    type="submit"
                    className={`hover:bg-primary-700 w-full rounded-lg bg-secondary-500 px-5 py-2.5 text-center text-sm font-medium text-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-300 ${disabledStyle}`}
                    disabled={isDisabled}
                    onClick={() => login()}
                  >
                    Sign In
                  </button>

                  <AnchorLink
                    className="text-primary-600 text-sm font-medium text-gray-500 hover:underline"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                  >
                    <p className="m-1"> Need an account? Request Access</p>
                  </AnchorLink>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </section>
  );
};

export default LogIn;
