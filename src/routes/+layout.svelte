<script lang="ts">
  import './layout.css';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  const { children } = $props();
</script>

<Sidebar />

<div class="sm:ml-72">
  <main class="p-8">
    <div class="sm:p-12 sm:shadow-2xl">
      {@render children()}
    </div>
  </main>
  <Footer />
</div>
