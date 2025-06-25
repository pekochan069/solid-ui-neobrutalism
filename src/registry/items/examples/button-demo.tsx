import { Button } from "~/components/ui/button";

export default function ButtonDemo() {
  return (
    <div class="flex flex-wrap gap-4">
      <Button>Default</Button>
      <Button variant="no-shadow">No Shadow</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="outline-no-shadow">Outline No Shadow</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="neutral">Neutral</Button>
      <Button variant="neutral-no-shadow">Neutral No Shadow</Button>
      <Button variant="reverse">Reverse</Button>
      <Button variant="link">Link</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="error">Error</Button>
      <Button variant="info">Info</Button>
    </div>
  );
}
