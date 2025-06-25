import { createSignal } from "solid-js";

import {
  TextField,
  TextFieldDescription,
  TextFieldErrorMessage,
  TextFieldInput,
  TextFieldLabel,
} from "~/components/ui/text-field";

export default function TextFieldDemo() {
  const [name, setName] = createSignal("");

  return (
    <TextField
      value={name()}
      onChange={setName}
      validationState={name().length < 3 ? "invalid" : "valid"}
    >
      <TextFieldLabel>Name</TextFieldLabel>
      <TextFieldInput type="text" />
      <TextFieldDescription>Please enter your full name.</TextFieldDescription>
      <TextFieldErrorMessage>
        Name must be at least 3 characters long.
      </TextFieldErrorMessage>
    </TextField>
  );
}
