import { createSignal } from "solid-js";
import MinusIcon from "lucide-solid/icons/minus";
import PlusIcon from "lucide-solid/icons/plus";

import {
  NumberField,
  NumberFieldDecrementTrigger,
  NumberFieldDescription,
  NumberFieldErrorMessage,
  NumberFieldGroup,
  NumberFieldIncrementTrigger,
  NumberFieldInput,
  NumberFieldLabel,
} from "~/components/ui/number-field";

export default function NumberFieldDemo() {
  const [quantity, setQuantity] = createSignal(0);

  return (
    <div>
      <NumberField
        validationState={quantity() < 0 ? "invalid" : "valid"}
        value={quantity()}
        onChange={setQuantity}
        class="w-64"
      >
        <NumberFieldLabel>Quantity</NumberFieldLabel>
        <NumberFieldGroup>
          <NumberFieldInput />
          <NumberFieldIncrementTrigger>
            <PlusIcon class="size-3" />
          </NumberFieldIncrementTrigger>
          <NumberFieldDecrementTrigger>
            <MinusIcon class="size-3" />
          </NumberFieldDecrementTrigger>
        </NumberFieldGroup>
        <NumberFieldErrorMessage>
          Quantity must be greater or equal to 0
        </NumberFieldErrorMessage>
        <NumberFieldDescription>
          Use the buttons to increase or decrease the quantity.
        </NumberFieldDescription>
      </NumberField>
    </div>
  );
}
