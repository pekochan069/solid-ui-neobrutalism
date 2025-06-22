import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/solid-table";

import {
  createEffect,
  createSignal,
  For,
  Index,
  onCleanup,
  Show,
} from "solid-js";
import {
  createSolidTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/solid-table";
import {
  Bold,
  Calendar,
  ChevronDown,
  ChevronsUpDown,
  Ellipsis,
  Italic,
  LucideBell,
  LucideCheck,
  LucideX,
  Mail,
  Minus,
  Moon,
  Plus,
  Rocket,
  Settings,
  Smile,
  Sun,
  TerminalIcon,
  Underline,
  User,
} from "lucide-solid";
import { toast } from "solid-sonner";

import tanstack from "~/assets/tanstack.png";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import {
  OTPField,
  OTPFieldGroup,
  OTPFieldInput,
  OTPFieldSeparator,
  OTPFieldSlot,
} from "~/components/ui/otp-field";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { showToast } from "~/components/ui/toast";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { BadgeDelta } from "./ui/badge-delta";
import { Button } from "./ui/button";
import { Calendar as CalendarComponent } from "./ui/calendar";
import { Callout, CalloutContent, CalloutTitle } from "./ui/callout";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Checkbox } from "./ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import {
  Combobox,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxItemLabel,
  ComboboxSection,
  ComboboxTrigger,
} from "./ui/combobox";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./ui/command";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuGroupLabel,
  ContextMenuItem,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "./ui/context-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Label } from "./ui/label";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "./ui/menubar";
import {
  NumberField,
  NumberFieldDecrementTrigger,
  NumberFieldErrorMessage,
  NumberFieldGroup,
  NumberFieldIncrementTrigger,
  NumberFieldInput,
} from "./ui/number-field";
import {
  Pagination,
  PaginationEllipsis,
  PaginationItem,
  PaginationItems,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemLabel,
} from "./ui/radio-group";
import { Resizable, ResizableHandle, ResizablePanel } from "./ui/resizable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Skeleton } from "./ui/skeleton";
import {
  Slider,
  SliderFill,
  SliderLabel,
  SliderThumb,
  SliderTrack,
  SliderValueLabel,
} from "./ui/slider";
import { Switch, SwitchControl, SwitchLabel, SwitchThumb } from "./ui/switch";
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
  TextFieldTextArea,
} from "./ui/text-field";
import { Timeline } from "./ui/timeline";
import { Toggle } from "./ui/toggle";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const { format: formatWeekdayLong } = new Intl.DateTimeFormat("en", {
  weekday: "long",
});
const { format: formatWeekdayShort } = new Intl.DateTimeFormat("en", {
  weekday: "short",
});
const { format: formatMonth } = new Intl.DateTimeFormat("en", {
  month: "long",
});

