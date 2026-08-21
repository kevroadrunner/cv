<script lang="ts">
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import { cn } from '$lib/utils';
  import { Button } from '$lib/components/ui/button';
  import Rocket from '@iconify-svelte/boxicons/rocket';
  import MailOpen from '@iconify-svelte/boxicons/mail-open';
  import Check from '@iconify-svelte/boxicons/check';
  import Bug from '@iconify-svelte/boxicons/bug';
  import UserIdCard from '@iconify-svelte/boxicons/user-id-card';
  import Timeline from '@iconify-svelte/boxicons/timeline';
  import Code from '@iconify-svelte/boxicons/code';
  import FolderCode from '@iconify-svelte/boxicons/folder-code';
  import Me from '$lib/assets/avatar.jpg';
  import Headline from '$lib/components/Headline.svelte';
  import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
  import Github from '@iconify-svelte/simple-icons/github';
  import LinkedIn from '@iconify-svelte/simple-icons/linkedin';
  import Xing from '@iconify-svelte/simple-icons/xing';
  import Share from '@iconify-svelte/boxicons/share';
  import { Badge } from '$lib/components/ui/badge';
  import meta from '$lib/data/meta';

  const navItems = [
    { label: 'Home', href: resolve('/'), icon: UserIdCard },
    { label: 'Experience', href: resolve('/experience'), icon: Timeline },
    { label: 'Skills', href: resolve('/skills'), icon: Code },
    { label: 'Projects', href: resolve('/projects'), icon: FolderCode },
  ];

  type ShareState = 'idle' | 'copied' | 'shared' | 'errored';

  let shareState = $state<ShareState>('idle');
  let timeoutId = $state<number | null>(null);

  const setShareState = (state: ShareState, delay = 3000) => {
    if (timeoutId) clearTimeout(timeoutId)
    shareState = state;
    if (shareState !== 'idle') {
      timeoutId = setTimeout(() => {
        shareState = 'idle';
      }, delay);
    }
  }

  const share = async (event: MouseEvent) => {
    event.preventDefault();
    // Prevent share on active states
    if (shareState !== 'idle') return;
    // Reset state
    setShareState('idle');
    try {
      // Try to use share feature from os
      if (navigator.share) {
        await navigator.share({
          url: meta.url,
        });
        setShareState('shared')
      // Try copy to clipboard as fallback
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(meta.url);
        setShareState('copied')
      } else {
        // Sharing not possible
        setShareState('errored', 2000)
      }
    } catch (error) {
      // User canceled
      if (error instanceof DOMException && error.name === 'AbortError') {
        return;
      }
      // Something unexpected happened
      setShareState('errored', 5000)
    }
  };
</script>

<aside class="inset-y-0 flex flex-col space-y-4 bg-accent p-6 sm:fixed sm:w-72">
  <div class="flex gap-4 sm:flex-col">
    <div class="shrink-1">
      <a href="/">
        <Avatar class="size-32 sm:size-full">
          <AvatarImage class="rounded-none sm:rounded-full" src={Me} alt={meta.name} />
          <AvatarFallback>KR</AvatarFallback>
        </Avatar>
      </a>
    </div>
    <div class="flex-1 sm:py-4">
      <Headline variant="h3" title={meta.name} />
      <p class="text-muted-foreground uppercase">{meta.position}</p>
      {#if meta.availableForWork}
        <Badge variant="destructive">Available for work</Badge>
      {/if}
    </div>
  </div>
  <nav class="flex shrink-0 flex-col space-y-2">
    {#each navItems as Item (Item.href)}
      <Button
        class={cn('text-lg', { 'font-extrabold': page.url.pathname === Item.href })}
        variant="link"
        href={Item.href}
      >
        <Item.icon class="size-4" />
        {Item.label}
      </Button>
    {/each}
  </nav>
  <div class="mt-auto flex flex-wrap justify-center gap-2 sm:justify-between">
    <Button variant="outline" size="icon" href={meta.social.github} target="_blank">
      <Github class="size-5" />
    </Button>
    <Button variant="outline" size="icon" href={meta.social.linkedIn} target="_blank">
      <LinkedIn class="size-5" />
    </Button>
    <Button variant="outline" size="icon" href={meta.social.xing} target="_blank">
      <Xing class="size-5" />
    </Button>
    <Button variant="outline" size="icon" href={`mailto:${meta.contact.email}`}>
      <MailOpen class="size-5" />
    </Button>
    <Button href={meta.url} variant="outline" size="icon" onclick={share}>
      {#if shareState === 'copied' || shareState === 'shared'}
        <Check class="size-5" />
      {:else if shareState === 'errored'}
        <Bug class="size-5 text-destructive" />
      {:else}
        <Share class="size-5" />
      {/if}
    </Button>
    <Button variant="outline" size="icon" href={meta.social.homepage}>
      <Rocket class="size-5" />
    </Button>
  </div>
</aside>
