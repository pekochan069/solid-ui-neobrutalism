import type {
  CellProps,
  CellTriggerProps,
  DynamicProps,
  HeadCellProps,
  LabelProps,
  NavProps,
  RootMultipleProps,
  RootProps,
  RootRangeProps,
  RootSingleProps,
  TableProps,
} from "@corvu/calendar";
import type { ValidComponent } from "solid-js";

import {
  createMemo,
  Index,
  Match,
  mergeProps,
  Show,
  splitProps,
  Switch,
} from "solid-js";
import CalendarPrimitive from "@corvu/calendar";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-solid";

import { Button } from "./button";

const CalendarRoot = (props: RootProps) => {
  return <CalendarPrimitive data-slot="calendar" {...props} />;
};

type CalendarNavProps<T extends ValidComponent = "button"> = DynamicProps<
  T,
  NavProps<T>
>;

const CalendarNav = <T extends ValidComponent = "button">(
  props: CalendarNavProps<T>,
) => {
  return <CalendarPrimitive.Nav data-slot="calendar-nav" {...props} />;
};

const CalendarLabel = <T extends ValidComponent = "h2">(
  props: DynamicProps<T, LabelProps<T>>,
) => {
  return <CalendarPrimitive.Label data-slot="calendar-label" {...props} />;
};

const CalendarCell = <T extends ValidComponent = "td">(
  props: DynamicProps<T, CellProps<T>>,
) => {
  return <CalendarPrimitive.Cell data-slot="calendar-cell" {...props} />;
};

const CalendarCellTrigger = <T extends ValidComponent = "button">(
  props: DynamicProps<T, CellTriggerProps<T>>,
) => {
  return (
    <CalendarPrimitive.CellTrigger
      data-slot="calendar-cell-trigger"
      {...props}
    />
  );
};

const CalendarHeadCell = <T extends ValidComponent = "th">(
  props: DynamicProps<T, HeadCellProps<T>>,
) => {
  return (
    <CalendarPrimitive.HeadCell data-slot="calendar-head-cell" {...props} />
  );
};

const CalendarTable = <T extends ValidComponent = "table">(
  props: DynamicProps<T, TableProps<T>>,
) => {
  return <CalendarPrimitive.Table data-slot="calendar-table" {...props} />;
};

interface SingleCalendarProps extends Omit<RootSingleProps, "children"> {
  locales: Intl.LocalesArgument;
}

const SingleCalendar = (props: SingleCalendarProps) => {
  const [local, rest] = splitProps(props, ["mode", "locales"]);
  const formatWeekdayLong = createMemo(
    () =>
      new Intl.DateTimeFormat(local.locales, {
        weekday: "long",
      }),
  );
  const formatWeekdayShort = createMemo(
    () =>
      new Intl.DateTimeFormat(local.locales, {
        weekday: "short",
      }),
  );
  const formatMonth = createMemo(
    () =>
      new Intl.DateTimeFormat(local.locales, {
        year: "numeric",
        month: "long",
      }),
  );
  return (
    <CalendarRoot mode="single" {...rest}>
      {(calendarProps) => (
        <div class="my-4 rounded-base border-2 border-border p-3">
          <div class="flex items-center justify-between">
            <CalendarNav
              as={Button}
              action="prev-month"
              aria-label="Go to previous month"
              variant="neutral-no-shadow"
              size="icon"
              class="size-7"
            >
              <ChevronLeftIcon class="size-5" />
            </CalendarNav>
            <CalendarLabel class="text-sm">
              {formatMonth().format(calendarProps.month)}
            </CalendarLabel>
            <CalendarNav
              as={Button}
              action="next-month"
              aria-label="Go to next month"
              variant="neutral-no-shadow"
              size="icon"
              class="size-7"
            >
              <ChevronRightIcon class="size-5" />
            </CalendarNav>
          </div>
          <CalendarTable class="mt-3">
            <thead>
              <tr>
                <Index each={calendarProps.weekdays}>
                  {(weekday) => (
                    <CalendarHeadCell
                      abbr={formatWeekdayLong().format(weekday())}
                      class="w-8 pb-1 text-xs font-normal opacity-65"
                    >
                      {formatWeekdayShort().format(weekday())}
                    </CalendarHeadCell>
                  )}
                </Index>
              </tr>
            </thead>
            <tbody>
              <Index each={calendarProps.weeks}>
                {(week) => (
                  <tr>
                    <Index each={week()}>
                      {(day) => (
                        <CalendarCell class="p-0">
                          <CalendarCellTrigger
                            day={day()}
                            class="size-8 rounded-base text-sm transition-colors duration-100 focus-visible:bg-main/80 disabled:pointer-events-none disabled:opacity-40 data-selected:border-2 data-selected:border-border data-selected:bg-main! data-selected:text-main-foreground! data-today:bg-main/50 md:hover:bg-main/80"
                          >
                            {day().getDate()}
                          </CalendarCellTrigger>
                        </CalendarCell>
                      )}
                    </Index>
                  </tr>
                )}
              </Index>
            </tbody>
          </CalendarTable>
        </div>
      )}
    </CalendarRoot>
  );
};

