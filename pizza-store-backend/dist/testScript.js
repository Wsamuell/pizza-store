"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postgrest_js_1 = require("@supabase/postgrest-js");
const REST_URL = 'http://localhost:3000';
const postgrest = new postgrest_js_1.PostgrestClient(REST_URL);
const main = async () => {
    const { data, error } = await postgrest
        .from('users')
        .select()
        .eq('first_name', 'Jeremy');
    console.log(data);
    console.log('----------------------------');
    console.log(error);
};
main();
//# sourceMappingURL=testScript.js.map