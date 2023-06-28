import { PostgrestClient } from '@supabase/postgrest-js';

const REST_URL = 'http://localhost:3000';

export const postgrest = new PostgrestClient(REST_URL);

// const main = async () => {
//   const { data, error } = await postgrest.from('toppings').select();
//   console.log(data);
//   console.log('----------------------------');
//   console.log(error);
// };
// main();
