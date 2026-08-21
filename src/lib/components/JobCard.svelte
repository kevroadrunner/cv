<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import { Badge } from '$lib/components/ui/badge';
  import * as Collapsible from '$lib/components/ui/collapsible';
  import * as Table from '$lib/components/ui/table';
  import ChevronDown from '@iconify-svelte/boxicons/chevron-down';
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
  {#if job.projects?.length}
    <Card.Footer class="w-full p-0">
      <Collapsible.Root class="w-full">
        <Collapsible.Trigger class="group cursor-pointer py-2 px-4 flex w-full items-center justify-between text-sm font-medium hover:bg-muted">
          <span class="flex items-center gap-2">
            <span class="text-muted-foreground">
              Projects
            </span>
            <Badge
              class="rounded-full font-mono"
              variant="outline"
            >
              {job.projects.length}
            </Badge>
          </span>
          <ChevronDown class="size-4 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
        </Collapsible.Trigger>
        <Collapsible.Content class="px-2">
          <div class="overflow-x-auto">
            <Table.Root>
              <Table.Body>
                {#each job.projects as project (project.name)}
                  <Table.Row>
                    <Table.Cell>
                      {project.name}
                    </Table.Cell>
                    <Table.Cell>
                      <div class="flex flex-wrap gap-2">
                        {#each project.skills ?? [] as skill (skill)}
                          <Badge>
                            {skill}
                          </Badge>
                        {/each}
                      </div>
                    </Table.Cell>
                  </Table.Row>
                {/each}
              </Table.Body>
            </Table.Root>
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    </Card.Footer>
  {/if}
</Card.Root>
