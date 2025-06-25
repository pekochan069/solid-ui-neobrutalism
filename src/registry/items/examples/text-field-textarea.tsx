import {
  TextField,
  TextFieldLabel,
  TextFieldTextArea,
} from "~/components/ui/text-field";

export default function TextFieldDemo() {
  return (
    <TextField>
      <TextFieldLabel>Text</TextFieldLabel>
      <TextFieldTextArea class="w-64" />
    </TextField>
  );
}
