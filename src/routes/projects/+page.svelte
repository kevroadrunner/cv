<script lang="ts">
  import title from '$lib/title';
  import Headline from '$lib/components/Headline.svelte';
  import projects from '$lib/data/projects';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import InfoCircle from '@iconify-svelte/boxicons/info-circle';
  import * as Alert from '$lib/components/ui/alert';
</script>

<svelte:head>
  <title>{title('Projects')}</title>
</svelte:head>

<section>
  <Headline variant="h1" title="Projects" />
  <div class="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
    {#each projects as project (project.name)}
      <ProjectCard {project} />
    {/each}
  </div>
  <Alert.Root>
    <InfoCircle />
    <Alert.Description>
      Most of the software I have worked on was developed as part of my professional career. These
      projects are proprietary, covered by confidentiality agreements, and therefore cannot be
      shared publicly.
      <br />
      The projects shown here are personal or public examples and represent only a small part of my overall
      experience. If you'd like to learn more about my professional work, I'd be happy to discuss it in
      a personal conversation.
    </Alert.Description>
  </Alert.Root>
</section>
