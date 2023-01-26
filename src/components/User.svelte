<script lang="ts">
	import type { Session } from '@auth/core/types';
	import { signOut } from '@auth/sveltekit/client';

	export let user: NonNullable<Session['user']>;

	const logout = () => {
		if (!window.confirm('Do you want to logout?')) {
			return;
		}

		signOut();
	};
</script>

<button class="avatar p-0" on:click={logout}>
	<div class="w-12 rounded-full">
		<img src={user.image} alt={user.name} />
	</div>
</button>
