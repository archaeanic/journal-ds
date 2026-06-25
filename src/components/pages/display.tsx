"use client"

import * as React from "react"
import { Check, ChevronDown, CircleAlert, Info, Terminal, AlertTriangle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import { Progress } from "@/components/ui/progress"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ComponentDocPage } from "./_component-doc-template"

/* ============= Badge ============= */
export function BadgePage() {
  return (
    <ComponentDocPage
      title="Badge"
      description="Displays a badge or a component that looks like a badge."
      slug="badge"
      primary={{
        preview: <Badge>Badge</Badge>,
        code: `<Badge>Badge</Badge>`,
      }}
      examples={[
        {
          title: "Variants",
          preview: (
            <>
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </>
          ),
          code: `<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`,
        },
        {
          title: "With Icon",
          preview: (
            <>
              <Badge>
                <Check className="size-3" />
                Success
              </Badge>
              <Badge variant="destructive">
                <AlertTriangle className="size-3" />
                Error
              </Badge>
            </>
          ),
          code: `<Badge>
  <Check className="size-3" />
  Success
</Badge>
<Badge variant="destructive">
  <AlertTriangle className="size-3" />
  Error
</Badge>`,
        },
      ]}
      props={[
        { name: "variant", type: '"default" | "secondary" | "destructive" | "outline"', default: '"default"', description: "The visual style." },
        { name: "className", type: "string", description: "Additional Tailwind classes." },
      ]}
    />
  )
}

/* ============= Avatar ============= */
export function AvatarPage() {
  return (
    <ComponentDocPage
      title="Avatar"
      description="An image element with a fallback for representing the user."
      slug="avatar"
      primary={{
        preview: (
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ),
        code: `<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`,
      }}
      examples={[
        {
          title: "Avatar Group",
          preview: (
            <div className="flex -space-x-3">
              <Avatar className="ring-2 ring-background">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="ring-2 ring-background">
                <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar className="ring-2 ring-background">
                <AvatarImage src="https://github.com/pacocoursey.png" alt="@pacocoursey" />
                <AvatarFallback>PC</AvatarFallback>
              </Avatar>
              <Avatar className="ring-2 ring-background">
                <AvatarFallback>+5</AvatarFallback>
              </Avatar>
            </div>
          ),
          code: `<div className="flex -space-x-3">
  <Avatar className="ring-2 ring-background">
    <AvatarImage src="..." alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  {/* ... */}
</div>`,
        },
        {
          title: "Sizes",
          preview: (
            <>
              <Avatar className="size-8"><AvatarFallback>S</AvatarFallback></Avatar>
              <Avatar className="size-10"><AvatarFallback>M</AvatarFallback></Avatar>
              <Avatar className="size-14"><AvatarFallback>L</AvatarFallback></Avatar>
              <Avatar className="size-20"><AvatarFallback>XL</AvatarFallback></Avatar>
            </>
          ),
          code: `<Avatar className="size-8"><AvatarFallback>S</AvatarFallback></Avatar>
<Avatar className="size-10"><AvatarFallback>M</AvatarFallback></Avatar>
<Avatar className="size-14"><AvatarFallback>L</AvatarFallback></Avatar>`,
        },
      ]}
      props={[
        { name: "src", type: "string", description: "The image source URL (on AvatarImage)." },
        { name: "alt", type: "string", description: "The alt text for the image (on AvatarImage)." },
        { name: "delayMs", type: "number", default: "0", description: "Useful for delaying rendering so it doesn't flicker during hydration (on AvatarFallback)." },
      ]}
    />
  )
}

