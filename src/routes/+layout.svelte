<script lang="ts">
  import Header from './Header.svelte';
  import './styles.css';

  import type { LayoutData } from './$types';

  export let data: LayoutData;

  const isLoggedIn = Boolean(data.session);
</script>

<div class="app">
  {#if isLoggedIn}
    <Header {isLoggedIn} />
  {/if}

  <main>
    <slot />
  </main>

  {#if isLoggedIn}
    <footer>
      <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
    </footer>
  {/if}
</div>

<style>
  .app {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100svh;
  }
</style>
