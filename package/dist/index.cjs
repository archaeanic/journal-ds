'use strict';

var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var AccordionPrimitive = require('@radix-ui/react-accordion');
var lucideReact = require('lucide-react');
var jsxRuntime = require('react/jsx-runtime');
var classVarianceAuthority = require('class-variance-authority');
var AlertDialogPrimitive = require('@radix-ui/react-alert-dialog');
var reactSlot = require('@radix-ui/react-slot');
var AspectRatioPrimitive = require('@radix-ui/react-aspect-ratio');
var AvatarPrimitive = require('@radix-ui/react-avatar');
var React2 = require('react');
var reactDayPicker = require('react-day-picker');
var useEmblaCarousel = require('embla-carousel-react');
var CheckboxPrimitive = require('@radix-ui/react-checkbox');
var CollapsiblePrimitive = require('@radix-ui/react-collapsible');
var cmdk = require('cmdk');
var DialogPrimitive = require('@radix-ui/react-dialog');
var ContextMenuPrimitive = require('@radix-ui/react-context-menu');
var vaul = require('vaul');
var DropdownMenuPrimitive = require('@radix-ui/react-dropdown-menu');
var reactHookForm = require('react-hook-form');
var LabelPrimitive = require('@radix-ui/react-label');
var HoverCardPrimitive = require('@radix-ui/react-hover-card');
var inputOtp = require('input-otp');
var MenubarPrimitive = require('@radix-ui/react-menubar');
var NavigationMenuPrimitive = require('@radix-ui/react-navigation-menu');
var PopoverPrimitive = require('@radix-ui/react-popover');
var ProgressPrimitive = require('@radix-ui/react-progress');
var RadioGroupPrimitive = require('@radix-ui/react-radio-group');
var ResizablePrimitive = require('react-resizable-panels');
var ScrollAreaPrimitive = require('@radix-ui/react-scroll-area');
var SelectPrimitive = require('@radix-ui/react-select');
var SeparatorPrimitive = require('@radix-ui/react-separator');
var SliderPrimitive = require('@radix-ui/react-slider');
var sonner = require('sonner');
var SwitchPrimitive = require('@radix-ui/react-switch');
var TabsPrimitive = require('@radix-ui/react-tabs');
var ToastPrimitives = require('@radix-ui/react-toast');
var TogglePrimitive = require('@radix-ui/react-toggle');
var ToggleGroupPrimitive = require('@radix-ui/react-toggle-group');
var TooltipPrimitive = require('@radix-ui/react-tooltip');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var AccordionPrimitive__namespace = /*#__PURE__*/_interopNamespace(AccordionPrimitive);
var AlertDialogPrimitive__namespace = /*#__PURE__*/_interopNamespace(AlertDialogPrimitive);
var AspectRatioPrimitive__namespace = /*#__PURE__*/_interopNamespace(AspectRatioPrimitive);
var AvatarPrimitive__namespace = /*#__PURE__*/_interopNamespace(AvatarPrimitive);
var React2__namespace = /*#__PURE__*/_interopNamespace(React2);
var useEmblaCarousel__default = /*#__PURE__*/_interopDefault(useEmblaCarousel);
var CheckboxPrimitive__namespace = /*#__PURE__*/_interopNamespace(CheckboxPrimitive);
var CollapsiblePrimitive__namespace = /*#__PURE__*/_interopNamespace(CollapsiblePrimitive);
var DialogPrimitive__namespace = /*#__PURE__*/_interopNamespace(DialogPrimitive);
var ContextMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(ContextMenuPrimitive);
var DropdownMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(DropdownMenuPrimitive);
var LabelPrimitive__namespace = /*#__PURE__*/_interopNamespace(LabelPrimitive);
var HoverCardPrimitive__namespace = /*#__PURE__*/_interopNamespace(HoverCardPrimitive);
var MenubarPrimitive__namespace = /*#__PURE__*/_interopNamespace(MenubarPrimitive);
var NavigationMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(NavigationMenuPrimitive);
var PopoverPrimitive__namespace = /*#__PURE__*/_interopNamespace(PopoverPrimitive);
var ProgressPrimitive__namespace = /*#__PURE__*/_interopNamespace(ProgressPrimitive);
var RadioGroupPrimitive__namespace = /*#__PURE__*/_interopNamespace(RadioGroupPrimitive);
var ResizablePrimitive__namespace = /*#__PURE__*/_interopNamespace(ResizablePrimitive);
var ScrollAreaPrimitive__namespace = /*#__PURE__*/_interopNamespace(ScrollAreaPrimitive);
var SelectPrimitive__namespace = /*#__PURE__*/_interopNamespace(SelectPrimitive);
var SeparatorPrimitive__namespace = /*#__PURE__*/_interopNamespace(SeparatorPrimitive);
var SliderPrimitive__namespace = /*#__PURE__*/_interopNamespace(SliderPrimitive);
var SwitchPrimitive__namespace = /*#__PURE__*/_interopNamespace(SwitchPrimitive);
var TabsPrimitive__namespace = /*#__PURE__*/_interopNamespace(TabsPrimitive);
var ToastPrimitives__namespace = /*#__PURE__*/_interopNamespace(ToastPrimitives);
var TogglePrimitive__namespace = /*#__PURE__*/_interopNamespace(TogglePrimitive);
var ToggleGroupPrimitive__namespace = /*#__PURE__*/_interopNamespace(ToggleGroupPrimitive);
var TooltipPrimitive__namespace = /*#__PURE__*/_interopNamespace(TooltipPrimitive);

