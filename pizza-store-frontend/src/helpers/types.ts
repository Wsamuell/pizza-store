export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  LogIn = 'login',
  ContactUs = 'contactus',
}

export enum LogInStatus {
  Success = 'success',
  Pending = 'pending',
  Failed = 'failed',
}
export enum toLogInStatus {
  'success' = LogInStatus.Success,
  'pending' = LogInStatus.Pending,
  'failed' = LogInStatus.Failed,
}

export enum UserType {
  Chef = 'Chef',
  Owner = 'Owner',
}

export enum UserPrivateRoute {
  Chef = '/pizza',
  Owner = '/toppings',
}
export interface Topping {
  id: number;
  name: string;
}

export interface ToppingOnPizza {
  id: number;
  name: string;
  pizzaId: number;
}
export interface Pizza {
  id: number;
  name: string;
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