interface MultipleCalendarProps extends Omit<RootMultipleProps, "children"> {
  locales: Intl.LocalesArgument;
  numberOfMonths: number;
}

const MultipleCalendar = (props: MultipleCalendarProps) => {
  const [local, rest] = splitProps(props, ["mode", "locales"]);
  const formatWeekdayLong = createMemo(
    () =>
      new Intl.DateTimeFormat(local.locales, {
        weekday: "long",
      }),
  );
  const formatWeekdayShort = createMemo(
    () =>
      new Intl.DateTimeFormat(local.locales, {
        weekday: "short",
      }),
  );
  const formatMonth = createMemo(
    () =>
      new Intl.DateTimeFormat(local.locales, {
        year: "numeric",
        month: "long",
      }),
  );
  return (
    <CalendarRoot mode="multiple" {...rest}>
      {(calendarProps) => (
        <div class="my-4 rounded-base border-2 border-border p-3">
          <div class="flex items-center justify-between">
            <CalendarNav
              as={Button}
              action="prev-month"
              aria-label="Go to previous month"
              variant="neutral-no-shadow"
              size="icon"
              class="size-7"
            >
              <ChevronLeftIcon class="size-5" />
            </CalendarNav>
            <CalendarLabel class="text-sm">
              {formatMonth().format(calendarProps.month)}
            </CalendarLabel>
            <CalendarNav
              as={Button}
              action="next-month"
              aria-label="Go to next month"
              variant="neutral-no-shadow"
              size="icon"
              class="size-7"
            >
              <ChevronRightIcon class="size-5" />
            </CalendarNav>
          </div>
          <CalendarTable class="mt-3">
            <thead>
              <tr>
                <Index each={calendarProps.weekdays}>
                  {(weekday) => (
                    <CalendarHeadCell
                      abbr={formatWeekdayLong().format(weekday())}
                      class="w-8 pb-1 text-xs font-normal opacity-65"
                    >
                      {formatWeekdayShort().format(weekday())}
                    </CalendarHeadCell>
                  )}
                </Index>
              </tr>
            </thead>
            <tbody>
              <Index each={calendarProps.weeks}>
                {(week) => (
                  <tr>
                    <Index each={week()}>
                      {(day) => (
                        <CalendarCell class="p-0">
                          <CalendarCellTrigger
                            day={day()}
                            class="size-8 rounded-base text-sm transition-colors duration-100 focus-visible:bg-main/80 disabled:pointer-events-none disabled:opacity-40 data-selected:border-2 data-selected:border-border data-selected:bg-main! data-selected:text-main-foreground! data-today:bg-main/50 md:hover:bg-main/80"
                          >
                            {day().getDate()}
                          </CalendarCellTrigger>
                        </CalendarCell>
                      )}
                    </Index>
                  </tr>
                )}
              </Index>
            </tbody>
          </CalendarTable>
        </div>
      )}
    </CalendarRoot>
  );
};

interface RangeCalendarProps
  extends Omit<RootRangeProps, "children" | "numberOfMonths"> {
  locales: Intl.LocalesArgument;
  numberOfMonths: number;
}

