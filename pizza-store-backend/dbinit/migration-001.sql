CREATE USER anon;
    CREATE ROLE authenticator nologin;
    GRANT authenticator TO anon;
    GRANT USAGE ON SCHEMA public TO anon;
    ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO anon;
    GRANT SELECT ON ALL SEQUENCES IN SCHEMA public TO anon;
    GRANT SELECT ON ALL TABLES IN SCHEMA public TO anon;
		GRANT anon to postgres;


-- create toppings table
CREATE TABLE IF NOT EXISTS public.toppings (
	id SERIAL PRIMARY KEY,
	name text,
	created_at TIMESTAMP DEFAULT current_timestamp
);

-- create pizza table
CREATE TABLE IF NOT EXISTS public.pizza (
	id SERIAL PRIMARY KEY,
	name text,
	created_at TIMESTAMP DEFAULT current_timestamp
);

-- create pizza table
CREATE TABLE IF NOT EXISTS public.pizza_with_topping (
	id SERIAL,
	pizza_id INT REFERENCES public.pizza(id),
	toppings_id INT REFERENCES public.toppings(id),
	created_at TIMESTAMP DEFAULT current_timestamp
);
CREATE TABLE IF NOT EXISTS public.users (
	id SERIAL PRIMARY KEY,
	user_name text,
	password text,
	created_at TIMESTAMP DEFAULT current_timestamp
);


GRANT SELECT, INSERT, UPDATE, DELETE ON public.users TO authenticator;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.toppings TO authenticator;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.pizza TO authenticator;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.pizza_with_topping TO authenticator;

INSERT INTO public.toppings(name)
VALUES ('Ham'),
('Beef'),
('Salami'),
('Pepperoni'),
('Italian Sausage'),
('Premium Chicken'),
('Bacon'),
('Philly Steak'),
('Hot Buffalo Sauce'),
('Jalapeno Peppers'),
('Onions'),
('Banana Peppers'),
('Diced Tomatoes'),
('Black Olives'),
('Mushrooms'),
('Pineapple'),
('Shredded Provolone Cheese'),
('Cheddar Cheese Blend'),
('Mozzarella Cheese'),
('Green Peppers'),
('Spinach'),
('Feta Cheese'),
('Shredded Parmesan Asiago');

INSERT INTO public.pizza (name)
		VALUES ('Hawaiian'), ('Cheese'), ('Pepperoni');

INSERT INTO public.pizza_with_topping (pizza_id, toppings_id)
		VALUES(2, 19), (3, 4), (3, 19), (1, 19), (1, 1), (1, 16);

INSERT into public.users(user_name, password)
VALUES('Chef', 'StrongMind'),('Owner', 'StrongMind');

CREATE OR REPLACE FUNCTION public.get_pizza_toppings (pizza_name text)
	RETURNS TABLE (
	 topping_name text)
	LANGUAGE SQL
	AS $$
	SELECT
		t.name AS topping_name
	FROM
		public.pizza p
		JOIN public.pizza_with_topping pwt ON pwt.pizza_id = p.id
		JOIN public.toppings t ON t.id = pwt.toppings_id
	WHERE
		p.name = pizza_name
$$; 

GRANT EXECUTE ON FUNCTION public.get_pizza_toppings(text) TO authenticator;

CREATE OR REPLACE FUNCTION public.toggle_topping (pizza_id int, toppings_id int)
	RETURNS INTEGER
	LANGUAGE plpgsql
	AS $$
DECLARE
	row_exists INTEGER;
BEGIN
	SELECT
		1 INTO row_exists
	FROM
		public.pizza_with_topping pt
	WHERE
		pt.pizza_id = toggle_topping.pizza_id
		AND pt.toppings_id = toggle_topping.toppings_id;
	IF(row_exists > 0) THEN
		DELETE FROM public.pizza_with_topping pt
		WHERE pt.pizza_id = toggle_topping.pizza_id
			AND pt.toppings_id = toggle_topping.toppings_id;
 RETURN 0;
	ELSE
		INSERT INTO public.pizza_with_topping (pizza_id, toppings_id)
			VALUES(toggle_topping.pizza_id, toggle_topping.toppings_id);
		RETURN 1;
	END IF;
END;
$$;

GRANT EXECUTE ON FUNCTION public.toggle_topping(int, int) TO authenticator;
GRANT USAGE, SELECT, UPDATE ON SEQUENCE pizza_with_topping_id_seq TO authenticator;
GRANT USAGE, SELECT ON SEQUENCE pizza_id_seq TO authenticator;
GRANT USAGE, SELECT ON SEQUENCE toppings_id_seq TO authenticator;