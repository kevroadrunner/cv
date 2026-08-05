<script lang="ts">
  import { cn } from '$lib/utils';

  const { children, class: className } = $props();
</script>

<div
  class={cn(
    'border-l-2 border-accent-foreground bg-accent p-4 pl-6 text-lg leading-8 text-muted-foreground italic',
    className
  )}
>
  {@render children()}
</div>
