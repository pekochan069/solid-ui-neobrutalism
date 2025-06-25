import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemLabel,
} from "~/components/ui/radio-group";

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <RadioGroupItem value="default" id="r1">
        <RadioGroupItemLabel>Default</RadioGroupItemLabel>
      </RadioGroupItem>
      <RadioGroupItem value="comfortable" id="r2">
        <RadioGroupItemLabel>Comfortable</RadioGroupItemLabel>
      </RadioGroupItem>
      <RadioGroupItem value="compact" id="r3">
        <RadioGroupItemLabel>Compact</RadioGroupItemLabel>
      </RadioGroupItem>
    </RadioGroup>
  );
}
