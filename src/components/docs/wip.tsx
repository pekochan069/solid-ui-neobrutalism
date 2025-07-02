import { AlertCircleIcon } from "lucide-solid";

import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";

export default function WIP() {
  return (
    <Alert>
      <AlertCircleIcon />
      <AlertTitle>WIP</AlertTitle>
      <AlertDescription>
        This component is currently a work in progress. Please check back later
        for updates.
      </AlertDescription>
    </Alert>
  );
}
