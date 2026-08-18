<script lang="ts">
  import Star from '@iconify-svelte/boxicons/star-filled';
  import Headline from '$lib/components/Headline.svelte';
  import { Badge } from '$lib/components/ui/badge';
  import { type SkillType } from '$lib/data/skills';

  export type SkillListProps = {
    title: string;
    skills: SkillType[];
  };

  const { title, skills }: SkillType = $props();
</script>

<div class="space-y-2">
  <Headline variant="h3" {title} />
  <div class="flex flex-wrap gap-2">
    {#each skills as skill (skill.name)}
      <Badge>
        {skill.name}
        {#if skill.favorite}
          <Star />
        {/if}
      </Badge>
    {/each}
  </div>
</div>
