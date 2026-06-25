export { cn } from './lib/utils.js';
import * as React$1 from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { DayPicker, DayButton } from 'react-day-picker';
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { Command as Command$1 } from 'cmdk';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { Drawer as Drawer$1 } from 'vaul';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as react_hook_form from 'react-hook-form';
import { FieldValues, FieldPath, ControllerProps } from 'react-hook-form';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { OTPInput } from 'input-otp';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as ResizablePrimitive from 'react-resizable-panels';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { ToasterProps } from 'sonner';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as ToastPrimitives from '@radix-ui/react-toast';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import 'clsx';

declare function Accordion({ ...props }: React$1.ComponentProps<typeof AccordionPrimitive.Root>): React$1.JSX.Element;
declare function AccordionItem({ className, ...props }: React$1.ComponentProps<typeof AccordionPrimitive.Item>): React$1.JSX.Element;
declare function AccordionTrigger({ className, children, ...props }: React$1.ComponentProps<typeof AccordionPrimitive.Trigger>): React$1.JSX.Element;
declare function AccordionContent({ className, children, ...props }: React$1.ComponentProps<typeof AccordionPrimitive.Content>): React$1.JSX.Element;

declare const alertVariants: (props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Alert({ className, variant, ...props }: React$1.ComponentProps<"div"> & VariantProps<typeof alertVariants>): React$1.JSX.Element;
declare function AlertTitle({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AlertDescription({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

declare function AlertDialog({ ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Root>): React$1.JSX.Element;
declare function AlertDialogTrigger({ ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Trigger>): React$1.JSX.Element;
declare function AlertDialogPortal({ ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Portal>): React$1.JSX.Element;
declare function AlertDialogOverlay({ className, ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Overlay>): React$1.JSX.Element;
declare function AlertDialogContent({ className, ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Content>): React$1.JSX.Element;
declare function AlertDialogHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AlertDialogFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AlertDialogTitle({ className, ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Title>): React$1.JSX.Element;
declare function AlertDialogDescription({ className, ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Description>): React$1.JSX.Element;
declare function AlertDialogAction({ className, ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Action>): React$1.JSX.Element;
declare function AlertDialogCancel({ className, ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Cancel>): React$1.JSX.Element;

declare function AspectRatio({ ...props }: React.ComponentProps<typeof AspectRatioPrimitive.Root>): React$1.JSX.Element;

declare function Avatar({ className, ...props }: React$1.ComponentProps<typeof AvatarPrimitive.Root>): React$1.JSX.Element;
declare function AvatarImage({ className, ...props }: React$1.ComponentProps<typeof AvatarPrimitive.Image>): React$1.JSX.Element;
declare function AvatarFallback({ className, ...props }: React$1.ComponentProps<typeof AvatarPrimitive.Fallback>): React$1.JSX.Element;

declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Badge({ className, variant, asChild, ...props }: React$1.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
}): React$1.JSX.Element;

declare function Breadcrumb({ ...props }: React$1.ComponentProps<"nav">): React$1.JSX.Element;
declare function BreadcrumbList({ className, ...props }: React$1.ComponentProps<"ol">): React$1.JSX.Element;
declare function BreadcrumbItem({ className, ...props }: React$1.ComponentProps<"li">): React$1.JSX.Element;
declare function BreadcrumbLink({ asChild, className, ...props }: React$1.ComponentProps<"a"> & {
    asChild?: boolean;
}): React$1.JSX.Element;
declare function BreadcrumbPage({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
declare function BreadcrumbSeparator({ children, className, ...props }: React$1.ComponentProps<"li">): React$1.JSX.Element;
declare function BreadcrumbEllipsis({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, ...props }: React$1.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): React$1.JSX.Element;

declare function Calendar({ className, classNames, showOutsideDays, captionLayout, buttonVariant, formatters, components, ...props }: React$1.ComponentProps<typeof DayPicker> & {
    buttonVariant?: React$1.ComponentProps<typeof Button>["variant"];
}): React$1.JSX.Element;
declare function CalendarDayButton({ className, day, modifiers, ...props }: React$1.ComponentProps<typeof DayButton>): React$1.JSX.Element;

declare function Card({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardTitle({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardDescription({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardAction({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardContent({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: "horizontal" | "vertical";
    setApi?: (api: CarouselApi) => void;
};
declare function Carousel({ orientation, opts, setApi, plugins, className, children, ...props }: React$1.ComponentProps<"div"> & CarouselProps): React$1.JSX.Element;
declare function CarouselContent({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CarouselItem({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CarouselPrevious({ className, variant, size, ...props }: React$1.ComponentProps<typeof Button>): React$1.JSX.Element;
declare function CarouselNext({ className, variant, size, ...props }: React$1.ComponentProps<typeof Button>): React$1.JSX.Element;

declare function Checkbox({ className, ...props }: React$1.ComponentProps<typeof CheckboxPrimitive.Root>): React$1.JSX.Element;

declare function Collapsible({ ...props }: React.ComponentProps<typeof CollapsiblePrimitive.Root>): React$1.JSX.Element;
declare function CollapsibleTrigger({ ...props }: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>): React$1.JSX.Element;
declare function CollapsibleContent({ ...props }: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>): React$1.JSX.Element;

declare function Dialog({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Root>): React$1.JSX.Element;
declare function DialogTrigger({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Trigger>): React$1.JSX.Element;
declare function DialogPortal({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Portal>): React$1.JSX.Element;
declare function DialogClose({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Close>): React$1.JSX.Element;
declare function DialogOverlay({ className, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Overlay>): React$1.JSX.Element;
declare function DialogContent({ className, children, showCloseButton, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Content> & {
    showCloseButton?: boolean;
}): React$1.JSX.Element;
declare function DialogHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function DialogFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function DialogTitle({ className, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Title>): React$1.JSX.Element;
declare function DialogDescription({ className, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Description>): React$1.JSX.Element;

declare function Command({ className, ...props }: React$1.ComponentProps<typeof Command$1>): React$1.JSX.Element;
declare function CommandDialog({ title, description, children, className, showCloseButton, ...props }: React$1.ComponentProps<typeof Dialog> & {
    title?: string;
    description?: string;
    className?: string;
    showCloseButton?: boolean;
}): React$1.JSX.Element;
declare function CommandInput({ className, ...props }: React$1.ComponentProps<typeof Command$1.Input>): React$1.JSX.Element;
declare function CommandList({ className, ...props }: React$1.ComponentProps<typeof Command$1.List>): React$1.JSX.Element;
declare function CommandEmpty({ ...props }: React$1.ComponentProps<typeof Command$1.Empty>): React$1.JSX.Element;
declare function CommandGroup({ className, ...props }: React$1.ComponentProps<typeof Command$1.Group>): React$1.JSX.Element;
declare function CommandSeparator({ className, ...props }: React$1.ComponentProps<typeof Command$1.Separator>): React$1.JSX.Element;
declare function CommandItem({ className, ...props }: React$1.ComponentProps<typeof Command$1.Item>): React$1.JSX.Element;
declare function CommandShortcut({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;

declare function ContextMenu({ ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.Root>): React$1.JSX.Element;
declare function ContextMenuTrigger({ ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.Trigger>): React$1.JSX.Element;
declare function ContextMenuGroup({ ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.Group>): React$1.JSX.Element;
declare function ContextMenuPortal({ ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.Portal>): React$1.JSX.Element;
declare function ContextMenuSub({ ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.Sub>): React$1.JSX.Element;
declare function ContextMenuRadioGroup({ ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>): React$1.JSX.Element;
declare function ContextMenuSubTrigger({ className, inset, children, ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function ContextMenuSubContent({ className, ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.SubContent>): React$1.JSX.Element;
declare function ContextMenuContent({ className, ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.Content>): React$1.JSX.Element;
declare function ContextMenuItem({ className, inset, variant, ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
}): React$1.JSX.Element;
declare function ContextMenuCheckboxItem({ className, children, checked, ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>): React$1.JSX.Element;
declare function ContextMenuRadioItem({ className, children, ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.RadioItem>): React$1.JSX.Element;
declare function ContextMenuLabel({ className, inset, ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function ContextMenuSeparator({ className, ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.Separator>): React$1.JSX.Element;
declare function ContextMenuShortcut({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;

declare function Drawer({ ...props }: React$1.ComponentProps<typeof Drawer$1.Root>): React$1.JSX.Element;
declare function DrawerTrigger({ ...props }: React$1.ComponentProps<typeof Drawer$1.Trigger>): React$1.JSX.Element;
declare function DrawerPortal({ ...props }: React$1.ComponentProps<typeof Drawer$1.Portal>): React$1.JSX.Element;
declare function DrawerClose({ ...props }: React$1.ComponentProps<typeof Drawer$1.Close>): React$1.JSX.Element;
declare function DrawerOverlay({ className, ...props }: React$1.ComponentProps<typeof Drawer$1.Overlay>): React$1.JSX.Element;
declare function DrawerContent({ className, children, ...props }: React$1.ComponentProps<typeof Drawer$1.Content>): React$1.JSX.Element;
declare function DrawerHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function DrawerFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function DrawerTitle({ className, ...props }: React$1.ComponentProps<typeof Drawer$1.Title>): React$1.JSX.Element;
declare function DrawerDescription({ className, ...props }: React$1.ComponentProps<typeof Drawer$1.Description>): React$1.JSX.Element;

declare function DropdownMenu({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Root>): React$1.JSX.Element;
declare function DropdownMenuPortal({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Portal>): React$1.JSX.Element;
declare function DropdownMenuTrigger({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Trigger>): React$1.JSX.Element;
declare function DropdownMenuContent({ className, sideOffset, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Content>): React$1.JSX.Element;
declare function DropdownMenuGroup({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Group>): React$1.JSX.Element;
declare function DropdownMenuItem({ className, inset, variant, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
}): React$1.JSX.Element;
declare function DropdownMenuCheckboxItem({ className, children, checked, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>): React$1.JSX.Element;
declare function DropdownMenuRadioGroup({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>): React$1.JSX.Element;
declare function DropdownMenuRadioItem({ className, children, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>): React$1.JSX.Element;
declare function DropdownMenuLabel({ className, inset, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function DropdownMenuSeparator({ className, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Separator>): React$1.JSX.Element;
declare function DropdownMenuShortcut({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
declare function DropdownMenuSub({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Sub>): React$1.JSX.Element;
declare function DropdownMenuSubTrigger({ className, inset, children, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function DropdownMenuSubContent({ className, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.SubContent>): React$1.JSX.Element;

declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues = TFieldValues>(props: react_hook_form.FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React$1.JSX.Element;
declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => React$1.JSX.Element;
declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: react_hook_form.FieldError;
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};
declare function FormItem({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function FormLabel({ className, ...props }: React$1.ComponentProps<typeof LabelPrimitive.Root>): React$1.JSX.Element;
declare function FormControl({ ...props }: React$1.ComponentProps<typeof Slot>): React$1.JSX.Element;
declare function FormDescription({ className, ...props }: React$1.ComponentProps<"p">): React$1.JSX.Element;
declare function FormMessage({ className, ...props }: React$1.ComponentProps<"p">): React$1.JSX.Element | null;

declare function HoverCard({ ...props }: React$1.ComponentProps<typeof HoverCardPrimitive.Root>): React$1.JSX.Element;
declare function HoverCardTrigger({ ...props }: React$1.ComponentProps<typeof HoverCardPrimitive.Trigger>): React$1.JSX.Element;
declare function HoverCardContent({ className, align, sideOffset, ...props }: React$1.ComponentProps<typeof HoverCardPrimitive.Content>): React$1.JSX.Element;

declare function Input({ className, type, ...props }: React$1.ComponentProps<"input">): React$1.JSX.Element;

declare function InputOTP({ className, containerClassName, ...props }: React$1.ComponentProps<typeof OTPInput> & {
    containerClassName?: string;
}): React$1.JSX.Element;
declare function InputOTPGroup({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function InputOTPSlot({ index, className, ...props }: React$1.ComponentProps<"div"> & {
    index: number;
}): React$1.JSX.Element;
declare function InputOTPSeparator({ ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

declare function Label({ className, ...props }: React$1.ComponentProps<typeof LabelPrimitive.Root>): React$1.JSX.Element;

declare function Menubar({ className, ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Root>): React$1.JSX.Element;
declare function MenubarMenu({ ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Menu>): React$1.JSX.Element;
declare function MenubarGroup({ ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Group>): React$1.JSX.Element;
declare function MenubarPortal({ ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Portal>): React$1.JSX.Element;
declare function MenubarRadioGroup({ ...props }: React$1.ComponentProps<typeof MenubarPrimitive.RadioGroup>): React$1.JSX.Element;
declare function MenubarTrigger({ className, ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Trigger>): React$1.JSX.Element;
declare function MenubarContent({ className, align, alignOffset, sideOffset, ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Content>): React$1.JSX.Element;
declare function MenubarItem({ className, inset, variant, ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
}): React$1.JSX.Element;
declare function MenubarCheckboxItem({ className, children, checked, ...props }: React$1.ComponentProps<typeof MenubarPrimitive.CheckboxItem>): React$1.JSX.Element;
declare function MenubarRadioItem({ className, children, ...props }: React$1.ComponentProps<typeof MenubarPrimitive.RadioItem>): React$1.JSX.Element;
declare function MenubarLabel({ className, inset, ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function MenubarSeparator({ className, ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Separator>): React$1.JSX.Element;
declare function MenubarShortcut({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
declare function MenubarSub({ ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Sub>): React$1.JSX.Element;
declare function MenubarSubTrigger({ className, inset, children, ...props }: React$1.ComponentProps<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function MenubarSubContent({ className, ...props }: React$1.ComponentProps<typeof MenubarPrimitive.SubContent>): React$1.JSX.Element;

declare function NavigationMenu({ className, children, viewport, ...props }: React$1.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
    viewport?: boolean;
}): React$1.JSX.Element;
declare function NavigationMenuList({ className, ...props }: React$1.ComponentProps<typeof NavigationMenuPrimitive.List>): React$1.JSX.Element;
declare function NavigationMenuItem({ className, ...props }: React$1.ComponentProps<typeof NavigationMenuPrimitive.Item>): React$1.JSX.Element;
declare const navigationMenuTriggerStyle: (props?: class_variance_authority_types.ClassProp | undefined) => string;
declare function NavigationMenuTrigger({ className, children, ...props }: React$1.ComponentProps<typeof NavigationMenuPrimitive.Trigger>): React$1.JSX.Element;
declare function NavigationMenuContent({ className, ...props }: React$1.ComponentProps<typeof NavigationMenuPrimitive.Content>): React$1.JSX.Element;
declare function NavigationMenuViewport({ className, ...props }: React$1.ComponentProps<typeof NavigationMenuPrimitive.Viewport>): React$1.JSX.Element;
declare function NavigationMenuLink({ className, ...props }: React$1.ComponentProps<typeof NavigationMenuPrimitive.Link>): React$1.JSX.Element;
declare function NavigationMenuIndicator({ className, ...props }: React$1.ComponentProps<typeof NavigationMenuPrimitive.Indicator>): React$1.JSX.Element;

declare function Pagination({ className, ...props }: React$1.ComponentProps<"nav">): React$1.JSX.Element;
declare function PaginationContent({ className, ...props }: React$1.ComponentProps<"ul">): React$1.JSX.Element;
declare function PaginationItem({ ...props }: React$1.ComponentProps<"li">): React$1.JSX.Element;
type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<React$1.ComponentProps<typeof Button>, "size"> & React$1.ComponentProps<"a">;
declare function PaginationLink({ className, isActive, size, ...props }: PaginationLinkProps): React$1.JSX.Element;
declare function PaginationPrevious({ className, ...props }: React$1.ComponentProps<typeof PaginationLink>): React$1.JSX.Element;
declare function PaginationNext({ className, ...props }: React$1.ComponentProps<typeof PaginationLink>): React$1.JSX.Element;
declare function PaginationEllipsis({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;

declare function Popover({ ...props }: React$1.ComponentProps<typeof PopoverPrimitive.Root>): React$1.JSX.Element;
declare function PopoverTrigger({ ...props }: React$1.ComponentProps<typeof PopoverPrimitive.Trigger>): React$1.JSX.Element;
declare function PopoverContent({ className, align, sideOffset, ...props }: React$1.ComponentProps<typeof PopoverPrimitive.Content>): React$1.JSX.Element;
declare function PopoverAnchor({ ...props }: React$1.ComponentProps<typeof PopoverPrimitive.Anchor>): React$1.JSX.Element;

declare function Progress({ className, value, ...props }: React$1.ComponentProps<typeof ProgressPrimitive.Root>): React$1.JSX.Element;

declare function RadioGroup({ className, ...props }: React$1.ComponentProps<typeof RadioGroupPrimitive.Root>): React$1.JSX.Element;
declare function RadioGroupItem({ className, ...props }: React$1.ComponentProps<typeof RadioGroupPrimitive.Item>): React$1.JSX.Element;

declare function ResizablePanelGroup({ className, ...props }: React$1.ComponentProps<typeof ResizablePrimitive.PanelGroup>): React$1.JSX.Element;
declare function ResizablePanel({ ...props }: React$1.ComponentProps<typeof ResizablePrimitive.Panel>): React$1.JSX.Element;
declare function ResizableHandle({ withHandle, className, ...props }: React$1.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
    withHandle?: boolean;
}): React$1.JSX.Element;

declare function ScrollArea({ className, children, ...props }: React$1.ComponentProps<typeof ScrollAreaPrimitive.Root>): React$1.JSX.Element;
declare function ScrollBar({ className, orientation, ...props }: React$1.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>): React$1.JSX.Element;

declare function Select({ ...props }: React$1.ComponentProps<typeof SelectPrimitive.Root>): React$1.JSX.Element;
declare function SelectGroup({ ...props }: React$1.ComponentProps<typeof SelectPrimitive.Group>): React$1.JSX.Element;
declare function SelectValue({ ...props }: React$1.ComponentProps<typeof SelectPrimitive.Value>): React$1.JSX.Element;
declare function SelectTrigger({ className, size, children, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Trigger> & {
    size?: "sm" | "default";
}): React$1.JSX.Element;
declare function SelectContent({ className, children, position, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Content>): React$1.JSX.Element;
declare function SelectLabel({ className, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Label>): React$1.JSX.Element;
declare function SelectItem({ className, children, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Item>): React$1.JSX.Element;
declare function SelectSeparator({ className, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Separator>): React$1.JSX.Element;
declare function SelectScrollUpButton({ className, ...props }: React$1.ComponentProps<typeof SelectPrimitive.ScrollUpButton>): React$1.JSX.Element;
declare function SelectScrollDownButton({ className, ...props }: React$1.ComponentProps<typeof SelectPrimitive.ScrollDownButton>): React$1.JSX.Element;

declare function Separator({ className, orientation, decorative, ...props }: React$1.ComponentProps<typeof SeparatorPrimitive.Root>): React$1.JSX.Element;

declare function Sheet({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Root>): React$1.JSX.Element;
declare function SheetTrigger({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Trigger>): React$1.JSX.Element;
declare function SheetClose({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Close>): React$1.JSX.Element;
declare function SheetContent({ className, children, side, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Content> & {
    side?: "top" | "right" | "bottom" | "left";
}): React$1.JSX.Element;
declare function SheetHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SheetFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SheetTitle({ className, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Title>): React$1.JSX.Element;
declare function SheetDescription({ className, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Description>): React$1.JSX.Element;

declare function Skeleton({ className, ...props }: React.ComponentProps<"div">): React$1.JSX.Element;

declare function Slider({ className, defaultValue, value, min, max, ...props }: React$1.ComponentProps<typeof SliderPrimitive.Root>): React$1.JSX.Element;

declare const Toaster: ({ ...props }: ToasterProps) => React$1.JSX.Element;

declare function Switch({ className, ...props }: React$1.ComponentProps<typeof SwitchPrimitive.Root>): React$1.JSX.Element;

declare function Table({ className, ...props }: React$1.ComponentProps<"table">): React$1.JSX.Element;
declare function TableHeader({ className, ...props }: React$1.ComponentProps<"thead">): React$1.JSX.Element;
declare function TableBody({ className, ...props }: React$1.ComponentProps<"tbody">): React$1.JSX.Element;
declare function TableFooter({ className, ...props }: React$1.ComponentProps<"tfoot">): React$1.JSX.Element;
declare function TableRow({ className, ...props }: React$1.ComponentProps<"tr">): React$1.JSX.Element;
declare function TableHead({ className, ...props }: React$1.ComponentProps<"th">): React$1.JSX.Element;
declare function TableCell({ className, ...props }: React$1.ComponentProps<"td">): React$1.JSX.Element;
declare function TableCaption({ className, ...props }: React$1.ComponentProps<"caption">): React$1.JSX.Element;

declare function Tabs({ className, ...props }: React$1.ComponentProps<typeof TabsPrimitive.Root>): React$1.JSX.Element;
declare function TabsList({ className, ...props }: React$1.ComponentProps<typeof TabsPrimitive.List>): React$1.JSX.Element;
declare function TabsTrigger({ className, ...props }: React$1.ComponentProps<typeof TabsPrimitive.Trigger>): React$1.JSX.Element;
declare function TabsContent({ className, ...props }: React$1.ComponentProps<typeof TabsPrimitive.Content>): React$1.JSX.Element;

declare function Textarea({ className, ...props }: React$1.ComponentProps<"textarea">): React$1.JSX.Element;

declare const ToastProvider: React$1.FC<ToastPrimitives.ToastProviderProps>;
declare const ToastViewport: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastViewportProps & React$1.RefAttributes<HTMLOListElement>, "ref"> & React$1.RefAttributes<HTMLOListElement>>;
declare const Toast$1: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastProps & React$1.RefAttributes<HTMLLIElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLLIElement>>;
declare const ToastAction: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastActionProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const ToastClose: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastCloseProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const ToastTitle: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastTitleProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ToastDescription: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastDescriptionProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
type ToastProps = React$1.ComponentPropsWithoutRef<typeof Toast$1>;
type ToastActionElement = React$1.ReactElement<typeof ToastAction>;

declare const toggleVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Toggle({ className, variant, size, ...props }: React$1.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>): React$1.JSX.Element;

declare function ToggleGroup({ className, variant, size, children, ...props }: React$1.ComponentProps<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants>): React$1.JSX.Element;
declare function ToggleGroupItem({ className, children, variant, size, ...props }: React$1.ComponentProps<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>): React$1.JSX.Element;

declare function TooltipProvider({ delayDuration, ...props }: React$1.ComponentProps<typeof TooltipPrimitive.Provider>): React$1.JSX.Element;
declare function Tooltip({ ...props }: React$1.ComponentProps<typeof TooltipPrimitive.Root>): React$1.JSX.Element;
declare function TooltipTrigger({ ...props }: React$1.ComponentProps<typeof TooltipPrimitive.Trigger>): React$1.JSX.Element;
declare function TooltipContent({ className, sideOffset, children, ...props }: React$1.ComponentProps<typeof TooltipPrimitive.Content>): React$1.JSX.Element;

type ToasterToast = ToastProps & {
    id: string;
    title?: React$1.ReactNode;
    description?: React$1.ReactNode;
    action?: ToastActionElement;
};
type Toast = Omit<ToasterToast, "id">;
declare function toast({ ...props }: Toast): {
    id: string;
    dismiss: () => void;
    update: (props: ToasterToast) => void;
};
declare function useToast(): {
    toast: typeof toast;
    dismiss: (toastId?: string) => void;
    toasts: ToasterToast[];
};

declare function useIsMobile(): boolean;

declare const VERSION = "1.0.0";

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, AlertTitle, AspectRatio, Avatar, AvatarFallback, AvatarImage, Badge, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, Calendar, CalendarDayButton, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, Checkbox, Collapsible, CollapsibleContent, CollapsibleTrigger, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, HoverCard, HoverCardContent, HoverCardTrigger, Input, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, Label, Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, Popover, PopoverAnchor, PopoverContent, PopoverTrigger, Progress, RadioGroup, RadioGroupItem, ResizableHandle, ResizablePanel, ResizablePanelGroup, ScrollArea, ScrollBar, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Skeleton, Slider, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, Toast$1 as Toast, ToastAction, type ToastActionElement, ToastClose, ToastDescription, type ToastProps, ToastProvider, ToastTitle, ToastViewport, Toaster, Toggle, ToggleGroup, ToggleGroupItem, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, VERSION, badgeVariants, buttonVariants, navigationMenuTriggerStyle, toggleVariants, useFormField, useIsMobile, useToast };
