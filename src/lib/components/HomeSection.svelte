<script lang="ts">
  import type { Snippet } from 'svelte';

  import Headline from '$lib/components/Headline.svelte';
  import { Button } from '$lib/components/ui/button';

  type HomeSectionProps = {
    title: string;
    href: string;
    buttonLabel: string;
    children: Snippet;
  };

  const { title, href, buttonLabel, children }: HomeSectionProps = $props();
</script>

<Headline variant="h2" {title} />

<div class="mt-4">
  {@render children()}
</div>

<div class="mt-6 flex justify-center">
  <Button {href} variant="outline">
    {buttonLabel}
  </Button>
</div>
