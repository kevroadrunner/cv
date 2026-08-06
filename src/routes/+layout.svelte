<script lang="ts">
  import './layout.css';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import meta from '$lib/data/meta';

  const { children } = $props();
</script>

<svelte:head>
  <title>CV | {meta.name}</title>
</svelte:head>

<Sidebar />

<div class="sm:ml-72">
  <main class="p-8">
    <div class="sm:p-12 sm:shadow-2xl">
      {@render children()}
    </div>
  </main>
  <Footer />
</div>
