// src/routes/+page.js
import { supabase } from '$lib/utils/supabaseClient';

export async function load() {
  const { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
  }

  return { posts };
}
