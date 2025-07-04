import { Separator } from "~/components/ui/separator";

export default function SeparatorDemo() {
  return (
    <div>
      <div class="space-y-1">
        <h4 class="text-sm leading-none font-medium">@kobalte/core</h4>
        <p class="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator class="my-4" />
      <div class="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
}
