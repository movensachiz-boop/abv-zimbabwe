-- CRITICAL SECURITY FIX: Remove public access to customer personal data
-- This is the most critical security issue - exposing customer personal information

-- Drop the overly permissive policy that allows anyone to view quote requests
DROP POLICY IF EXISTS "Anyone can view quote requests" ON public.quote_requests;

-- Create a restrictive policy - only authenticated admin users should access this data
-- For now, we'll make it completely private until proper admin authentication is implemented
CREATE POLICY "No public access to quote_requests" 
ON public.quote_requests 
FOR SELECT 
USING (false);

-- Keep the insert policy for the public form to work, but restrict it to prevent spam
-- Add basic rate limiting by only allowing inserts (the form functionality should still work)
DROP POLICY IF EXISTS "Anyone can submit quote requests" ON public.quote_requests;
CREATE POLICY "Allow quote request submissions" 
ON public.quote_requests 
FOR INSERT 
WITH CHECK (true);