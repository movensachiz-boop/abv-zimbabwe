-- SECURITY FIX: Implement proper admin access control for sales data
-- This addresses the business sales records security issue

-- Create admin roles enum for future authentication system
CREATE TYPE public.admin_role AS ENUM ('owner', 'manager', 'cashier', 'viewer');

-- Create admin_users table for business authentication
CREATE TABLE public.admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  role admin_role NOT NULL DEFAULT 'viewer',
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on admin_users table
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check admin access
CREATE OR REPLACE FUNCTION public.is_admin_user()
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  -- For now, return false until authentication is implemented
  -- This ensures sales data remains secure
  SELECT false;
$$;

-- Create function to check specific admin roles
CREATE OR REPLACE FUNCTION public.has_admin_role(required_role admin_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  -- For now, return false until authentication is implemented
  -- This ensures sales data remains secure
  SELECT false;
$$;

-- Update sales table RLS policy for proper admin access
DROP POLICY IF EXISTS "No public access to sales" ON public.sales;

-- Create comprehensive admin-only access policy
CREATE POLICY "Admin users can view sales data"
ON public.sales
FOR SELECT
USING (public.is_admin_user());

CREATE POLICY "Managers and owners can modify sales"
ON public.sales
FOR ALL
USING (public.has_admin_role('manager'::admin_role) OR public.has_admin_role('owner'::admin_role))
WITH CHECK (public.has_admin_role('manager'::admin_role) OR public.has_admin_role('owner'::admin_role));

-- Apply same security to sale_items
DROP POLICY IF EXISTS "No public access to sale_items" ON public.sale_items;

CREATE POLICY "Admin users can view sale items"
ON public.sale_items
FOR SELECT
USING (public.is_admin_user());

CREATE POLICY "Managers and owners can modify sale items"
ON public.sale_items
FOR ALL
USING (public.has_admin_role('manager'::admin_role) OR public.has_admin_role('owner'::admin_role))
WITH CHECK (public.has_admin_role('manager'::admin_role) OR public.has_admin_role('owner'::admin_role));

-- Create RLS policies for admin_users table
CREATE POLICY "Admins can view admin users"
ON public.admin_users
FOR SELECT
USING (public.has_admin_role('owner'::admin_role) OR public.has_admin_role('manager'::admin_role));

CREATE POLICY "Only owners can modify admin users"
ON public.admin_users
FOR ALL
USING (public.has_admin_role('owner'::admin_role))
WITH CHECK (public.has_admin_role('owner'::admin_role));

-- Add updated_at trigger to admin_users
CREATE TRIGGER update_admin_users_updated_at
BEFORE UPDATE ON public.admin_users
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();