// src/lib/utils.ts
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
function Accordion({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(AccordionPrimitive__namespace.Root, { "data-slot": "accordion", ...props });
}
function AccordionItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    AccordionPrimitive__namespace.Item,
    {
      "data-slot": "accordion-item",
      className: cn("border-b last:border-b-0", className),
      ...props
    }
  );
}
function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(AccordionPrimitive__namespace.Header, { className: "flex", children: /* @__PURE__ */ jsxRuntime.jsxs(
    AccordionPrimitive__namespace.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDownIcon, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function AccordionContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    AccordionPrimitive__namespace.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("pt-0 pb-4", className), children })
    }
  );
}
var alertVariants = classVarianceAuthority.cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Alert({
  className,
  variant,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: cn(alertVariants({ variant }), className),
      ...props
    }
  );
}
function AlertTitle({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "alert-title",
      className: cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      ),
      ...props
    }
  );
}
function AlertDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "alert-description",
      className: cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      ),
      ...props
    }
  );
}
var buttonVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? reactSlot.Slot : "button";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
function AlertDialog({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(AlertDialogPrimitive__namespace.Root, { "data-slot": "alert-dialog", ...props });
}
function AlertDialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(AlertDialogPrimitive__namespace.Trigger, { "data-slot": "alert-dialog-trigger", ...props });
}
function AlertDialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(AlertDialogPrimitive__namespace.Portal, { "data-slot": "alert-dialog-portal", ...props });
}
function AlertDialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    AlertDialogPrimitive__namespace.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function AlertDialogContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(AlertDialogPortal, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(AlertDialogOverlay, {}),
    /* @__PURE__ */ jsxRuntime.jsx(
      AlertDialogPrimitive__namespace.Content,
      {
        "data-slot": "alert-dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props
      }
    )
  ] });
}
function AlertDialogHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function AlertDialogFooter({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function AlertDialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    AlertDialogPrimitive__namespace.Title,
    {
      "data-slot": "alert-dialog-title",
      className: cn("text-lg font-semibold", className),
      ...props
    }
  );
}
function AlertDialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    AlertDialogPrimitive__namespace.Description,
    {
      "data-slot": "alert-dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function AlertDialogAction({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    AlertDialogPrimitive__namespace.Action,
    {
      className: cn(buttonVariants(), className),
      ...props
    }
  );
}
function AlertDialogCancel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    AlertDialogPrimitive__namespace.Cancel,
    {
      className: cn(buttonVariants({ variant: "outline" }), className),
      ...props
    }
  );
}
function AspectRatio({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(AspectRatioPrimitive__namespace.Root, { "data-slot": "aspect-ratio", ...props });
}
function Avatar({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    AvatarPrimitive__namespace.Root,
    {
      "data-slot": "avatar",
      className: cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      ),
      ...props
    }
  );
}
function AvatarImage({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    AvatarPrimitive__namespace.Image,
    {
      "data-slot": "avatar-image",
      className: cn("aspect-square size-full", className),
      ...props
    }
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    AvatarPrimitive__namespace.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      ),
      ...props
    }
  );
}
var badgeVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? reactSlot.Slot : "span";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}
function Breadcrumb({ ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...props });
}
function BreadcrumbList({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      ),
      ...props
    }
  );
}
function BreadcrumbItem({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: cn("inline-flex items-center gap-1.5", className),
      ...props
    }
  );
}
function BreadcrumbLink({
  asChild,
  className,
  ...props
}) {
  const Comp = asChild ? reactSlot.Slot : "a";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    {
      "data-slot": "breadcrumb-link",
      className: cn("hover:text-foreground transition-colors", className),
      ...props
    }
  );
}
function BreadcrumbPage({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn("text-foreground font-normal", className),
      ...props
    }
  );
}
function BreadcrumbSeparator({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("[&>svg]:size-3.5", className),
      ...props,
      children: children ?? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, {})
    }
  );
}
function BreadcrumbEllipsis({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("flex size-9 items-center justify-center", className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.MoreHorizontal, { className: "size-4" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}) {
  const defaultClassNames = reactDayPicker.getDefaultClassNames();
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactDayPicker.DayPicker,
    {
      showOutsideDays,
      className: cn(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      ),
      captionLayout,
      formatters: {
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
        ...formatters
      },
      classNames: {
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "flex gap-4 flex-col md:flex-row relative",
          defaultClassNames.months
        ),
        month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
        nav: cn(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute bg-popover inset-0 opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          defaultClassNames.weekday
        ),
        week: cn("flex w-full mt-2", defaultClassNames.week),
        week_number_header: cn(
          "select-none w-(--cell-size)",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] select-none text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-md bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames
      },
      components: {
        Root: ({ className: className2, rootRef, ...props2 }) => {
          return /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              "data-slot": "calendar",
              ref: rootRef,
              className: cn(className2),
              ...props2
            }
          );
        },
        Chevron: ({ className: className2, orientation, ...props2 }) => {
          if (orientation === "left") {
            return /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeftIcon, { className: cn("size-4", className2), ...props2 });
          }
          if (orientation === "right") {
            return /* @__PURE__ */ jsxRuntime.jsx(
              lucideReact.ChevronRightIcon,
              {
                className: cn("size-4", className2),
                ...props2
              }
            );
          }
          return /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDownIcon, { className: cn("size-4", className2), ...props2 });
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props2 }) => {
          return /* @__PURE__ */ jsxRuntime.jsx("td", { ...props2, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children }) });
        },
        ...components
      },
      ...props
    }
  );
}
function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}) {
  const defaultClassNames = reactDayPicker.getDefaultClassNames();
  const ref = React2__namespace.useRef(null);
  React2__namespace.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    Button,
    {
      ref,
      variant: "ghost",
      size: "icon",
      "data-day": day.date.toLocaleDateString(),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      className: cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      ),
      ...props
    }
  );
}
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function CardAction({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "card-action",
      className: cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: cn("flex items-center px-6 [.border-t]:pt-6", className),
      ...props
    }
  );
}
var CarouselContext = React2__namespace.createContext(null);
function useCarousel() {
  const context = React2__namespace.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}) {
  const [carouselRef, api] = useEmblaCarousel__default.default(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React2__namespace.useState(false);
  const [canScrollNext, setCanScrollNext] = React2__namespace.useState(false);
  const onSelect = React2__namespace.useCallback((api2) => {
    if (!api2) return;
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = React2__namespace.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = React2__namespace.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = React2__namespace.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  React2__namespace.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);
  React2__namespace.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...props,
          children
        }
      )
    }
  );
}
function CarouselContent({ className, ...props }) {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref: carouselRef,
      className: "overflow-hidden",
      "data-slot": "carousel-content",
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: cn(
            "flex",
            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            className
          ),
          ...props
        }
      )
    }
  );
}
function CarouselItem({ className, ...props }) {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
}
function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon",
  ...props
}) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Button,
    {
      "data-slot": "carousel-previous",
      variant,
      size,
      className: cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowLeft, {}),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function CarouselNext({
  className,
  variant = "outline",
  size = "icon",
  ...props
}) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Button,
    {
      "data-slot": "carousel-next",
      variant,
      size,
      className: cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowRight, {}),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    CheckboxPrimitive__namespace.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        CheckboxPrimitive__namespace.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CheckIcon, { className: "size-3.5" })
        }
      )
    }
  );
}
function Collapsible({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(CollapsiblePrimitive__namespace.Root, { "data-slot": "collapsible", ...props });
}
function CollapsibleTrigger2({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    CollapsiblePrimitive__namespace.CollapsibleTrigger,
    {
      "data-slot": "collapsible-trigger",
      ...props
    }
  );
}
function CollapsibleContent2({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    CollapsiblePrimitive__namespace.CollapsibleContent,
    {
      "data-slot": "collapsible-content",
      ...props
    }
  );
}
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(DialogPrimitive__namespace.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(DialogPrimitive__namespace.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(DialogPrimitive__namespace.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogClose({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(DialogPrimitive__namespace.Close, { "data-slot": "dialog-close", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    DialogPrimitive__namespace.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsxRuntime.jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxRuntime.jsxs(
      DialogPrimitive__namespace.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxRuntime.jsxs(
            DialogPrimitive__namespace.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(lucideReact.XIcon, {}),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    DialogPrimitive__namespace.Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    DialogPrimitive__namespace.Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function Command({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    cmdk.Command,
    {
      "data-slot": "command",
      className: cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className
      ),
      ...props
    }
  );
}
function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(Dialog, { ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(DialogHeader, { className: "sr-only", children: [
      /* @__PURE__ */ jsxRuntime.jsx(DialogTitle, { children: title }),
      /* @__PURE__ */ jsxRuntime.jsx(DialogDescription, { children: description })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(
      DialogContent,
      {
        className: cn("overflow-hidden p-0", className),
        showCloseButton,
        children: /* @__PURE__ */ jsxRuntime.jsx(Command, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children })
      }
    )
  ] });
}
function CommandInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.SearchIcon, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          cmdk.Command.Input,
          {
            "data-slot": "command-input",
            className: cn(
              "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              className
            ),
            ...props
          }
        )
      ]
    }
  );
}
function CommandList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    cmdk.Command.List,
    {
      "data-slot": "command-list",
      className: cn(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className
      ),
      ...props
    }
  );
}
function CommandEmpty({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    cmdk.Command.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...props
    }
  );
}
function CommandGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    cmdk.Command.Group,
    {
      "data-slot": "command-group",
      className: cn(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        className
      ),
      ...props
    }
  );
}
function CommandSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    cmdk.Command.Separator,
    {
      "data-slot": "command-separator",
      className: cn("bg-border -mx-1 h-px", className),
      ...props
    }
  );
}
function CommandItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    cmdk.Command.Item,
    {
      "data-slot": "command-item",
      className: cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function CommandShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      "data-slot": "command-shortcut",
      className: cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      ),
      ...props
    }
  );
}
function ContextMenu({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(ContextMenuPrimitive__namespace.Root, { "data-slot": "context-menu", ...props });
}
function ContextMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(ContextMenuPrimitive__namespace.Trigger, { "data-slot": "context-menu-trigger", ...props });
}
function ContextMenuGroup({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(ContextMenuPrimitive__namespace.Group, { "data-slot": "context-menu-group", ...props });
}
function ContextMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(ContextMenuPrimitive__namespace.Portal, { "data-slot": "context-menu-portal", ...props });
}
function ContextMenuSub({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(ContextMenuPrimitive__namespace.Sub, { "data-slot": "context-menu-sub", ...props });
}
function ContextMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    ContextMenuPrimitive__namespace.RadioGroup,
    {
      "data-slot": "context-menu-radio-group",
      ...props
    }
  );
}
function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    ContextMenuPrimitive__namespace.SubTrigger,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRightIcon, { className: "ml-auto" })
      ]
    }
  );
}
function ContextMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    ContextMenuPrimitive__namespace.SubContent,
    {
      "data-slot": "context-menu-sub-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      ),
      ...props
    }
  );
}
function ContextMenuContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(ContextMenuPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
    ContextMenuPrimitive__namespace.Content,
    {
      "data-slot": "context-menu-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ) });
}
function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    ContextMenuPrimitive__namespace.Item,
    {
      "data-slot": "context-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    ContextMenuPrimitive__namespace.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(ContextMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CheckIcon, { className: "size-4" }) }) }),
        children
      ]
    }
  );
}
function ContextMenuRadioItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    ContextMenuPrimitive__namespace.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(ContextMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CircleIcon, { className: "size-2 fill-current" }) }) }),
        children
      ]
    }
  );
}
function ContextMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    ContextMenuPrimitive__namespace.Label,
    {
      "data-slot": "context-menu-label",
      "data-inset": inset,
      className: cn(
        "text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      ),
      ...props
    }
  );
}
function ContextMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    ContextMenuPrimitive__namespace.Separator,
    {
      "data-slot": "context-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
function ContextMenuShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      "data-slot": "context-menu-shortcut",
      className: cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      ),
      ...props
    }
  );
}
function Drawer({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(vaul.Drawer.Root, { "data-slot": "drawer", ...props });
}
function DrawerTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(vaul.Drawer.Trigger, { "data-slot": "drawer-trigger", ...props });
}
function DrawerPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(vaul.Drawer.Portal, { "data-slot": "drawer-portal", ...props });
}
function DrawerClose({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(vaul.Drawer.Close, { "data-slot": "drawer-close", ...props });
}
function DrawerOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    vaul.Drawer.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DrawerContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(DrawerPortal, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ jsxRuntime.jsx(DrawerOverlay, {}),
    /* @__PURE__ */ jsxRuntime.jsxs(
      vaul.Drawer.Content,
      {
        "data-slot": "drawer-content",
        className: cn(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
          children
        ]
      }
    )
  ] });
}
function DrawerHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "drawer-header",
      className: cn(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
        className
      ),
      ...props
    }
  );
}
function DrawerFooter({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "drawer-footer",
      className: cn("mt-auto flex flex-col gap-2 p-4", className),
      ...props
    }
  );
}
function DrawerTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    vaul.Drawer.Title,
    {
      "data-slot": "drawer-title",
      className: cn("text-foreground font-semibold", className),
      ...props
    }
  );
}
function DrawerDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    vaul.Drawer.Description,
    {
      "data-slot": "drawer-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Portal, { "data-slot": "dropdown-menu-portal", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...props
    }
  );
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenuGroup({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DropdownMenuPrimitive__namespace.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CheckIcon, { className: "size-4" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.RadioGroup,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...props
    }
  );
}
function DropdownMenuRadioItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DropdownMenuPrimitive__namespace.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CircleIcon, { className: "size-2 fill-current" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
function DropdownMenuShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSub({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Sub, { "data-slot": "dropdown-menu-sub", ...props });
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DropdownMenuPrimitive__namespace.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRightIcon, { className: "ml-auto size-4" })
      ]
    }
  );
}
function DropdownMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      ),
      ...props
    }
  );
}
function Label3({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    LabelPrimitive__namespace.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
var Form = reactHookForm.FormProvider;
var FormFieldContext = React2__namespace.createContext(
  {}
);
var FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsxRuntime.jsx(reactHookForm.Controller, { ...props }) });
};
var useFormField = () => {
  const fieldContext = React2__namespace.useContext(FormFieldContext);
  const itemContext = React2__namespace.useContext(FormItemContext);
  const { getFieldState } = reactHookForm.useFormContext();
  const formState = reactHookForm.useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
var FormItemContext = React2__namespace.createContext(
  {}
);
function FormItem({ className, ...props }) {
  const id = React2__namespace.useId();
  return /* @__PURE__ */ jsxRuntime.jsx(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "form-item",
      className: cn("grid gap-2", className),
      ...props
    }
  ) });
}
function FormLabel({
  className,
  ...props
}) {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsxRuntime.jsx(
    Label3,
    {
      "data-slot": "form-label",
      "data-error": !!error,
      className: cn("data-[error=true]:text-destructive", className),
      htmlFor: formItemId,
      ...props
    }
  );
}
function FormControl({ ...props }) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactSlot.Slot,
    {
      "data-slot": "form-control",
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
}
function FormDescription({ className, ...props }) {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "p",
    {
      "data-slot": "form-description",
      id: formDescriptionId,
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function FormMessage({ className, ...props }) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    "p",
    {
      "data-slot": "form-message",
      id: formMessageId,
      className: cn("text-destructive text-sm", className),
      ...props,
      children: body
    }
  );
}
function HoverCard({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(HoverCardPrimitive__namespace.Root, { "data-slot": "hover-card", ...props });
}
function HoverCardTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(HoverCardPrimitive__namespace.Trigger, { "data-slot": "hover-card-trigger", ...props });
}
function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(HoverCardPrimitive__namespace.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ jsxRuntime.jsx(
    HoverCardPrimitive__namespace.Content,
    {
      "data-slot": "hover-card-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        className
      ),
      ...props
    }
  ) });
}
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
function InputOTP({
  className,
  containerClassName,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    inputOtp.OTPInput,
    {
      "data-slot": "input-otp",
      containerClassName: cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      ),
      className: cn("disabled:cursor-not-allowed", className),
      ...props
    }
  );
}
function InputOTPGroup({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "input-otp-group",
      className: cn("flex items-center", className),
      ...props
    }
  );
}
function InputOTPSlot({
  index,
  className,
  ...props
}) {
  const inputOTPContext = React2__namespace.useContext(inputOtp.OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": isActive,
      className: cn(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        className
      ),
      ...props,
      children: [
        char,
        hasFakeCaret && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function InputOTPSeparator({ ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { "data-slot": "input-otp-separator", role: "separator", ...props, children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.MinusIcon, {}) });
}
function Menubar({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    MenubarPrimitive__namespace.Root,
    {
      "data-slot": "menubar",
      className: cn(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        className
      ),
      ...props
    }
  );
}
function MenubarMenu({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(MenubarPrimitive__namespace.Menu, { "data-slot": "menubar-menu", ...props });
}
function MenubarGroup({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(MenubarPrimitive__namespace.Group, { "data-slot": "menubar-group", ...props });
}
function MenubarPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(MenubarPrimitive__namespace.Portal, { "data-slot": "menubar-portal", ...props });
}
function MenubarRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(MenubarPrimitive__namespace.RadioGroup, { "data-slot": "menubar-radio-group", ...props });
}
function MenubarTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    MenubarPrimitive__namespace.Trigger,
    {
      "data-slot": "menubar-trigger",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
        className
      ),
      ...props
    }
  );
}
function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(MenubarPortal, { children: /* @__PURE__ */ jsxRuntime.jsx(
    MenubarPrimitive__namespace.Content,
    {
      "data-slot": "menubar-content",
      align,
      alignOffset,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ) });
}
function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    MenubarPrimitive__namespace.Item,
    {
      "data-slot": "menubar-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    MenubarPrimitive__namespace.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(MenubarPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CheckIcon, { className: "size-4" }) }) }),
        children
      ]
    }
  );
}
function MenubarRadioItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    MenubarPrimitive__namespace.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(MenubarPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CircleIcon, { className: "size-2 fill-current" }) }) }),
        children
      ]
    }
  );
}
function MenubarLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    MenubarPrimitive__namespace.Label,
    {
      "data-slot": "menubar-label",
      "data-inset": inset,
      className: cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      ),
      ...props
    }
  );
}
function MenubarSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    MenubarPrimitive__namespace.Separator,
    {
      "data-slot": "menubar-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
function MenubarShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      "data-slot": "menubar-shortcut",
      className: cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      ),
      ...props
    }
  );
}
function MenubarSub({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(MenubarPrimitive__namespace.Sub, { "data-slot": "menubar-sub", ...props });
}
function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    MenubarPrimitive__namespace.SubTrigger,
    {
      "data-slot": "menubar-sub-trigger",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRightIcon, { className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function MenubarSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    MenubarPrimitive__namespace.SubContent,
    {
      "data-slot": "menubar-sub-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      ),
      ...props
    }
  );
}
function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    NavigationMenuPrimitive__namespace.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": viewport,
      className: cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      ),
      ...props,
      children: [
        children,
        viewport && /* @__PURE__ */ jsxRuntime.jsx(NavigationMenuViewport, {})
      ]
    }
  );
}
function NavigationMenuList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    NavigationMenuPrimitive__namespace.List,
    {
      "data-slot": "navigation-menu-list",
      className: cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    NavigationMenuPrimitive__namespace.Item,
    {
      "data-slot": "navigation-menu-item",
      className: cn("relative", className),
      ...props
    }
  );
}
var navigationMenuTriggerStyle = classVarianceAuthority.cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function NavigationMenuTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    NavigationMenuPrimitive__namespace.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: cn(navigationMenuTriggerStyle(), "group", className),
      ...props,
      children: [
        children,
        " ",
        /* @__PURE__ */ jsxRuntime.jsx(
          lucideReact.ChevronDownIcon,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function NavigationMenuContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    NavigationMenuPrimitive__namespace.Content,
    {
      "data-slot": "navigation-menu-content",
      className: cn(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuViewport({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: cn(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      ),
      children: /* @__PURE__ */ jsxRuntime.jsx(
        NavigationMenuPrimitive__namespace.Viewport,
        {
          "data-slot": "navigation-menu-viewport",
          className: cn(
            "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
            className
          ),
          ...props
        }
      )
    }
  );
}
function NavigationMenuLink({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    NavigationMenuPrimitive__namespace.Link,
    {
      "data-slot": "navigation-menu-link",
      className: cn(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuIndicator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    NavigationMenuPrimitive__namespace.Indicator,
    {
      "data-slot": "navigation-menu-indicator",
      className: cn(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" })
    }
  );
}
function Pagination({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: cn("mx-auto flex w-full justify-center", className),
      ...props
    }
  );
}
function PaginationContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "ul",
    {
      "data-slot": "pagination-content",
      className: cn("flex flex-row items-center gap-1", className),
      ...props
    }
  );
}
function PaginationItem({ ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx("li", { "data-slot": "pagination-item", ...props });
}
function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "a",
    {
      "aria-current": isActive ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": isActive,
      className: cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size
        }),
        className
      ),
      ...props
    }
  );
}
function PaginationPrevious({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    PaginationLink,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: cn("gap-1 px-2.5 sm:pl-2.5", className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeftIcon, {}),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "hidden sm:block", children: "Previous" })
      ]
    }
  );
}
function PaginationNext({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    PaginationLink,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: cn("gap-1 px-2.5 sm:pr-2.5", className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "hidden sm:block", children: "Next" }),
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRightIcon, {})
      ]
    }
  );
}
function PaginationEllipsis({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    {
      "aria-hidden": true,
      "data-slot": "pagination-ellipsis",
      className: cn("flex size-9 items-center justify-center", className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.MoreHorizontalIcon, { className: "size-4" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
function Popover({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
    PopoverPrimitive__namespace.Content,
    {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        className
      ),
      ...props
    }
  ) });
}
function PopoverAnchor({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Anchor, { "data-slot": "popover-anchor", ...props });
}
function Progress({
  className,
  value,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    ProgressPrimitive__namespace.Root,
    {
      "data-slot": "progress",
      className: cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        ProgressPrimitive__namespace.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (value || 0)}%)` }
        }
      )
    }
  );
}
function RadioGroup4({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    RadioGroupPrimitive__namespace.Root,
    {
      "data-slot": "radio-group",
      className: cn("grid gap-3", className),
      ...props
    }
  );
}
function RadioGroupItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    RadioGroupPrimitive__namespace.Item,
    {
      "data-slot": "radio-group-item",
      className: cn(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        RadioGroupPrimitive__namespace.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CircleIcon, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
function ResizablePanelGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    ResizablePrimitive__namespace.PanelGroup,
    {
      "data-slot": "resizable-panel-group",
      className: cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        className
      ),
      ...props
    }
  );
}
function ResizablePanel({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(ResizablePrimitive__namespace.Panel, { "data-slot": "resizable-panel", ...props });
}
function ResizableHandle({
  withHandle,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    ResizablePrimitive__namespace.PanelResizeHandle,
    {
      "data-slot": "resizable-handle",
      className: cn(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        className
      ),
      ...props,
      children: withHandle && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.GripVerticalIcon, { className: "size-2.5" }) })
    }
  );
}
function ScrollArea({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    ScrollAreaPrimitive__namespace.Root,
    {
      "data-slot": "scroll-area",
      className: cn("relative", className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          ScrollAreaPrimitive__namespace.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(ScrollBar, {}),
        /* @__PURE__ */ jsxRuntime.jsx(ScrollAreaPrimitive__namespace.Corner, {})
      ]
    }
  );
}
function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    ScrollAreaPrimitive__namespace.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation,
      className: cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        ScrollAreaPrimitive__namespace.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
function Select({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Root, { "data-slot": "select", ...props });
}
function SelectGroup({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Group, { "data-slot": "select-group", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    SelectPrimitive__namespace.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDownIcon, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsxs(
    SelectPrimitive__namespace.Content,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsxRuntime.jsx(
          SelectPrimitive__namespace.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    SelectPrimitive__namespace.Label,
    {
      "data-slot": "select-label",
      className: cn("text-muted-foreground px-2 py-1.5 text-xs", className),
      ...props
    }
  );
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    SelectPrimitive__namespace.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CheckIcon, { className: "size-4" }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.ItemText, { children })
      ]
    }
  );
}
function SelectSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    SelectPrimitive__namespace.Separator,
    {
      "data-slot": "select-separator",
      className: cn("bg-border pointer-events-none -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    SelectPrimitive__namespace.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronUpIcon, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    SelectPrimitive__namespace.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDownIcon, { className: "size-4" })
    }
  );
}
function Separator5({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    SeparatorPrimitive__namespace.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(DialogPrimitive__namespace.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(DialogPrimitive__namespace.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetClose({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(DialogPrimitive__namespace.Close, { "data-slot": "sheet-close", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(DialogPrimitive__namespace.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    DialogPrimitive__namespace.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxRuntime.jsxs(
      DialogPrimitive__namespace.Content,
      {
        "data-slot": "sheet-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxRuntime.jsxs(DialogPrimitive__namespace.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsxRuntime.jsx(lucideReact.XIcon, { className: "size-4" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className),
      ...props
    }
  );
}
function SheetFooter({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "sheet-footer",
      className: cn("mt-auto flex flex-col gap-2 p-4", className),
      ...props
    }
  );
}
function SheetTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    DialogPrimitive__namespace.Title,
    {
      "data-slot": "sheet-title",
      className: cn("text-foreground font-semibold", className),
      ...props
    }
  );
}
function SheetDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    DialogPrimitive__namespace.Description,
    {
      "data-slot": "sheet-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-accent animate-pulse rounded-md", className),
      ...props
    }
  );
}
function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}) {
  const _values = React2__namespace.useMemo(
    () => Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max],
    [value, defaultValue, min, max]
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(
    SliderPrimitive__namespace.Root,
    {
      "data-slot": "slider",
      defaultValue,
      value,
      min,
      max,
      className: cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          SliderPrimitive__namespace.Track,
          {
            "data-slot": "slider-track",
            className: cn(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ jsxRuntime.jsx(
              SliderPrimitive__namespace.Range,
              {
                "data-slot": "slider-range",
                className: cn(
                  "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: _values.length }, (_2, index) => /* @__PURE__ */ jsxRuntime.jsx(
          SliderPrimitive__namespace.Thumb,
          {
            "data-slot": "slider-thumb",
            className: "border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          },
          index
        ))
      ]
    }
  );
}
var M = (e, i, s, u, m, a, l, h) => {
  let d = document.documentElement, w = ["light", "dark"];
  function p(n) {
    (Array.isArray(e) ? e : [e]).forEach((y) => {
      let k = y === "class", S = k && a ? m.map((f) => a[f] || f) : m;
      k ? (d.classList.remove(...S), d.classList.add(a && a[n] ? a[n] : n)) : d.setAttribute(y, n);
    }), R(n);
  }
  function R(n) {
    h && w.includes(n) && (d.style.colorScheme = n);
  }
  function c() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (u) p(u);
  else try {
    let n = localStorage.getItem(i) || s, y = l && n === "system" ? c() : n;
    p(y);
  } catch (n) {
  }
};
var x = React2__namespace.createContext(void 0);
var U = { setTheme: (e) => {
}, themes: [] };
var z = () => {
  var e;
  return (e = React2__namespace.useContext(x)) != null ? e : U;
};
React2__namespace.memo(({ forcedTheme: e, storageKey: i, attribute: s, enableSystem: u, enableColorScheme: m, defaultTheme: a, value: l, themes: h, nonce: d, scriptProps: w }) => {
  let p = JSON.stringify([s, i, a, e, h, l, u, m]).slice(1, -1);
  return React2__namespace.createElement("script", { ...w, suppressHydrationWarning: true, nonce: typeof window == "undefined" ? d : "", dangerouslySetInnerHTML: { __html: `(${M.toString()})(${p})` } });
});
var Toaster = ({ ...props }) => {
  const { theme = "system" } = z();
  return /* @__PURE__ */ jsxRuntime.jsx(
    sonner.Toaster,
    {
      theme,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)"
      },
      ...props
    }
  );
};
function Switch({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    SwitchPrimitive__namespace.Root,
    {
      "data-slot": "switch",
      className: cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        SwitchPrimitive__namespace.Thumb,
        {
          "data-slot": "switch-thumb",
          className: cn(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "table",
        {
          "data-slot": "table",
          className: cn("w-full caption-bottom text-sm", className),
          ...props
        }
      )
    }
  );
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableFooter({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className
      ),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "tr",
    {
      "data-slot": "table-row",
      className: cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      ),
      ...props
    }
  );
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "th",
    {
      "data-slot": "table-head",
      className: cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "td",
    {
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCaption({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "caption",
    {
      "data-slot": "table-caption",
      className: cn("text-muted-foreground mt-4 text-sm", className),
      ...props
    }
  );
}
function Tabs({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    TabsPrimitive__namespace.Root,
    {
      "data-slot": "tabs",
      className: cn("flex flex-col gap-2", className),
      ...props
    }
  );
}
function TabsList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    TabsPrimitive__namespace.List,
    {
      "data-slot": "tabs-list",
      className: cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      ),
      ...props
    }
  );
}
function TabsTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    TabsPrimitive__namespace.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function TabsContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    TabsPrimitive__namespace.Content,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none", className),
      ...props
    }
  );
}
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
var ToastProvider = ToastPrimitives__namespace.Provider;
var ToastViewport = React2__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ToastPrimitives__namespace.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives__namespace.Viewport.displayName;
var toastVariants = classVarianceAuthority.cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Toast = React2__namespace.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToastPrimitives__namespace.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitives__namespace.Root.displayName;
var ToastAction = React2__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ToastPrimitives__namespace.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives__namespace.Action.displayName;
var ToastClose = React2__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ToastPrimitives__namespace.Close,
  {
    ref,
    className: cn(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = ToastPrimitives__namespace.Close.displayName;
var ToastTitle = React2__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ToastPrimitives__namespace.Title,
  {
    ref,
    className: cn("text-sm font-semibold [&+div]:text-xs", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives__namespace.Title.displayName;
var ToastDescription = React2__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ToastPrimitives__namespace.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitives__namespace.Description.displayName;
var toggleVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Toggle({
  className,
  variant,
  size,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    TogglePrimitive__namespace.Root,
    {
      "data-slot": "toggle",
      className: cn(toggleVariants({ variant, size, className })),
      ...props
    }
  );
}
var ToggleGroupContext = React2__namespace.createContext({
  size: "default",
  variant: "default"
});
function ToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToggleGroupPrimitive__namespace.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": variant,
      "data-size": size,
      className: cn(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(ToggleGroupContext.Provider, { value: { variant, size }, children })
    }
  );
}
function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}) {
  const context = React2__namespace.useContext(ToggleGroupContext);
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToggleGroupPrimitive__namespace.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": context.variant || variant,
      "data-size": context.size || size,
      className: cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size
        }),
        "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
        className
      ),
      ...props,
      children
    }
  );
}
function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    TooltipPrimitive__namespace.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}
function Tooltip({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(TooltipProvider, { children: /* @__PURE__ */ jsxRuntime.jsx(TooltipPrimitive__namespace.Root, { "data-slot": "tooltip", ...props }) });
}
function TooltipTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(TooltipPrimitive__namespace.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(TooltipPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsxs(
    TooltipPrimitive__namespace.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(TooltipPrimitive__namespace.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
var TOAST_LIMIT = 1;
var TOAST_REMOVE_DELAY = 1e6;
var count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map();
var addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
var reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t2) => t2.id === action.toast.id ? { ...t2, ...action.toast } : t2
        )
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t2) => t2.id === toastId || toastId === void 0 ? {
            ...t2,
            open: false
          } : t2
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t2) => t2.id !== action.toastId)
      };
  }
};
var listeners = [];
var memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React2__namespace.useState(memoryState);
  React2__namespace.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React2__namespace.useState(void 0);
  React2__namespace.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}

// src/index.ts
var VERSION = "1.0.0";

exports.Accordion = Accordion;
exports.AccordionContent = AccordionContent;
exports.AccordionItem = AccordionItem;
exports.AccordionTrigger = AccordionTrigger;
exports.Alert = Alert;
exports.AlertDescription = AlertDescription;
exports.AlertDialog = AlertDialog;
exports.AlertDialogAction = AlertDialogAction;
exports.AlertDialogCancel = AlertDialogCancel;
exports.AlertDialogContent = AlertDialogContent;
exports.AlertDialogDescription = AlertDialogDescription;
exports.AlertDialogFooter = AlertDialogFooter;
exports.AlertDialogHeader = AlertDialogHeader;
exports.AlertDialogOverlay = AlertDialogOverlay;
exports.AlertDialogPortal = AlertDialogPortal;
exports.AlertDialogTitle = AlertDialogTitle;
exports.AlertDialogTrigger = AlertDialogTrigger;
exports.AlertTitle = AlertTitle;
exports.AspectRatio = AspectRatio;
exports.Avatar = Avatar;
exports.AvatarFallback = AvatarFallback;
exports.AvatarImage = AvatarImage;
exports.Badge = Badge;
exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbEllipsis = BreadcrumbEllipsis;
exports.BreadcrumbItem = BreadcrumbItem;
exports.BreadcrumbLink = BreadcrumbLink;
exports.BreadcrumbList = BreadcrumbList;
exports.BreadcrumbPage = BreadcrumbPage;
exports.BreadcrumbSeparator = BreadcrumbSeparator;
exports.Button = Button;
exports.Calendar = Calendar;
exports.CalendarDayButton = CalendarDayButton;
exports.Card = Card;
exports.CardAction = CardAction;
exports.CardContent = CardContent;
exports.CardDescription = CardDescription;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardTitle = CardTitle;
exports.Carousel = Carousel;
exports.CarouselContent = CarouselContent;
exports.CarouselItem = CarouselItem;
exports.CarouselNext = CarouselNext;
exports.CarouselPrevious = CarouselPrevious;
exports.Checkbox = Checkbox;
exports.Collapsible = Collapsible;
exports.CollapsibleContent = CollapsibleContent2;
exports.CollapsibleTrigger = CollapsibleTrigger2;
exports.Command = Command;
exports.CommandDialog = CommandDialog;
exports.CommandEmpty = CommandEmpty;
exports.CommandGroup = CommandGroup;
exports.CommandInput = CommandInput;
exports.CommandItem = CommandItem;
exports.CommandList = CommandList;
exports.CommandSeparator = CommandSeparator;
exports.CommandShortcut = CommandShortcut;
exports.ContextMenu = ContextMenu;
exports.ContextMenuCheckboxItem = ContextMenuCheckboxItem;
exports.ContextMenuContent = ContextMenuContent;
exports.ContextMenuGroup = ContextMenuGroup;
exports.ContextMenuItem = ContextMenuItem;
exports.ContextMenuLabel = ContextMenuLabel;
exports.ContextMenuPortal = ContextMenuPortal;
exports.ContextMenuRadioGroup = ContextMenuRadioGroup;
exports.ContextMenuRadioItem = ContextMenuRadioItem;
exports.ContextMenuSeparator = ContextMenuSeparator;
exports.ContextMenuShortcut = ContextMenuShortcut;
exports.ContextMenuSub = ContextMenuSub;
exports.ContextMenuSubContent = ContextMenuSubContent;
exports.ContextMenuSubTrigger = ContextMenuSubTrigger;
exports.ContextMenuTrigger = ContextMenuTrigger;
exports.Dialog = Dialog;
exports.DialogClose = DialogClose;
exports.DialogContent = DialogContent;
exports.DialogDescription = DialogDescription;
exports.DialogFooter = DialogFooter;
exports.DialogHeader = DialogHeader;
exports.DialogOverlay = DialogOverlay;
exports.DialogPortal = DialogPortal;
exports.DialogTitle = DialogTitle;
exports.DialogTrigger = DialogTrigger;
exports.Drawer = Drawer;
exports.DrawerClose = DrawerClose;
exports.DrawerContent = DrawerContent;
exports.DrawerDescription = DrawerDescription;
exports.DrawerFooter = DrawerFooter;
exports.DrawerHeader = DrawerHeader;
exports.DrawerOverlay = DrawerOverlay;
exports.DrawerPortal = DrawerPortal;
exports.DrawerTitle = DrawerTitle;
exports.DrawerTrigger = DrawerTrigger;
exports.DropdownMenu = DropdownMenu;
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
exports.DropdownMenuContent = DropdownMenuContent;
exports.DropdownMenuGroup = DropdownMenuGroup;
exports.DropdownMenuItem = DropdownMenuItem;
exports.DropdownMenuLabel = DropdownMenuLabel;
exports.DropdownMenuPortal = DropdownMenuPortal;
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
exports.DropdownMenuSeparator = DropdownMenuSeparator;
exports.DropdownMenuShortcut = DropdownMenuShortcut;
exports.DropdownMenuSub = DropdownMenuSub;
exports.DropdownMenuSubContent = DropdownMenuSubContent;
exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
exports.DropdownMenuTrigger = DropdownMenuTrigger;
exports.Form = Form;
exports.FormControl = FormControl;
exports.FormDescription = FormDescription;
exports.FormField = FormField;
exports.FormItem = FormItem;
exports.FormLabel = FormLabel;
exports.FormMessage = FormMessage;
exports.HoverCard = HoverCard;
exports.HoverCardContent = HoverCardContent;
exports.HoverCardTrigger = HoverCardTrigger;
exports.Input = Input;
exports.InputOTP = InputOTP;
exports.InputOTPGroup = InputOTPGroup;
exports.InputOTPSeparator = InputOTPSeparator;
exports.InputOTPSlot = InputOTPSlot;
exports.Label = Label3;
exports.Menubar = Menubar;
exports.MenubarCheckboxItem = MenubarCheckboxItem;
exports.MenubarContent = MenubarContent;
exports.MenubarGroup = MenubarGroup;
exports.MenubarItem = MenubarItem;
exports.MenubarLabel = MenubarLabel;
exports.MenubarMenu = MenubarMenu;
exports.MenubarPortal = MenubarPortal;
exports.MenubarRadioGroup = MenubarRadioGroup;
exports.MenubarRadioItem = MenubarRadioItem;
exports.MenubarSeparator = MenubarSeparator;
exports.MenubarShortcut = MenubarShortcut;
exports.MenubarSub = MenubarSub;
exports.MenubarSubContent = MenubarSubContent;
exports.MenubarSubTrigger = MenubarSubTrigger;
exports.MenubarTrigger = MenubarTrigger;
exports.NavigationMenu = NavigationMenu;
exports.NavigationMenuContent = NavigationMenuContent;
exports.NavigationMenuIndicator = NavigationMenuIndicator;
exports.NavigationMenuItem = NavigationMenuItem;
exports.NavigationMenuLink = NavigationMenuLink;
exports.NavigationMenuList = NavigationMenuList;
exports.NavigationMenuTrigger = NavigationMenuTrigger;
exports.NavigationMenuViewport = NavigationMenuViewport;
exports.Pagination = Pagination;
exports.PaginationContent = PaginationContent;
exports.PaginationEllipsis = PaginationEllipsis;
exports.PaginationItem = PaginationItem;
exports.PaginationLink = PaginationLink;
exports.PaginationNext = PaginationNext;
exports.PaginationPrevious = PaginationPrevious;
exports.Popover = Popover;
exports.PopoverAnchor = PopoverAnchor;
exports.PopoverContent = PopoverContent;
exports.PopoverTrigger = PopoverTrigger;
exports.Progress = Progress;
exports.RadioGroup = RadioGroup4;
exports.RadioGroupItem = RadioGroupItem;
exports.ResizableHandle = ResizableHandle;
exports.ResizablePanel = ResizablePanel;
exports.ResizablePanelGroup = ResizablePanelGroup;
exports.ScrollArea = ScrollArea;
exports.ScrollBar = ScrollBar;
exports.Select = Select;
exports.SelectContent = SelectContent;
exports.SelectGroup = SelectGroup;
exports.SelectItem = SelectItem;
exports.SelectLabel = SelectLabel;
exports.SelectScrollDownButton = SelectScrollDownButton;
exports.SelectScrollUpButton = SelectScrollUpButton;
exports.SelectSeparator = SelectSeparator;
exports.SelectTrigger = SelectTrigger;
exports.SelectValue = SelectValue;
exports.Separator = Separator5;
exports.Sheet = Sheet;
exports.SheetClose = SheetClose;
exports.SheetContent = SheetContent;
exports.SheetDescription = SheetDescription;
exports.SheetFooter = SheetFooter;
exports.SheetHeader = SheetHeader;
exports.SheetTitle = SheetTitle;
exports.SheetTrigger = SheetTrigger;
exports.Skeleton = Skeleton;
exports.Slider = Slider;
exports.Switch = Switch;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableCaption = TableCaption;
exports.TableCell = TableCell;
exports.TableFooter = TableFooter;
exports.TableHead = TableHead;
exports.TableHeader = TableHeader;
exports.TableRow = TableRow;
exports.Tabs = Tabs;
exports.TabsContent = TabsContent;
exports.TabsList = TabsList;
exports.TabsTrigger = TabsTrigger;
exports.Textarea = Textarea;
exports.Toast = Toast;
exports.ToastAction = ToastAction;
exports.ToastClose = ToastClose;
exports.ToastDescription = ToastDescription;
exports.ToastProvider = ToastProvider;
exports.ToastTitle = ToastTitle;
exports.ToastViewport = ToastViewport;
exports.Toaster = Toaster;
exports.Toggle = Toggle;
exports.ToggleGroup = ToggleGroup;
exports.ToggleGroupItem = ToggleGroupItem;
exports.Tooltip = Tooltip;
exports.TooltipContent = TooltipContent;
exports.TooltipProvider = TooltipProvider;
exports.TooltipTrigger = TooltipTrigger;
exports.VERSION = VERSION;
exports.badgeVariants = badgeVariants;
exports.buttonVariants = buttonVariants;
exports.cn = cn;
exports.navigationMenuTriggerStyle = navigationMenuTriggerStyle;
exports.toggleVariants = toggleVariants;
exports.useFormField = useFormField;
exports.useIsMobile = useIsMobile;
exports.useToast = useToast;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map