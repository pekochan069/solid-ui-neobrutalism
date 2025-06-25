import { Label } from "~/components/ui/label";

export default function LabelDemo() {
  return (
    <div>
      <Label for="email">Your email address</Label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        class="mt-1 flex h-10 w-full rounded-base border-2 border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none"
      />
    </div>
  );
}
