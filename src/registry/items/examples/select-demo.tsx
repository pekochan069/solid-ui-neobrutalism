import {
  Select,
  SelectContent,
  SelectDescription,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export default function SelectDemo() {
  return (
    <Select
      options={["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"]}
      placeholder="Select a fruit…"
      itemComponent={(props) => (
        <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>
      )}
    >
      <SelectLabel>Fruit</SelectLabel>
      <SelectTrigger aria-label="Fruit" class="w-64">
        <SelectValue<string>>{(state) => state.selectedOption()}</SelectValue>
      </SelectTrigger>
      <SelectContent />
      <SelectDescription>
        Select your favorite fruit from the list.
      </SelectDescription>
    </Select>
  );
}
