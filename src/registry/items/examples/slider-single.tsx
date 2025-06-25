import {
  Slider,
  SliderFill,
  SliderLabel,
  SliderThumb,
  SliderTrack,
  SliderValueLabel,
} from "~/components/ui/slider";

export default function SliderDemo() {
  return (
    <Slider
      minValue={10}
      maxValue={2000}
      defaultValue={[500]}
      getValueLabel={(params) => `$${params.values[0]}`}
      class="w-[300px] space-y-3"
    >
      <div class="flex w-full justify-between">
        <SliderLabel>Money</SliderLabel>
        <SliderValueLabel />
      </div>
      <SliderTrack>
        <SliderFill />
        <SliderThumb />
      </SliderTrack>
    </Slider>
  );
}
