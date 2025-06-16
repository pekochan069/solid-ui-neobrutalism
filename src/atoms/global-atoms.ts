import { atom, onMount } from "nanostores";

const packageManagerAtom = atom<"npm" | "yarn" | "pnpm" | "bun">("npm");

export { packageManagerAtom };
