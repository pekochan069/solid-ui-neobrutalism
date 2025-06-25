import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function CardDemo() {
  return (
    <Card class="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div class="grid w-full items-center gap-4">
            <div class="flex flex-col space-y-1.5">
              <label for="name">Name</label>
              <input
                id="name"
                placeholder="Name of your project"
                class="flex h-10 w-full rounded-base border-2 border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none"
              />
            </div>
            <div class="flex flex-col space-y-1.5">
              <label for="framework">Framework</label>
              <select
                id="framework"
                class="flex h-10 w-full rounded-base border-2 border-border bg-background px-3 py-2 text-sm focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none"
              >
                <option value="">Select</option>
                <option value="next">Next.js</option>
                <option value="sveltekit">SvelteKit</option>
                <option value="astro">Astro</option>
                <option value="nuxt">Nuxt.js</option>
              </select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter class="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}
