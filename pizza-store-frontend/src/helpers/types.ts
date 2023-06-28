export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  LogIn = 'login',
  ContactUs = 'contactus',
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
export interface UserData {
  user_name: string;
  password: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
