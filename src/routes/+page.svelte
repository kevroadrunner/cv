<script lang="ts">
  import skills from '$lib/data/skills';
  import { Badge } from '$lib/components/ui/badge';
  import { Button } from '$lib/components/ui/button';
  import meta from '$lib/data/meta';
  import Headline from '$lib/components/Headline.svelte';
  import experience from '$lib/data/experience';
  import JobCard from '$lib/components/JobCard.svelte';
  import projects from '$lib/data/projects';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import Blockquote from '$lib/components/Blockquote.svelte';

  const professionalSkills = Object.values(skills)
    .flat()
    .filter((skill) => skill.professional);

  const primarySkills = professionalSkills.filter((skill) => skill.favorite);

  const MAX_PROJECTS = 4;

  const latestProjects = projects.slice(0, MAX_PROJECTS);

  const latestJob = experience.at(0);
</script>

<section>
  <Headline variant="h1" title={meta.name} />
  <div class="mt-2 mb-8 flex flex-row gap-1 text-xs text-muted-foreground">
    <a class="hover:underline" href={`mailto:${meta.contact.email}`}
      >{meta.contact.email}</a
    >
    <span>•</span>
    <span>{meta.location}</span>
  </div>
  {#if primarySkills.length}
    <Blockquote class="my-4">
      <p>Building modern web applications with</p>
      <div class="mt-1 flex flex-wrap gap-2">
        {#each primarySkills as skill (skill.name)}
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
      In recent years, my work has focused on designing, developing, and scaling complex platforms and
      search solutions across architecture, backend services, and frontend implementation.
    </p>
    <p class="text-muted-foreground">
      I quickly and efficiently familiarize myself with new technologies and integrate
      them pragmatically into existing systems. At the same time, I place great emphasis on
      pragmatic, maintainable software architectures and close collaboration with product, design,
      and development teams to deliver sustainable solutions as a team.
    </p>
    {#if latestJob}
      <Headline variant="h2" title="Experience" />
      <JobCard job={latestJob} />
      <div class="flex justify-center">
        <Button href="/experience" variant="link">View Full Experience</Button>
      </div>
    {/if}
    {#if professionalSkills.length}
      <Headline variant="h2" title="Skills" />
      <div class="flex flex-wrap gap-3">
        {#each professionalSkills as skill (skill)}
          <Badge>{skill.name}</Badge>
        {/each}
      </div>
      <div class="flex justify-center">
        <Button href="/skills" variant="link">View All Skills</Button>
      </div>
    {/if}
    {#if projects.length}
      <Headline variant="h2" title="Projects" />
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {#each latestProjects as project (project)}
          <ProjectCard {project} />
        {/each}
      </div>
      <div class="flex justify-center">
        <Button href="/projects" variant="link">View All Projects</Button>
      </div>
    {/if}
  </div>
</section>
