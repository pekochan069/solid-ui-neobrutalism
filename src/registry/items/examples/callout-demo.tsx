import { Callout, CalloutContent, CalloutTitle } from "~/components/ui/callout";

export default function CalloutDemo() {
  return (
    <div class="grid grid-cols-2 gap-4">
      <Callout variant="success">
        <CalloutTitle>Success</CalloutTitle>
        <CalloutContent>This is a success callout</CalloutContent>
      </Callout>
      <Callout variant="info">
        <CalloutTitle>Info</CalloutTitle>
        <CalloutContent>This is an info callout</CalloutContent>
      </Callout>
      <Callout variant="warning">
        <CalloutTitle>Warning</CalloutTitle>
        <CalloutContent>This is a warning callout</CalloutContent>
      </Callout>
      <Callout variant="error">
        <CalloutTitle>Error</CalloutTitle>
        <CalloutContent>This is an error callout</CalloutContent>
      </Callout>
    </div>
  );
}
