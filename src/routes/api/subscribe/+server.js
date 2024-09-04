import { json } from '@sveltejs/kit';
import { supabase } from '$lib/utils/supabaseClient';

export async function POST({ request }) {
  const { email } = await request.json();

  // Basic email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return json({ error: 'Invalid email address' }, { status: 400 });
  }

  // Check if the email already exists
  const { data: existingEmail, error: existingEmailError } = await supabase
    .from('subscribers')
    .select('email')
    .eq('email', email)
    .single();

  if (existingEmail) {
    return json({ error: 'This email is already subscribed' }, { status: 400 });
  }

  // Handle other possible errors
  if (existingEmailError && existingEmailError.code !== 'PGRST116') {
    return json({ error: existingEmailError.message }, { status: 500 });
  }

  // Insert the new email
  const { data, error } = await supabase
    .from('subscribers')
    .insert([{ email }]);

  if (error) {
    return json({ error: error.message }, { status: 500 });
  }

  return json({ message: 'Thank you for subscribing!' });
}
