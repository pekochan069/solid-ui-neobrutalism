import {
  Resizable,
  ResizableHandle,
  ResizablePanel,
} from "~/components/ui/resizable";

export default function ResizableHorizontal() {
  return (
    <Resizable
      class="max-w-md rounded-base border-2 border-border"
      orientation="horizontal"
    >
      <ResizablePanel class="grid place-content-center">One</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel class="grid place-content-center">Two</ResizablePanel>
    </Resizable>
  );
}
