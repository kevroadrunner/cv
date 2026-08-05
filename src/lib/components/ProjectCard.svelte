<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import * as Card from '$lib/components/ui/card';
  import { Badge } from '$lib/components/ui/badge';
  import { type ProjectType } from '$lib/data/projects';

  export type ProjectCardProps = {
    project: ProjectType;
  };

  const { project }: ProjectCardProps = $props();
</script>

<Card.Root>
  <Card.Header>
    <Card.Title>{project.name}</Card.Title>
    <Card.Description>
      {project.description}
    </Card.Description>
  </Card.Header>
  <Card.Content class="flex-1">
    {#if project.tags.length}
      <div class="flex flex-wrap gap-2">
        {#each project.tags as tag (tag)}
          <Badge variant="default">{tag}</Badge>
        {/each}
      </div>
    {/if}
  </Card.Content>
  <Card.Footer class="gap-2">
    <Button variant="outline" href={project.github} target="_blank">GitHub</Button>
    <div class="flex-1"></div>
    {#if project.demo}
      <Button variant="default" href={project.demo} target="_blank">Visit</Button>
    {/if}
  </Card.Footer>
</Card.Root>
