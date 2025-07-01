import type { ColorFormat } from "~/lib/colors";

import { atom } from "nanostores";

export const $colorFormat = atom<ColorFormat>("oklch");
