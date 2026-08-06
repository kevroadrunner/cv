<script lang="ts">
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import { cn } from '$lib/utils';
  import { Button } from '$lib/components/ui/button';
  import Rocket from '@iconify-svelte/boxicons/rocket';
  import MailOpen from '@iconify-svelte/boxicons/mail-open';
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
  import Check from '@iconify-svelte/boxicons/check';
  import { Badge } from '$lib/components/ui/badge';
  import meta from '$lib/data/meta';

  const navItems = [
    { label: 'Home', href: resolve('/'), icon: UserIdCard },
    { label: 'Experience', href: resolve('/experience'), icon: Timeline },
    { label: 'Skills', href: resolve('/skills'), icon: Code },
    { label: 'Projects', href: resolve('/projects'), icon: FolderCode },
  ];

  type ShareState = 'idle' | 'copied' | 'errored';

  let shareState = $state<ShareState>('idle');

  const share = async (event: MouseEvent) => {
    event.preventDefault();

    shareState = 'idle';

    try {
      if (navigator.share) {
        await navigator.share({
          url: meta.url,
        });
        return;
      }
      if (!navigator.clipboard?.writeText) {
        throw new Error('Clipboard API is not available');
      }
      await navigator.clipboard.writeText(meta.url);
      shareState = 'copied';
      setTimeout(() => {
        shareState = 'idle';
      }, 2000);
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        return;
      }
      console.error('Failed to share URL:', err);
      shareState = 'errored';
    }
  };
</script>

<aside class="inset-y-0 flex flex-col space-y-4 bg-accent p-6 sm:fixed sm:w-72">
  <div class="flex gap-4 sm:flex-col">
    <div class="shrink-1">
      <Avatar class="size-32 sm:size-full">
        <AvatarImage class="rounded-none sm:rounded-full" src={Me} alt={meta.name} />
        <AvatarFallback>KR</AvatarFallback>
      </Avatar>
    </div>
    <div class="flex-1 py-4">
      <Headline variant="h3" title={meta.name} />
      <p class="text-muted-foreground">{meta.position}</p>
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
    <Button variant="outline" size="icon" href={meta.social.homepage} target="_blank">
      <Rocket class="size-5" />
    </Button>
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
      {#if shareState === 'copied'}
        <Check class="size-5" />
      {:else if shareState === 'errored'}
        <Share class="size-5 text-destructive" />
      {:else}
        <Share class="size-5" />
      {/if}
    </Button>
  </div>
</aside>
