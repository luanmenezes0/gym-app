<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  export let { exercises } = data;
</script>

<h1>Hello</h1>

{#each exercises as e}
  <p>{e.name}</p>
  <p>{e.equipment}</p>
  <p>{e.instructions}</p>
{/each}
