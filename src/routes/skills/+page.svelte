<script lang="ts">
  import { page } from '$app/state';
  import { resolve } from '$app/paths';
  import Star from '@iconify-svelte/boxicons/star-filled';
  import InfoCircle from '@iconify-svelte/boxicons/info-circle';
  import * as Table from '$lib/components/ui/table';
  import { SvelteSet } from 'svelte/reactivity';
  import { Badge } from '$lib/components/ui/badge';
  import Headline from '$lib/components/Headline.svelte';
  import * as Alert from '$lib/components/ui/alert';
  import skills, { aiSkills, roadmapSkills, type SkillType } from '$lib/data/skills';

  type Filter = 'Expert' | 'Experienced' | 'Familiar' | 'Professional' | 'Favorite';

  const filterName = 'f';

  const filters: Filter[] = ['Expert', 'Experienced', 'Familiar', 'Professional', 'Favorite'];

  const selectedFilters = $derived(
    new Set((page.url.searchParams.get(filterName)?.split(',') ?? []) as Filter[])
  );

  const matchesFilter = (skill: SkillType, filter: Filter) => {
    switch (filter) {
      case 'Favorite':
        return skill.favorite;
      case 'Professional':
        return skill.professional;
      default:
        return skill.level === filter;
    }
  };

  const matchesAllFilters = (skill: SkillType) =>
    [...selectedFilters].every((filter) => matchesFilter(skill, filter));

  const getFilterUrl = (filter: Filter) => {
    const selected = new SvelteSet(selectedFilters);

    if (selected.has(filter)) {
      selected.delete(filter);
    } else {
      selected.add(filter);
    }

    const query = filters.filter((value) => selected.has(value)).join(',');

    return resolve(query ? `/skills?${filterName}=${query}` : '/skills');
  };
</script>

<section>
  <Headline variant="h1" title="Skills" class="mb-4" />
  <div class="space-y-8">
    <p class="text-sm text-muted-foreground">
      Technologies and tools I've used professionally, in personal projects, or both.
    </p>
    {#each Object.entries(skills) as [category, values] (category)}
      {@const filteredSkills = values.filter(matchesAllFilters)}

      {#if filteredSkills.length > 0}
        <div>
          <Headline variant="h3" title={category} />
          <Table.Root>
            <Table.TableBody>
              {#each filteredSkills as skill (skill.name)}
                <Table.TableRow>
                  <Table.TableCell class="align-top font-medium">
                    <Badge variant="default">{skill.name}</Badge>
                  </Table.TableCell>
                  <Table.TableCell>
                    <div class="flex flex-wrap gap-2">
                      {#if skill.favorite}
                        <Badge
                          href={getFilterUrl('Favorite')}
                          variant={selectedFilters.has('Favorite') ? 'default' : 'outline'}
                        >
                          <Star />
                        </Badge>
                      {/if}
                      {#if skill.level}
                        <Badge
                          href={getFilterUrl(skill.level)}
                          variant={selectedFilters.has(skill.level) ? 'default' : 'outline'}
                        >
                          {skill.level}
                        </Badge>
                      {/if}
                      {#if skill.professional}
                        <Badge
                          href={getFilterUrl('Professional')}
                          variant={selectedFilters.has('Professional') ? 'default' : 'outline'}
                        >
                          Professional
                        </Badge>
                      {/if}
                    </div>
                  </Table.TableCell>
                </Table.TableRow>
              {/each}
            </Table.TableBody>
          </Table.Root>
        </div>
      {/if}
    {/each}
    {#if aiSkills.length}
      <div>
        <Headline variant="h3" title="AI" />
        <Table.Root>
          <Table.TableBody>
            {#each aiSkills as skill (skill.name)}
              <Table.TableRow>
                <Table.TableCell class="align-top font-medium">
                  <Badge variant="default">{skill.name}</Badge>
                </Table.TableCell>
                <Table.TableCell>
                  {skill.usage}
                </Table.TableCell>
              </Table.TableRow>
            {/each}
          </Table.TableBody>
        </Table.Root>
      </div>
    {/if}
    {#if roadmapSkills.length}
      <div>
        <Headline variant="h3" title="Roadmap" />
        <div class="flex flex-wrap gap-2 p-2">
          {#each roadmapSkills as skill (skill)}
            <Badge variant="default">{skill}</Badge>
          {/each}
        </div>
      </div>
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
