<script lang="ts">
  import { page } from '$app/state';
  import { resolve } from '$app/paths';
  import Copyright from '@iconify-svelte/boxicons/copyright';
  import { cn } from '$lib/utils';
  import meta from '$lib/data/meta';

  const navItems = [
    {
      name: 'Privacy',
      href: '/privacy',
    },
    {
      name: 'Legal',
      href: '/legal',
    },
  ];
</script>

<footer class="mb-4 flex gap-1 justify-self-center text-xs text-muted-foreground">
  <Copyright class="size-4" />
  <span>{new Date().getFullYear()}</span>
  <a href={meta.social.homepage} class="hover:underline" target="_blank">Kevin Ruff</a>
  {#each navItems as item (item.href)}
    <span>•</span>
    <a
      href={resolve(item.href)}
      class={cn('hover:underline', { underline: page.url.pathname === item.href })}>{item.name}</a
    >
  {/each}
</footer>
