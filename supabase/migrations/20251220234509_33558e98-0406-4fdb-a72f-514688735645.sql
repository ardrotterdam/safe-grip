-- Create contact submissions table for SafeGrip B2B contact form
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  naam TEXT NOT NULL,
  email TEXT NOT NULL,
  telefoon TEXT,
  bedrijfsnaam TEXT,
  onderwerp TEXT NOT NULL,
  bericht TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public contact form)
CREATE POLICY "Anyone can submit contact form" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

-- Only allow reading via admin functions (we'll handle this via edge function later)
-- For now, allow public read for CSV export functionality
CREATE POLICY "Allow public read for admin purposes" 
ON public.contact_submissions 
FOR SELECT 
USING (true);