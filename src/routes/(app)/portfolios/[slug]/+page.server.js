import { supabase } from '$lib/utils/supabaseClient';

export async function load({ params }) {
	const { slug } = params;
	const { data: portfolio, error } = await supabase
		.from('portfolios')
		.select('*')
		.eq('slug', slug)
		.single();

	if (error) {
		console.error('Error fetching portfolio:', error);
	}

	return { portfolio };
}