/* ============= Skeleton ============= */
export function SkeletonPage() {
  return (
    <ComponentDocPage
      title="Skeleton"
      description="Use to display a placeholder preview of content before the data gets loaded, allowing a slow connection to read the page structure."
      slug="skeleton"
      primary={{
        preview: <Skeleton className="h-12 w-12 rounded-full" />,
        code: `<Skeleton className="h-12 w-12 rounded-full" />`,
      }}
      examples={[
        {
          title: "Card Skeleton",
          preview: (
            <div className="flex w-72 items-center gap-4">
              <Skeleton className="size-12 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          ),
          code: `<div className="flex items-center gap-4">
  <Skeleton className="size-12 rounded-full" />
  <div className="flex-1 space-y-2">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-3/4" />
  </div>
</div>`,
        },
      ]}
      props={[
        { name: "className", type: "string", description: "Additional Tailwind classes for sizing and shape." },
      ]}
    />
  )
}

/* ============= Progress ============= */
export function ProgressPage() {
  const [progress, setProgress] = React.useState(33)
  return (
    <ComponentDocPage
      title="Progress"
      description="Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
      slug="progress"
      primary={{
        preview: <Progress value={progress} className="w-72" />,
        code: `<Progress value={33} className="w-72" />`,
      }}
      examples={[
        {
          title: "Animated",
          preview: (
            <div className="flex w-72 flex-col gap-2">
              <Progress value={75} className="animate-pulse" />
              <p className="text-xs text-muted-foreground">75% complete</p>
            </div>
          ),
          code: `<Progress value={75} />
<p>75% complete</p>`,
        },
      ]}
      props={[
        { name: "value", type: "number", description: "The current progress value (0-100)." },
        { name: "max", type: "number", default: "100", description: "The maximum progress value." },
      ]}
    />
  )
}

/* ============= Table ============= */
export function TablePage() {
  const invoices = [
    { id: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
    { id: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
    { id: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
    { id: "INV004", status: "Paid", method: "Credit Card", amount: "$450.00" },
    { id: "INV005", status: "Paid", method: "PayPal", amount: "$550.00" },
  ]
  return (
    <ComponentDocPage
      title="Table"
      description="A responsive table component."
      slug="table"
      primary={{
        preview: (
          <div className="w-96 overflow-hidden rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((inv) => (
                  <TableRow key={inv.id}>
                    <TableCell className="font-medium">{inv.id}</TableCell>
                    <TableCell>{inv.status}</TableCell>
                    <TableCell>{inv.method}</TableCell>
                    <TableCell className="text-right">{inv.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ),
        code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map((inv) => (
      <TableRow key={inv.id}>
        <TableCell className="font-medium">{inv.id}</TableCell>
        <TableCell>{inv.status}</TableCell>
        <TableCell>{inv.method}</TableCell>
        <TableCell className="text-right">{inv.amount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`,
      }}
      props={[
        { name: "className", type: "string", description: "Additional Tailwind classes." },
      ]}
    />
  )
}

/* ============= Alert ============= */
export function AlertPage() {
  return (
    <ComponentDocPage
      title="Alert"
      description="Displays a callout for user attention."
      slug="alert"
      primary={{
        preview: (
          <Alert className="w-96">
            <Terminal className="size-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the CLI.
            </AlertDescription>
          </Alert>
        ),
        code: `<Alert>
  <Terminal className="size-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the CLI.
  </AlertDescription>
</Alert>`,
      }}
      examples={[
        {
          title: "Destructive",
          preview: (
            <Alert variant="destructive" className="w-96">
              <CircleAlert className="size-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Your session has expired. Please log in again.
              </AlertDescription>
            </Alert>
          ),
          code: `<Alert variant="destructive">
  <CircleAlert className="size-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`,
        },
        {
          title: "Info",
          preview: (
            <Alert className="w-96">
              <Info className="size-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                Journal DS is open source and MIT licensed.
              </AlertDescription>
            </Alert>
          ),
          code: `<Alert>
  <Info className="size-4" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    Journal DS is open source and MIT licensed.
  </AlertDescription>
</Alert>`,
        },
      ]}
      props={[
        { name: "variant", type: '"default" | "destructive"', default: '"default"', description: "The visual style of the alert." },
        { name: "className", type: "string", description: "Additional Tailwind classes." },
      ]}
    />
  )
}

/* ============= Accordion ============= */
export function AccordionPage() {
  return (
    <ComponentDocPage
      title="Accordion"
      description="A vertically stacked set of interactive headings that each reveal a section of content."
      slug="accordion"
      primary={{
        preview: (
          <Accordion type="single" collapsible className="w-96">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that match the other components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It uses CSS animations for smooth transitions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ),
        code: `<Accordion type="single" collapsible className="w-96">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
      Yes. It uses CSS animations for smooth transitions.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
      }}
      props={[
        { name: "type", type: '"single" | "multiple"', required: true, description: "Whether only one item can be open at a time, or multiple." },
        { name: "collapsible", type: "boolean", description: "When type is 'single', allows the open item to be collapsed again." },
        { name: "defaultValue", type: "string | string[]", description: "The default open item value(s)." },
      ]}
    />
  )
}

/* ============= Collapsible ============= */
export function CollapsiblePage() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <ComponentDocPage
      title="Collapsible"
      description="An interactive component which expands/collapses a panel."
      slug="collapsible"
      primary={{
        preview: (
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-96">
            <div className="flex items-center gap-4">
              <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon" className="size-6">
                  <ChevronDown className={`size-4 transition ${isOpen ? "rotate-180" : ""}`} />
                </Button>
              </CollapsibleTrigger>
            </div>
            <div className="mt-2 space-y-2">
              <div className="rounded-md border px-4 py-2 text-sm">@radix-ui/primitives</div>
              <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-4 py-2 text-sm">@radix-ui/colors</div>
                <div className="rounded-md border px-4 py-2 text-sm">@stitches/react</div>
              </CollapsibleContent>
            </div>
          </Collapsible>
        ),
        code: `<Collapsible>
  <CollapsibleTrigger asChild>
    <Button variant="ghost" size="icon">
      <ChevronDown className="size-4" />
    </Button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    Content goes here.
  </CollapsibleContent>
</Collapsible>`,
      }}
      props={[
        { name: "open", type: "boolean", description: "The controlled open state." },
        { name: "defaultOpen", type: "boolean", description: "The default open state for an uncontrolled Collapsible." },
        { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback called when the open state changes." },
      ]}
    />
  )
}

/* ============= Tabs ============= */
export function TabsPage() {
  return (
    <ComponentDocPage
      title="Tabs"
      description="A set of layered sections of content — known as tab panels — that are displayed one at a time."
      slug="tabs"
      primary={{
        preview: (
          <Tabs defaultValue="account" className="w-96">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
          </Tabs>
        ),
        code: `<Tabs defaultValue="account" className="w-96">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Make changes to your account here.
  </TabsContent>
  <TabsContent value="password">
    Change your password here.
  </TabsContent>
</Tabs>`,
      }}
      props={[
        { name: "value", type: "string", description: "The controlled active tab value." },
        { name: "defaultValue", type: "string", description: "The default active tab value." },
        { name: "onValueChange", type: "(value: string) => void", description: "Callback called when the active tab changes." },
        { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "The orientation of the tabs." },
      ]}
    />
  )
}
