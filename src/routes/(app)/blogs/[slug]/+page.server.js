// src/routes/blog/[slug]/+page.js
import { supabase } from '$lib/utils/supabaseClient';

export async function load({ params }) {
  const { slug } = params;
  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching post:', error);
  }
  
  return { post };
}
