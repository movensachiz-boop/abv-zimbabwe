-- Fix remaining security warnings

-- Fix Function Search Path issue for update_product_stock function
CREATE OR REPLACE FUNCTION public.update_product_stock(product_id uuid, quantity_sold integer)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE products 
  SET stock = stock - quantity_sold,
      updated_at = NOW()
  WHERE id = product_id;
END;
$$;