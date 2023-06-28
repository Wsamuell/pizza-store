import { PostgrestClient } from '@supabase/postgrest-js';

const REST_URL = 'http://localhost:3000';

export const postgrest = new PostgrestClient(REST_URL);

export const getAllPizza = async () => {
  try {
    // Make a request to the toppings table
    const { data, error } = await postgrest.from('pizza').select('*');

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error('Error retrieving pizza:', error);
    return null;
  }
};

export const getAllToppings = async () => {
  try {
    // Make a request to the toppings table
    const { data, error } = await postgrest.from('toppings').select('*');

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error('Error retrieving toppings:', error);
    return null;
  }
};

export const insertPizza = async (name: string) => {
  try {
    const { data, error } = await postgrest.from('pizzas').insert([{ name }]);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error('Error inserting pizza:', error);
    return null;
  }
};
export const insertToppings = async (name: string, id: number) => {
  try {
    const { data, error } = await postgrest
      .from('toppings')
      .insert([{ name, id }]);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error('Error inserting toppings:', error);
    return null;
  }
};
