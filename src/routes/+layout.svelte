<script lang="ts">
  import './layout.css';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import meta from '$lib/data/meta';

  const { children } = $props();
</script>

<svelte:head>
  <title>{meta.name}</title>
</svelte:head>

<Sidebar />

<main class="p-8 sm:ml-72">
  <div class="sm:p-12 sm:shadow-2xl">
    {@render children()}
  </div>
</main>
