<script lang="ts">
  import title from '$lib/title';
  import Star from '@iconify-svelte/boxicons/star-filled';
  import InfoCircle from '@iconify-svelte/boxicons/info-circle';
  import { Badge } from '$lib/components/ui/badge';
  import Headline from '$lib/components/Headline.svelte';
  import SkillList from '$lib/components/SkillList.svelte';
  import * as Alert from '$lib/components/ui/alert';
  import skills, { aiSkills, roadmapSkills, type SkillType } from '$lib/data/skills';
</script>

<svelte:head>
  <title>{title('Skills')}</title>
</svelte:head>

<section>
  <Headline variant="h1" title="Skills" class="mb-4" />
  <div class="space-y-8">
    <p class="text-sm text-muted-foreground">
      Technologies and tools I've used professionally, in personal projects, or both.
    </p>
    {#each Object.entries(skills) as [category, categorySkills] (category)}
      {#if categorySkills.length > 0}
        <SkillList title={category} skills={categorySkills} />
      {/if}
    {/each}
    {#if aiSkills.length}
      <SkillList title="AI" skills={aiSkills} />
    {/if}
    {#if roadmapSkills.length}
      <SkillList title="Roadmap" skills={roadmapSkills.map((name) => ({ name }))} />
    {/if}
    <Alert.Root>
      <InfoCircle />
      <Alert.Description>
        This is a selection of the technologies I work with most and consider relevant to my
        professional interests. It is by no means exhaustive, as I am always exploring new tools,
        frameworks and technologies.
      </Alert.Description>
    </Alert.Root>
  </div>
</section>
