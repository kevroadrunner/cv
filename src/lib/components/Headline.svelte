<script lang="ts">
  import { cn } from '$lib/utils';
  import type { ClassValue } from 'clsx';

  type HeadlineProps = {
    title: string;
    variant: 'h1' | 'h2' | 'h3';
    class?: ClassValue;
  };

  const { title, variant, class: className }: HeadlineProps = $props();
</script>

{#if variant === 'h1'}
  <h1 class={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)}>
    {title}
  </h1>
{:else if variant === 'h2'}
  <h2 class={cn('scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight', className)}>
    {title}
  </h2>
{:else if variant === 'h3'}
  <h3 class={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)}>{title}</h3>
{:else if variant === 'h4'}
  <h4 class={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)}>{title}</h4>
{/if}
