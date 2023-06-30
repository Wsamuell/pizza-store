import { PostgrestClient } from '@supabase/postgrest-js';

const REST_URL = 'http://localhost:3000';

export const postgrest = new PostgrestClient(REST_URL);

// Toppings Logic
export const getAllToppings = async () => {
  try {
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

export const deleteTopping = async (id: number) => {
  try {
    const { data, error } = await postgrest
      .from('toppings')
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error('Error Deleting toppings:', error);
    return null;
  }
};

export const updateTopping = async (name: string, id: number) => {
  try {
    const { data, error } = await postgrest
      .from('toppings')
      .update({ name })
      .eq('id', id);

    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    console.error('Error Deleting toppings:', error);
    return null;
  }
};

// Pizza Logic

export const getAllPizza = async () => {
  try {
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
export const insertPizza = async (name: string, id: number) => {
  try {
    const { data, error } = await postgrest
      .from('pizza')
      .insert([{ name, id }]);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error('Error inserting pizza:', error);
    return null;
  }
};

export const deletePizza = async (id: number) => {
  try {
    const { data, error } = await postgrest.from('pizza').delete().eq('id', id);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error('Error Deleting pizza:', error);
    return null;
  }
};

export const updatePizza = async (name: string, id: number) => {
  try {
    const { data, error } = await postgrest
      .from('pizza')
      .update({ name })
      .eq('id', id);

    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    console.error('Error Deleting pizza:', error);
    return null;
  }
};

// Toppings To Pizza: BKMRK: needs work

export const getAllToppingsOnPizza = async (id: number) => {
  try {
    const { data, error } = await postgrest
      .from('pizza_with_topping')
      .select('toppings(id, name)')
      .eq('pizza_id', id);

    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    console.error('Error retrieving toppings:', error);
    return null;
  }
};
// this needs to take pizza_id and topping_id
export const insertToppingOnPizza = async (name: string) => {
  try {
    const { data, error } = await postgrest
      .from('pizza_with_topping')
      .insert([{ name }]);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error('Error inserting topping:', error);
    return null;
  }
};

export const deleteAllToppingsOnPizza = async (id: number) => {
  try {
    const { data, error } = await postgrest
      .from('pizza_with_topping')
      .delete()
      .eq('pizza_id', id);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error('Error Deleting all toppings:', error);
    return null;
  }
};
export const deleteAToppingsOnPizza = async (id: number, toppingId: number) => {
  try {
    const { data, error } = await postgrest
      .from('pizza_with_topping')
      .delete()
      .eq('pizza_id', id)
      .eq('topping_id', toppingId);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error('Error Deleting this topping:', error);
    return null;
  }
};
