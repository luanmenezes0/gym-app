<script lang="ts">
  import Header from './Header.svelte';
  import './styles.css';

  import type { LayoutData } from './$types';

  export let data: LayoutData;

  const showLogoutButton = Boolean(data.session);
</script>

<div class="app">
  <Header {showLogoutButton} />

  <main>
    <slot />
  </main>

  <footer>
    <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
  </footer>
</div>