const RangeCalendar = (props: RangeCalendarProps) => {
  const [local, rest] = splitProps(props, [
    "mode",
    "locales",
    "numberOfMonths",
  ]);
  const formatWeekdayLong = createMemo(
    () =>
      new Intl.DateTimeFormat(props.locales, {
        weekday: "long",
      }),
  );
  const formatWeekdayShort = createMemo(
    () =>
      new Intl.DateTimeFormat(props.locales, {
        weekday: "short",
      }),
  );
  const formatMonth = createMemo(
    () =>
      new Intl.DateTimeFormat(props.locales, {
        year: "numeric",
        month: "long",
      }),
  );
  return (
    <CalendarRoot mode="range" numberOfMonths={local.numberOfMonths} {...rest}>
      {(calendarProps) => (
        <div class="relative my-4 rounded-base border-2 border-border p-3">
          <div class="space-y-4 md:flex md:space-y-0 md:space-x-4">
            <Index each={calendarProps.months}>
              {(month, index) => (
                <div>
                  <div class="flex h-7 items-center justify-between">
                    <Show when={index === 0} fallback={<div class="w-7" />}>
                      <CalendarNav
                        as={Button}
                        action="prev-month"
                        aria-label="Go to previous month"
                        variant="neutral-no-shadow"
                        size="icon"
                        class="size-7"
                      >
                        <ChevronLeftIcon class="size-5" />
                      </CalendarNav>
                    </Show>
                    <CalendarLabel index={index} class="text-sm">
                      {formatMonth().format(month().month)}
                    </CalendarLabel>
                    <Show
                      when={index === local.numberOfMonths - 1}
                      fallback={<div class="w-7" />}
                    >
                      <CalendarNav
                        as={Button}
                        action="next-month"
                        aria-label="Go to next month"
                        variant="neutral-no-shadow"
                        size="icon"
                        class="size-7"
                      >
                        <ChevronRightIcon class="size-5" />
                      </CalendarNav>
                    </Show>
                  </div>
                  <CalendarTable index={index} class="mt-3">
                    <thead>
                      <tr>
                        <Index each={calendarProps.weekdays}>
                          {(weekday) => (
                            <CalendarHeadCell
                              abbr={formatWeekdayLong().format(weekday())}
                              class="w-8 flex-1 pb-1 text-xs font-normal opacity-65"
                            >
                              {formatWeekdayShort().format(weekday())}
                            </CalendarHeadCell>
                          )}
                        </Index>
                      </tr>
                    </thead>
                    <tbody>
                      <Index each={month().weeks}>
                        {(week) => (
                          <tr>
                            <Index each={week()}>
                              {(day) => (
                                <CalendarCell class="p-0 has-data-in-range:bg-main/40 has-data-in-range:first:rounded-l-base has-data-in-range:last:rounded-r-base has-data-range-end:rounded-r-base has-data-range-start:rounded-l-base has-[[disabled]]:opacity-40">
                                  <CalendarCellTrigger
                                    day={day()}
                                    month={month().month}
                                    class="inline-flex size-8 items-center justify-center rounded-base text-sm focus-visible:bg-main/80 disabled:pointer-events-none data-range-end:border-2 data-range-end:border-border data-range-end:bg-main data-range-start:border-2 data-range-start:border-border data-range-start:bg-main data-today:bg-main/50 md:hover:not-data-range-start:not-data-range-end:bg-main/80"
                                  >
                                    {day().getDate()}
                                  </CalendarCellTrigger>
                                </CalendarCell>
                              )}
                            </Index>
                          </tr>
                        )}
                      </Index>
                    </tbody>
                  </CalendarTable>
                </div>
              )}
            </Index>
          </div>
        </div>
      )}
    </CalendarRoot>
  );
};

interface CalendarSingleProps
  extends Omit<RootSingleProps, "children" | "mode"> {
  locales?: Intl.LocalesArgument;
  mode: "single";
}

interface CalendarMultipleProps
  extends Omit<RootMultipleProps, "children" | "mode"> {
  locales?: Intl.LocalesArgument;
  mode?: "multiple";
}

interface CalendarRangeProps extends Omit<RootRangeProps, "children" | "mode"> {
  locales?: Intl.LocalesArgument;
  mode: "range";
}

type CalendarProps =
  | CalendarSingleProps
  | CalendarMultipleProps
  | CalendarRangeProps;

const Calendar = (props: CalendarProps) => {
  const merged = mergeProps(
    {
      locales: "en" as Intl.LocalesArgument,
      numberOfMonths: 2,
    },
    props,
  );

  return (
    <Switch>
      <Match when={merged.mode === "single" || merged.mode === undefined}>
        <SingleCalendar {...(merged as SingleCalendarProps)} />
      </Match>
      <Match when={merged.mode === "multiple"}>
        <MultipleCalendar {...(merged as MultipleCalendarProps)} />
      </Match>
      <Match when={merged.mode === "range"}>
        <RangeCalendar {...(merged as RangeCalendarProps)} />
      </Match>
    </Switch>
  );
};

export {
  Calendar,
  type CalendarProps,
  SingleCalendar,
  type SingleCalendarProps,
  MultipleCalendar,
  type MultipleCalendarProps,
  RangeCalendar,
  type RangeCalendarProps,
  CalendarRoot,
  CalendarNav,
  CalendarLabel,
  CalendarCell,
  CalendarCellTrigger,
  CalendarHeadCell,
  CalendarTable,
};
