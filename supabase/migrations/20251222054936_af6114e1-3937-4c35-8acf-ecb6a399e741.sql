-- Drop the ALL policy and replace with specific policies for user_roles
DROP POLICY IF EXISTS "Admins can manage all roles" ON public.user_roles;

-- Create specific policies for INSERT, UPDATE, DELETE on user_roles
CREATE POLICY "Admins can insert roles"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update roles"
ON public.user_roles
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete roles"
ON public.user_roles
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Block UPDATE on contact_submissions (not allowed for anyone)
CREATE POLICY "No one can update contact submissions"
ON public.contact_submissions
FOR UPDATE
TO authenticated
USING (false);

-- Block DELETE on contact_submissions (only admins can delete)
CREATE POLICY "Only admins can delete contact submissions"
ON public.contact_submissions
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));