import { supabase } from '$lib/utils/supabaseClient';

export async function load() {
	const { data: portfolios, error } = await supabase
		.from('portfolios')
		.select('*')
		.order('created_at', { ascending: false });

	if (error) {
		console.error('Error fetching portfolios:', error);
	}

	return { portfolios };
}
