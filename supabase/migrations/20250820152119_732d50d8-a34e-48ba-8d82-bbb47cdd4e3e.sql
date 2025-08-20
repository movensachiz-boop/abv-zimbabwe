-- Fix security issues by enabling RLS on existing tables and updating functions

-- Enable RLS on existing tables that don't have it
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sales ENABLE ROW LEVEL SECURITY;  
ALTER TABLE public.sale_items ENABLE ROW LEVEL SECURITY;

-- Create policies for products (public read access for website)
CREATE POLICY "Anyone can view products" 
ON public.products 
FOR SELECT 
USING (true);

-- Create policies for sales (restrict access - these seem to be business data)
CREATE POLICY "No public access to sales" 
ON public.sales 
FOR SELECT 
USING (false);

-- Create policies for sale_items (restrict access - these seem to be business data)
CREATE POLICY "No public access to sale_items" 
ON public.sale_items 
FOR SELECT 
USING (false);

-- Fix function search path issues by recreating with proper search_path
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql 
SECURITY DEFINER 
SET search_path = public;