<script lang="ts">
  import skills from '$lib/data/skills';
  import title from '$lib/title';
  import { Badge } from '$lib/components/ui/badge';
  import meta from '$lib/data/meta';
  import Headline from '$lib/components/Headline.svelte';
  import experience from '$lib/data/experience';
  import JobCard from '$lib/components/JobCard.svelte';
  import projects from '$lib/data/projects';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import Blockquote from '$lib/components/Blockquote.svelte';
  import HomeSection from '$lib/components/HomeSection.svelte';

  const favoriteSkills = Object.values(skills)
    .flat()
    .filter((skill) => skill.favorite);

  const MAX_PROJECTS = 4;

  const latestProjects = projects.filter((project) => !project.wip).slice(0, MAX_PROJECTS);

  const latestJob = experience.at(0);
</script>

<svelte:head>
  <title>{title()}</title>
</svelte:head>

<section>
  <Headline variant="h1" title={meta.name} />
  <div class="mt-2 mb-8 flex flex-row gap-1 text-xs text-muted-foreground">
    <a class="hover:underline" href={`mailto:${meta.contact.email}`}>{meta.contact.email}</a>
    <span>•</span>
    <span>{meta.location}</span>
  </div>
  {#if favoriteSkills.length}
    <Blockquote class="my-4">
      <p>Building modern web applications with</p>
      <div class="mt-1 flex flex-wrap gap-2">
        {#each favoriteSkills as skill (skill.name)}
          <Badge>{skill.name}</Badge>
        {/each}
      </div>
    </Blockquote>
  {/if}
  <p class="text-sm text-muted-foreground">
    Alongside my core expertise, I've worked with a variety of other technologies and enjoy
    exploring new tools, frameworks and approaches.
  </p>
  <div class="mt-8 space-y-6">
    <Headline variant="h2" title="Intro" />
    <p class="text-muted-foreground">
      I am a {meta.position} with many years of experience in developing modern web applications, with
      a focus on TypeScript, React, and Node.js.
    </p>
    <p class="text-muted-foreground">
      In recent years, my work has focused on designing, developing, and scaling complex platforms
      and search solutions across architecture, backend services, and frontend implementation.
    </p>
    <p class="text-muted-foreground">
      I quickly familiarize myself with new technologies and integrate them pragmatically into
      existing systems. At the same time, I value maintainable software architectures and close
      collaboration with product, design, and development teams to deliver sustainable solutions
      together.
    </p>
    {#if latestJob}
      <HomeSection title="Experience" buttonLabel="View Full Experience" href="/experience">
        <JobCard job={latestJob} />
      </HomeSection>
    {/if}
    {#if favoriteSkills.length}
      <HomeSection title="Skills" buttonLabel="View All Skills" href="/skills">
        <div class="flex flex-wrap gap-3">
          {#each favoriteSkills as skill (skill.name)}
            <Badge>{skill.name}</Badge>
          {/each}
        </div>
      </HomeSection>
    {/if}
    {#if projects.length}
      <HomeSection title="Projects" buttonLabel="View All Projects" href="/projects">
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {#each latestProjects as project (project)}
            <ProjectCard {project} />
          {/each}
        </div>
      </HomeSection>
    {/if}
  </div>
</section>
