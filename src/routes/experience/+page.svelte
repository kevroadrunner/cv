<script lang="ts">
  import meta from '$lib/data/meta';
  import Headline from '$lib/components/Headline.svelte';
  import experience from '$lib/data/experience';
  import JobCard from '$lib/components/JobCard.svelte';
</script>

<svelte:head>
  <title>Experience | CV | {meta.name}</title>
</svelte:head>

<section>
  <Headline variant="h1" title="Experience" />
  <div class="my-8 space-y-4">
    {#each experience as job (job.period)}
      <JobCard {job} />
    {/each}
  </div>
</section>
