import { createClient } from '@supabase/supabase-js';

import { supabaseUrl, supabaseKey } from '../../config';

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL or key not provided.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export const getAllToppings = async () => {
  try {
    const { data, error } = await supabase.from('toppings').select('*');

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error('Error retrieving toppings:', error);
    return null;
  }
};

export const insertToppings = async (name: string) => {
  try {
    const { data, error } = await supabase.from('toppings').insert([{ name }]);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error('Error inserting toppings:', error);
    return null;
  }
};

export const updateTopping = async (name: string, id: number) => {
  try {
    const { data, error } = await supabase
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
    const { data, error } = await supabase.from('pizza').select('*');

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error('Error retrieving pizza:', error);
    return null;
  }
};
export const insertPizza = async (name: string) => {
  try {
    const { data, error } = await supabase.from('pizza').insert([{ name }]);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error('Error inserting pizza:', error);
    return null;
  }
};

export const deleteAllToppingsOnPizza = async (id: number) => {
  try {
    const { data, error } = await supabase
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

export const deleteTopping = async (id: number) => {
  try {
    const { data: PizzaToppingData, error: PizzaToppingError } = await supabase
      .from('pizza_with_topping')
      .delete()
      .eq('toppings_id', id);
    const { data: toppingData, error: toppingError } = await supabase
      .from('toppings')
      .delete()
      .eq('id', id);

    if (PizzaToppingError || toppingError) {
      throw new Error(toppingError?.message || PizzaToppingError?.message);
    }

    return { toppingData, PizzaToppingData };
  } catch (error) {
    console.error('Error Deleting Topping:', error);
    return null;
  }
};
export const deletePizza = async (id: number) => {
  try {
    const { data: toppingData, error: toppingError } = await supabase
      .from('pizza_with_topping')
      .delete()
      .eq('pizza_id', id);
    const { data: pizzaData, error: pizzaError } = await supabase
      .from('pizza')
      .delete()
      .eq('id', id);

    if (pizzaError || toppingError) {
      throw new Error(pizzaError?.message || toppingError?.message);
    }

    return { pizzaData, toppingData };
  } catch (error) {
    console.error('Error Deleting Pizza:', error);
    return null;
  }
};

export const updatePizza = async (name: string, id: number) => {
  try {
    const { data, error } = await supabase
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

export const getAllToppingsOnPizza = async (id: number) => {
  try {
    const { data, error } = await supabase
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
    const { data, error } = await supabase
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

export const deleteAToppingsOnPizza = async (id: number, toppingId: number) => {
  try {
    const { data, error } = await supabase
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
export const togglePizzaTopping = async (
  pizzaId: number,
  toppingId: number
) => {
  try {
    const { data, error } = await supabase.rpc('toggle_topping', {
      pizza_id: pizzaId,
      toppings_id: toppingId,
    });

    console.log(data);
    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error('Error toggling this topping:', error);
    return null;
  }
};
