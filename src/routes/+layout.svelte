<script lang="ts">
	import '@fontsource/chango';
	import { browser } from '$app/environment';
	import { QueryClientProvider, QueryClient } from '@tanstack/svelte-query';
	import { Nav } from '~/components';
	import './styles.css';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
</script>

<QueryClientProvider client={queryClient}>
	<Nav />
	<slot />
</QueryClientProvider>
