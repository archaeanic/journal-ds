"use client"

import * as React from "react"
import {
  ArrowRight,
  Bell,
  Copy,
  Eye,
  Info,
  Mail,
  MessageSquare,
  Settings,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ComponentDocPage } from "./_component-doc-template"

/* ============= Dialog ============= */
export function DialogPage() {
  return (
    <ComponentDocPage
      title="Dialog"
      description="A window overlaid on the primary window, displaying interactive content."
      slug="dialog"
      primary={{
        preview: (
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Share link</DialogTitle>
                <DialogDescription>
                  Anyone who has this link will be able to view this document.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center gap-2">
                <Input id="link" defaultValue="https://lumen-ui.dev/docs/button" readOnly />
                <Button size="sm" className="px-3">
                  <Copy className="size-4" />
                </Button>
              </div>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ),
        code: `<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Share link</DialogTitle>
      <DialogDescription>
        Anyone who has this link will be able to view this document.
      </DialogDescription>
    </DialogHeader>
    {/* content */}
    <DialogFooter>
      <Button>Close</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
      }}
      props={[
        { name: "open", type: "boolean", description: "The controlled open state." },
        { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback called when the open state changes." },
        { name: "modal", type: "boolean", default: "true", description: "When true, clicking outside closes the dialog." },
      ]}
    />
  )
}

/* ============= Sheet ============= */
export function SheetPage() {
  return (
    <ComponentDocPage
      title="Sheet"
      description="Extends the Dialog component to display content that complements the main screen."
      slug="sheet"
      primary={{
        preview: (
          <Sheet>
            <SheetTrigger asChild>
              <Button>Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you&apos;re done.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-4 py-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@peduarte" />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        ),
        code: `<Sheet>
  <SheetTrigger asChild>
    <Button>Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here.
      </SheetDescription>
    </SheetHeader>
    {/* form */}
    <SheetFooter>
      <SheetClose asChild>
        <Button type="submit">Save changes</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`,
      }}
      examples={[
        {
          title: "Side Variants",
          preview: (
            <div className="flex flex-wrap gap-2">
              <Sheet>
                <SheetTrigger asChild><Button variant="outline">Left</Button></SheetTrigger>
                <SheetContent side="left"><SheetHeader><SheetTitle>Left Sheet</SheetTitle></SheetHeader></SheetContent>
              </Sheet>
              <Sheet>
                <SheetTrigger asChild><Button variant="outline">Top</Button></SheetTrigger>
                <SheetContent side="top"><SheetHeader><SheetTitle>Top Sheet</SheetTitle></SheetHeader></SheetContent>
              </Sheet>
              <Sheet>
                <SheetTrigger asChild><Button variant="outline">Bottom</Button></SheetTrigger>
                <SheetContent side="bottom"><SheetHeader><SheetTitle>Bottom Sheet</SheetTitle></SheetHeader></SheetContent>
              </Sheet>
              <Sheet>
                <SheetTrigger asChild><Button variant="outline">Right</Button></SheetTrigger>
                <SheetContent side="right"><SheetHeader><SheetTitle>Right Sheet</SheetTitle></SheetHeader></SheetContent>
              </Sheet>
            </div>
          ),
          code: `<Sheet>
  <SheetTrigger asChild><Button variant="outline">Left</Button></SheetTrigger>
  <SheetContent side="left">...</SheetContent>
</Sheet>`,
        },
      ]}
      props={[
        { name: "side", type: '"top" | "bottom" | "left" | "right"', default: '"right"', description: "The side of the screen the sheet slides in from." },
        { name: "open", type: "boolean", description: "The controlled open state." },
      ]}
    />
  )
}

/* ============= Drawer ============= */
export function DrawerPage() {
  return (
    <ComponentDocPage
      title="Drawer"
      description="A drawer component for mobile and desktop. Built on top of vaul."
      slug="drawer"
      primary={{
        preview: (
          <Drawer>
            <DrawerTrigger asChild>
              <Button>Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Move Goal</DrawerTitle>
                  <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Button variant="outline" size="icon">−</Button>
                    <div className="flex-1 text-center">
                      <span className="text-3xl font-bold">200</span>
                      <span className="ml-1 text-sm text-muted-foreground">calories</span>
                    </div>
                    <Button variant="outline" size="icon">+</Button>
                  </div>
                </div>
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        ),
        code: `<Drawer>
  <DrawerTrigger asChild>
    <Button>Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Move Goal</DrawerTitle>
      <DrawerDescription>Set your daily activity goal.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`,
      }}
      props={[
        { name: "open", type: "boolean", description: "The controlled open state." },
        { name: "direction", type: '"top" | "bottom" | "left" | "right"', default: '"bottom"', description: "The direction from which the drawer slides in." },
      ]}
    />
  )
}

/* ============= Popover ============= */
export function PopoverPage() {
  return (
    <ComponentDocPage
      title="Popover"
      description="Displays rich content in a portal, triggered by a button."
      slug="popover"
      primary={{
        preview: (
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Dimensions</h4>
                  <p className="text-sm text-muted-foreground">
                    Set the dimensions for the layer.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">Width</Label>
                    <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxWidth">Max. width</Label>
                    <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        ),
        code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="grid gap-4">
      <h4 className="font-medium">Dimensions</h4>
      {/* form fields */}
    </div>
  </PopoverContent>
</Popover>`,
      }}
      props={[
        { name: "open", type: "boolean", description: "The controlled open state." },
        { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback called when the open state changes." },
      ]}
    />
  )
}

/* ============= Tooltip ============= */
export function TooltipPage() {
  return (
    <ComponentDocPage
      title="Tooltip"
      description="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
      slug="tooltip"
      primary={{
        preview: (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ),
        code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
      }}
      props={[
        { name: "delayDuration", type: "number", default: "700", description: "The delay in ms before the tooltip shows." },
        { name: "side", type: '"top" | "right" | "bottom" | "left"', default: '"top"', description: "The preferred side of the trigger to place the tooltip." },
      ]}
    />
  )
}

/* ============= HoverCard ============= */
export function HoverCardPage() {
  return (
    <ComponentDocPage
      title="Hover Card"
      description="For sighted users to preview content available behind a link."
      slug="hover-card"
      primary={{
        preview: (
          <HoverCard>
            <HoverCardTrigger asChild>
              <button className="underline underline-offset-4">@lumen-ui</button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>LU</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@lumen-ui</h4>
                  <p className="text-sm text-muted-foreground">
                    The React framework for production.
                  </p>
                  <div className="flex gap-2 text-xs text-muted-foreground">
                    <span>12 Followers</span>
                    <span>·</span>
                    <span>8 Following</span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ),
        code: `<HoverCard>
  <HoverCardTrigger asChild>
    <button className="underline">@lumen-ui</button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    {/* rich content */}
  </HoverCardContent>
</HoverCard>`,
      }}
      props={[
        { name: "openDelay", type: "number", default: "700", description: "The delay in ms before the hover card opens." },
        { name: "closeDelay", type: "number", default: "300", description: "The delay in ms before the hover card closes." },
      ]}
    />
  )
}

/* ============= AlertDialog ============= */
export function AlertDialogPage() {
  return (
    <ComponentDocPage
      title="Alert Dialog"
      description="A modal dialog that interrupts the user with important content and expects a response."
      slug="alert-dialog"
      primary={{
        preview: (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Show Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your
                  account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ),
        code: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Show Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
      }}
      props={[
        { name: "open", type: "boolean", description: "The controlled open state." },
        { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback called when the open state changes." },
      ]}
    />
  )
}