interface Food {
  value: string;
  label: string;
  disabled: boolean;
}
interface Category {
  label: string;
  options: Food[];
}
const ALL_OPTIONS: Category[] = [
  {
    label: "Fruits",
    options: [
      { value: "apple", label: "Apple", disabled: false },
      { value: "banana", label: "Banana", disabled: false },
      { value: "blueberry", label: "Blueberry", disabled: false },
      { value: "grapes", label: "Grapes", disabled: true },
      { value: "pineapple", label: "Pineapple", disabled: false },
    ],
  },
  {
    label: "Meat",
    options: [
      { value: "beef", label: "Beef", disabled: false },
      { value: "chicken", label: "Chicken", disabled: false },
      { value: "lamb", label: "Lamb", disabled: false },
      { value: "pork", label: "Pork", disabled: false },
    ],
  },
];

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
];
export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: (props) => (
      <Checkbox
        checked={props.table.getIsAllPageRowsSelected()}
        indeterminate={props.table.getIsSomePageRowsSelected()}
        onChange={(value) => props.table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: (props) => (
      <Checkbox
        checked={props.row.getIsSelected()}
        onChange={(value) => props.row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (props) => (
      <div class="capitalize">{props.row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: (props) => {
      return (
        <Button
          variant="ghost"
          onClick={() =>
            props.column.toggleSorting(props.column.getIsSorted() === "asc")
          }
        >
          Email
          <ChevronsUpDown />
        </Button>
      );
    },
    cell: (props) => <div class="lowercase">{props.row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div class="text-right">Amount</div>,
    cell: (props) => {
      const formatted = () => {
        const amount = parseFloat(props.row.getValue("amount"));
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount);
      };
      return <div class="text-right font-medium">{formatted()}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: (props) => {
      return (
        <DropdownMenu placement="bottom-end">
          <DropdownMenuTrigger
            as={Button<"button">}
            variant="ghost"
            class="size-8 p-0"
          >
            <span class="sr-only">Open menu</span>
            <Ellipsis />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(props.row.original.id)
              }
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function UiTest() {
  const [showGitLog, setShowGitLog] = createSignal(true);
  const [showHistory, setShowHistory] = createSignal(false);
  const [branch, setBranch] = createSignal("main");
  const [rawValue, setRawValue] = createSignal<number>();
  const [selectValue, setSelectValue] = createSignal("");
  const [open, setOpen] = createSignal(false);

  createEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);

    onCleanup(() => document.removeEventListener("keydown", down));
  });

  const SHEET_POSITIONS = ["top", "right", "bottom", "left"] as const;

  const [sorting, setSorting] = createSignal<SortingState>([]);
  const [columnFilters, setColumnFilters] = createSignal<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] = createSignal<VisibilityState>(
    {},
  );
  const [rowSelection, setRowSelection] = createSignal({});

  const table = createSolidTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      get sorting() {
        return sorting();
      },
      get columnFilters() {
        return columnFilters();
      },
      get columnVisibility() {
        return columnVisibility();
      },
      get rowSelection() {
        return rowSelection();
      },
    },
  });

  const [date, setDate] = createSignal<Date>(new Date());
  const [dates, setDates] = createSignal<Date[]>([new Date()]);
  const [dateRange, setDateRange] = createSignal<{
    from: Date | null;
    to: Date | null;
  }>({
    from: null,
    to: null,
  });

  return (
    <div class="flex flex-col items-center">
      <CalendarComponent mode="single" value={date()} onValueChange={setDate} />
      {date().toLocaleDateString("ko-KR")}
      <CalendarComponent
        mode="multiple"
        value={dates()}
        onValueChange={setDates}
      />
      {dates()
        .map((d) => d.toLocaleDateString("ko-KR"))
        .join(", ")}
      <CalendarComponent
        mode="range"
        value={dateRange()}
        onValueChange={setDateRange}
      />
      {dateRange().from?.toLocaleDateString("ko-KR")} ~{" "}
      {dateRange().to?.toLocaleDateString("ko-KR")}
      <Tooltip>
        <TooltipTrigger as={Button<"button">}>Trigger</TooltipTrigger>
        <TooltipContent>
          <p>Tooltip content</p>
        </TooltipContent>
      </Tooltip>
      <ToggleGroup multiple>
        <ToggleGroupItem value="bold" aria-label="Bold">
          <Bold class="size-6" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <Italic class="size-6" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">
          <Underline class="size-6" />
        </ToggleGroupItem>
      </ToggleGroup>
      <Toggle>
        {(state) => (
          <Show when={state.pressed()} fallback={<Moon class="size-6" />}>
            <Sun class="size-6" />
          </Show>
        )}
      </Toggle>
      <Toggle variant="outline">
        {(state) => (
          <Show when={state.pressed()} fallback={<Moon class="size-6" />}>
            <Sun class="size-6" />
          </Show>
        )}
      </Toggle>
      <Button
        onClick={() =>
          showToast({
            title: "Toast",
            description: "This is a toast notification.",
          })
        }
      >
        Toast
      </Button>
      <Button
        onClick={() =>
          showToast({
            title: "Toast",
            description: "This is a toast notification.",
            variant: "success",
          })
        }
      >
        Toast
      </Button>
      <Button
        onClick={() =>
          showToast({
            title: "Toast",
            description: "This is a toast notification.",
            variant: "warning",
          })
        }
      >
        Toast
      </Button>
      <Button
        onClick={() =>
          showToast({
            title: "Toast",
            description: "This is a toast notification.",
            variant: "error",
          })
        }
      >
        Toast
      </Button>
      <Timeline
        items={[
          {
            title: "Event #1",
            description: "This is the first event of the timeline.",
          },
          {
            title: "Event #2",
            description: "This is the second event of the timeline.",
          },
          {
            title: "Event #3",
            description: "This is the third event of the timeline.",
          },
        ]}
        activeItem={1}
      />
      <TextField class="grid w-full max-w-sm items-center gap-1.5">
        <TextFieldLabel for="ta">Email</TextFieldLabel>
        <TextFieldTextArea id="ta" placeholder="Email" />
      </TextField>
      <TextField class="grid w-full max-w-sm items-center gap-1.5">
        <TextFieldLabel for="email">Email</TextFieldLabel>
        <TextFieldInput type="email" id="email" placeholder="Email" />
      </TextField>
      <Tabs defaultValue="account" class="w-[400px]">
        <TabsList class="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent class="space-y-2">Hello</CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent class="space-y-2">World</CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead class="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead class="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <For each={invoices}>
            {(invoice) => (
              <TableRow>
                <TableCell class="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell class="text-right">{invoice.totalAmount}</TableCell>
              </TableRow>
            )}
          </For>
        </TableBody>
      </Table>
      <Switch class="flex items-center space-x-2">
        <SwitchControl>
          <SwitchThumb />
        </SwitchControl>
        <SwitchLabel>Airplane Mode</SwitchLabel>
      </Switch>
      <Button onClick={() => toast("Hello")}>Click</Button>
      <Button onClick={() => toast.success("success")}>Click</Button>
      <Button onClick={() => toast.info("info")}>Click</Button>
      <Button onClick={() => toast.warning("warning")}>Click</Button>
      <Button onClick={() => toast.error("error")}>Click</Button>
      <Slider
        minValue={10}
        maxValue={2000}
        defaultValue={[20, 500]}
        getValueLabel={(params) =>
          `$${params.values[0]} - $${params.values[1]}`
        }
        class="w-[300px] space-y-3"
      >
        <div class="flex w-full justify-between">
          <SliderLabel>Money</SliderLabel>
          <SliderValueLabel />
        </div>
        <SliderTrack>
          <SliderFill />
          <SliderThumb />
          <SliderThumb />
        </SliderTrack>
      </Slider>
      <div class="flex items-center space-x-4">
        <Skeleton height={48} circle animate={false} />
        <div class="space-y-2">
          <Skeleton height={16} width={250} radius={10} />
          <Skeleton height={16} width={200} radius={10} />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <For each={SHEET_POSITIONS}>
          {(position) => (
            <Sheet>
              <SheetTrigger as={Button<"button">}>{position}</SheetTrigger>
              <SheetContent position={position}>
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </SheetDescription>
                </SheetHeader>
                <div class="grid gap-4 py-4">Hello!</div>
                <SheetFooter>
                  <Button type="submit">Save changes</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          )}
        </For>
      </div>
      <div>
        <div class="space-y-1">
          <h4 class="text-sm leading-none font-medium">Radix Primitives</h4>
          <p class="text-sm text-muted-foreground">
            An open-source UI component library.
          </p>
        </div>
        <Separator class="my-4" />
        <div class="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
      <div class="flex-col">
        <Select
          value={selectValue()}
          onChange={setSelectValue}
          options={["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"]}
          placeholder="Select a fruit…"
          itemComponent={(props) => (
            <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>
          )}
        >
          <SelectTrigger aria-label="Fruit" class="w-[180px]">
            <SelectValue<string>>
              {(state) => state.selectedOption()}
            </SelectValue>
          </SelectTrigger>
          <SelectContent />
        </Select>
        <p class="pt-2 text-sm text-gray-500">
          Your favorite fruit is: {selectValue()}
        </p>
      </div>
      <Resizable class="max-w-md rounded-lg border">
        <ResizablePanel initialSize={0.25} class="overflow-hidden">
          <div class="flex h-[200px] items-center justify-center p-6">
            <span class="font-semibold">One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel initialSize={0.75} class="overflow-hidden">
          <Resizable orientation="vertical">
            <ResizablePanel initialSize={0.5} class="overflow-hidden">
              <div class="flex h-full items-center justify-center p-6">
                <span class="font-semibold">Two</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel initialSize={0.5} class="overflow-hidden">
              <div class="flex h-full items-center justify-center p-6">
                <span class="font-semibold">Three</span>
              </div>
            </ResizablePanel>
          </Resizable>
        </ResizablePanel>
      </Resizable>
      <RadioGroup>
        <For each={["Apple", "Orange", "Watermelon"]}>
          {(fruit) => (
            <RadioGroupItem value={fruit}>
              <RadioGroupItemLabel>{fruit}</RadioGroupItemLabel>
            </RadioGroupItem>
          )}
        </For>
      </RadioGroup>
      <Pagination
        count={10}
        fixedItems
        itemComponent={(props) => (
          <PaginationItem page={props.page}>{props.page}</PaginationItem>
        )}
        ellipsisComponent={() => <PaginationEllipsis />}
      >
        <PaginationPrevious />
        <PaginationItems />
        <PaginationNext />
      </Pagination>
      <OTPField maxLength={6}>
        <OTPFieldInput />
        <OTPFieldGroup>
          <OTPFieldSlot index={0} />
          <OTPFieldSlot index={1} />
          <OTPFieldSlot index={2} />
        </OTPFieldGroup>
        <OTPFieldSeparator />
        <OTPFieldGroup>
          <OTPFieldSlot index={3} />
          <OTPFieldSlot index={4} />
          <OTPFieldSlot index={5} />
        </OTPFieldGroup>
      </OTPField>
      <NumberField
        class="flex w-36 flex-col gap-2"
        value={rawValue()}
        onRawValueChange={setRawValue}
        validationState={rawValue() !== 40 ? "invalid" : "valid"}
      >
        <NumberFieldGroup>
          <NumberFieldInput />
          <NumberFieldIncrementTrigger />
          <NumberFieldDecrementTrigger />
        </NumberFieldGroup>
        <NumberFieldErrorMessage>Hmm, I prefer 40.</NumberFieldErrorMessage>
      </NumberField>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Window <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>New Incognito Window</MenubarItem>
            <MenubarSeparator />
            <MenubarSub overlap>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Email link</MenubarItem>
                <MenubarItem>Messages</MenubarItem>
                <MenubarItem>Notes</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              Print... <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub overlap>
              <MenubarSubTrigger>Find</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Search the web</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Find...</MenubarItem>
                <MenubarItem>Find Next</MenubarItem>
                <MenubarItem>Find Previous</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>
              Always Show Full URLs
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem inset>
              Reload <MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled inset>
              Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Toggle Fullscreen</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Hide Sidebar</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Profiles</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="benoit">
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset>Edit...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Add Profile...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div class="flex items-center space-x-2">
        <Checkbox id="ttt" />
        <Label for="ttt">Accept terms and conditions</Label>
      </div>
      <HoverCard>
        <HoverCardTrigger as={Button<"button">} variant="link">
          @solidjs
        </HoverCardTrigger>
        <HoverCardContent class="w-80">
          <div class="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/ryansolid.png" />
              <AvatarFallback>RC</AvatarFallback>
            </Avatar>
            <div class="space-y-1">
              <h4 class="text-sm font-semibold">@solidjs</h4>
              <p class="text-sm">
                Simple and performant reactivity for building user interfaces.
              </p>
              <div class="flex items-center pt-2">
                <Calendar class="mr-2 size-4 opacity-70" />{" "}
                <span class="text-xs text-muted-foreground">
                  Joined April 2018
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
      <DropdownMenu>
        <DropdownMenuTrigger as={Button<"button">}>
          Git Settings
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-48">
          <DropdownMenuItem>
            <span>Commit</span>
            <DropdownMenuShortcut>⌘+K</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Push</span>
            <DropdownMenuShortcut>⇧+⌘+K</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Update Project</span>
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSub overlap>
            <DropdownMenuSubTrigger>GitHub</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Create Pull Request…</DropdownMenuItem>
                <DropdownMenuItem>View Pull Requests</DropdownMenuItem>
                <DropdownMenuItem>Sync Fork</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Open on GitHub</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showGitLog()}
            onChange={setShowGitLog}
          >
            Show Git Log
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showHistory()}
            onChange={setShowHistory}
          >
            Show History
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuGroupLabel>Branches</DropdownMenuGroupLabel>
            <DropdownMenuRadioGroup value={branch()} onChange={setBranch}>
              <DropdownMenuRadioItem value="main">main</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="develop">
                develop
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Drawer>
        <DrawerTrigger as={Button<"button">}>Open Drawer</DrawerTrigger>
        <DrawerContent>
          <div class="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader>
            <div class="p-4 pb-0">
              <div class="flex items-center justify-center space-x-2">
                <Button size="icon" class="size-8 shrink-0 rounded-full">
                  <Minus class="size-4" />
                  <span class="sr-only">Decrease</span>
                </Button>
                <div class="flex-1 text-center">
                  <div class="text-7xl font-bold tracking-tighter">250</div>
                  <div class="text-[0.70rem] text-muted-foreground uppercase">
                    Calories/day
                  </div>
                </div>
                <Button size="icon" class="size-8 shrink-0 rounded-full">
                  <Plus class="size-4" />
                  <span class="sr-only">Increase</span>
                </Button>
              </div>
            </div>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose as={Button<"button">}>Cancel</DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
      <div class="w-full">
        <div class="flex items-center py-4">
          <TextField
            value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
            onChange={(value) =>
              table.getColumn("email")?.setFilterValue(value)
            }
          >
            <TextFieldInput placeholder="Filter emails..." class="max-w-sm" />
          </TextField>
          <DropdownMenu placement="bottom-end">
            <DropdownMenuTrigger
              as={Button<"button">}
              variant="neutral-no-shadow"
              class="ml-auto"
            >
              Columns <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <For
                each={table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())}
              >
                {(column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      class="capitalize"
                      checked={column.getIsVisible()}
                      onChange={(value) => column.toggleVisibility(!!value)}
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                }}
              </For>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div class="rounded-md border">
          <Table>
            <TableHeader>
              <For each={table.getHeaderGroups()}>
                {(headerGroup) => (
                  <TableRow>
                    <For each={headerGroup.headers}>
                      {(header) => {
                        return (
                          <TableHead>
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext(),
                                )}
                          </TableHead>
                        );
                      }}
                    </For>
                  </TableRow>
                )}
              </For>
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow data-state={row.getIsSelected() && "selected"}>
                    <For each={row.getVisibleCells()}>
                      {(cell) => (
                        <TableCell>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                      )}
                    </For>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} class="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div class="flex items-center justify-end space-x-2 py-4">
          <div class="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div class="space-x-2">
            <Button
              variant="neutral-no-shadow"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="neutral-no-shadow"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
      <ContextMenu>
        <ContextMenuTrigger class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click here.
        </ContextMenuTrigger>
        <ContextMenuPortal>
          <ContextMenuContent class="w-48">
            <ContextMenuItem>
              <span>Commit</span>
              <ContextMenuShortcut>⌘+K</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              <span>Push</span>
              <ContextMenuShortcut>⇧+⌘+K</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem disabled>
              <span>Update Project</span>
              <ContextMenuShortcut>⌘+T</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSub overlap>
              <ContextMenuSubTrigger>GitHub</ContextMenuSubTrigger>
              <ContextMenuPortal>
                <ContextMenuSubContent>
                  <ContextMenuItem>Create Pull Request…</ContextMenuItem>
                  <ContextMenuItem>View Pull Requests</ContextMenuItem>
                  <ContextMenuItem>Sync Fork</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>Open on GitHub</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuPortal>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem
              checked={showGitLog()}
              onChange={setShowGitLog}
            >
              Show Git Log
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem
              checked={showHistory()}
              onChange={setShowHistory}
            >
              Show History
            </ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuGroupLabel>Branches</ContextMenuGroupLabel>
              <ContextMenuRadioGroup value={branch()} onChange={setBranch}>
                <ContextMenuRadioItem value="main">main</ContextMenuRadioItem>
                <ContextMenuRadioItem value="develop">
                  develop
                </ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenuPortal>
      </ContextMenu>
      <Command class="rounded-base border-2">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar class="mr-2 size-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile class="mr-2 size-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Rocket class="mr-2 size-4" />
              <span>Launch</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User class="mr-2 size-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Mail class="mr-2 size-4" />
              <span>Mail</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings class="mr-2 size-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
      <Dialog>
        <DialogTrigger as={Button<"button">}>Edit Profile</DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div class="grid gap-4 py-4">
            <div>Hello World!</div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <p class="text-sm text-muted-foreground">
        Press{" "}
        <kbd class="pointer-events-none inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 select-none">
          <span class="text-xs">⌘</span>J
        </kbd>
      </p>
      <CommandDialog open={open()} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar class="mr-2 size-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile class="mr-2 size-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Rocket class="mr-2 size-4" />
              <span>Launch</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User class="mr-2 size-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Mail class="mr-2 size-4" />
              <span>Mail</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings class="mr-2 size-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
      <Combobox<Food, Category>
        options={ALL_OPTIONS}
        optionValue="value"
        optionTextValue="label"
        optionLabel="label"
        optionDisabled="disabled"
        optionGroupChildren="options"
        placeholder="Search a food…"
        itemComponent={(props) => (
          <ComboboxItem item={props.item}>
            <ComboboxItemLabel>{props.item.rawValue.label}</ComboboxItemLabel>
            <ComboboxItemIndicator />
          </ComboboxItem>
        )}
        sectionComponent={(props) => (
          <ComboboxSection>{props.section.rawValue.label}</ComboboxSection>
        )}
      >
        <ComboboxControl aria-label="Food">
          <ComboboxInput />
          <ComboboxTrigger />
        </ComboboxControl>
        <ComboboxContent />
      </Combobox>
      <Collapsible class="w-[300px]">
        <CollapsibleTrigger class="flex w-full items-center justify-between rounded-md border p-3">
          <span>What is Kobalte ?</span>
          <ChevronDown />
        </CollapsibleTrigger>
        <CollapsibleContent class="mt-2 rounded-md border p-3">
          Kobalte is a UI toolkit for building accessible web apps and design
          systems with SolidJS. It provides a set of low-level UI components and
          primitives which can be the foundation for your design system
          implementation.
        </CollapsibleContent>
      </Collapsible>
      <div class="flex items-start space-x-2">
        <Checkbox id="terms1" />
        <Checkbox id="terms1" indeterminate />
        <div class="grid gap-1.5 leading-none">
          <p class="text-sm text-muted-foreground">
            You agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
      <Carousel class="w-full max-w-xs">
        <CarouselContent>
          <Index each={Array.from({ length: 5 })}>
            {(_, index) => (
              <CarouselItem>
                <div class="p-1">
                  <Card>
                    <CardContent class="flex aspect-square items-center justify-center p-6">
                      <span class="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )}
          </Index>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Callout>
        <CalloutTitle>Default</CalloutTitle>
        <CalloutContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          cupiditate sapiente officiis ullam, nulla nam sunt? Ipsa facilis ut
          aspernatur debitis. Qui dolorem modi, assumenda nihil eligendi commodi
          tempore eos?
        </CalloutContent>
      </Callout>
      <Callout variant={"success"}>
        <CalloutTitle>Success</CalloutTitle>
        <CalloutContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          cupiditate sapiente officiis ullam, nulla nam sunt? Ipsa facilis ut
          aspernatur debitis. Qui dolorem modi, assumenda nihil eligendi commodi
          tempore eos?
        </CalloutContent>
      </Callout>
      <Callout variant={"info"}>
        <CalloutTitle>Success</CalloutTitle>
        <CalloutContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          cupiditate sapiente officiis ullam, nulla nam sunt? Ipsa facilis ut
          aspernatur debitis. Qui dolorem modi, assumenda nihil eligendi commodi
          tempore eos?
        </CalloutContent>
      </Callout>
      <Callout variant={"warning"}>
        <CalloutTitle>Warning</CalloutTitle>
        <CalloutContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          cupiditate sapiente officiis ullam, nulla nam sunt? Ipsa facilis ut
          aspernatur debitis. Qui dolorem modi, assumenda nihil eligendi commodi
          tempore eos?
        </CalloutContent>
      </Callout>
      <Callout variant={"error"}>
        <CalloutTitle>Error</CalloutTitle>
        <CalloutContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          cupiditate sapiente officiis ullam, nulla nam sunt? Ipsa facilis ut
          aspernatur debitis. Qui dolorem modi, assumenda nihil eligendi commodi
          tempore eos?
        </CalloutContent>
      </Callout>
      <Card class="w-[380px]">
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>You have 3 unread messages.</CardDescription>
          <CardAction>
            <Button variant="neutral" size="icon">
              <LucideX class="size-4" />
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent class="grid gap-4">
          <div class="flex items-center space-x-4 rounded-md border p-4">
            <LucideBell class="size-6" />
            <div class="flex-1 space-y-1">
              <p class="text-sm leading-none font-medium">Push Notifications</p>
              <p class="text-sm text-muted-foreground">
                Send notifications to device.
              </p>
            </div>
          </div>
          <div>
            <For each={notifications}>
              {(notification) => (
                <div class="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span class="flex size-2 translate-y-1 rounded-full bg-sky-500" />
                  <div class="space-y-1">
                    <p class="text-sm leading-none font-medium">
                      {notification.title}
                    </p>
                    <p class="text-sm text-muted-foreground">
                      {notification.description}
                    </p>
                  </div>
                </div>
              )}
            </For>
          </div>
        </CardContent>
        <CardFooter>
          <Button class="w-full">
            <LucideCheck class="mr-2 size-4" /> Mark all as read
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Button size="icon">Button</Button>
      <Button size="xs">Button</Button>
      <Button size="sm">Button</Button>
      <Button>Button</Button>
      <Button size="lg">Button</Button>
      <Button size="xl">Button</Button>
      <Button variant="no-shadow">Button</Button>
      <Button variant="neutral">Button</Button>
      <Button variant="neutral-no-shadow">Button</Button>
      <Button variant="reverse">Button</Button>
      <Button variant="link">Button</Button>
      <Button variant="success">Button</Button>
      <Button variant="info">Button</Button>
      <Button variant="warning">Button</Button>
      <Button variant="error">Button</Button>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbEllipsis />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink current>Breadcrumbs</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div class="flex flex-col gap-4">
        <p>BadgeDelta with pre-defined status icons</p>
        <div class="flex flex-wrap gap-2">
          <BadgeDelta deltaType="increase">text</BadgeDelta>
          <BadgeDelta deltaType="moderateIncrease">text</BadgeDelta>
          <BadgeDelta deltaType="unchanged">text</BadgeDelta>
          <BadgeDelta deltaType="moderateDecrease">text</BadgeDelta>
          <BadgeDelta deltaType="decrease">text</BadgeDelta>
        </div>
        <p>BadgeDelta without text</p>
        <div class="flex flex-wrap gap-2">
          <BadgeDelta deltaType="increase" />
          <BadgeDelta deltaType="moderateIncrease" />
          <BadgeDelta deltaType="unchanged" />
          <BadgeDelta deltaType="moderateDecrease" />
          <BadgeDelta deltaType="decrease" />
        </div>
      </div>
      <Badge>Badge</Badge>
      <Badge variant="neutral">Badge</Badge>
      <Badge round>Round</Badge>
      <Avatar>
        <AvatarImage src={tanstack.src} />
        <AvatarFallback>EK</AvatarFallback>
      </Avatar>
      <AlertDialog>
        <AlertDialogTrigger as={Button}>Show Dialog</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Alert Dialog</AlertDialogTitle>
          <AlertDialogDescription>
            An Alert Dialog enables assistive technologies and browsers to
            distinguish alert dialogs from other dialogs so they have the option
            of giving alert dialogs special treatment, such as playing a system
            alert sound.
          </AlertDialogDescription>
        </AlertDialogContent>
      </AlertDialog>
      <Alert>
        <TerminalIcon />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <TerminalIcon />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
      <Accordion multiple={false} collapsible class="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components'
            aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
