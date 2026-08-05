<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import { type JobType } from '$lib/data/experience';

  type JobCardProps = {
    job: JobType;
  };

  const { job }: JobCardProps = $props();
</script>

<Card.Root>
  <Card.Header>
    <Card.Title>{job.position}</Card.Title>
    <Card.Description>
      {job.company} • {job.period}
    </Card.Description>
  </Card.Header>
  {#if job.tasks.length}
    <Card.Content>
      <ol class="list-outside list-disc space-y-1 pl-4">
        {#each job.tasks as task (task)}
          <li>{task}</li>
        {/each}
      </ol>
    </Card.Content>
  {/if}
</Card.Root>
