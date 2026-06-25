"use client"

import * as React from "react"
import {
  AlertCircle,
  Check,
  ChevronDown,
  Copy,
  Mail,
  Minus,
  Plus,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp"
import { Button } from "@/components/ui/button"
import { ComponentDocPage } from "./_component-doc-template"

/* ============= Input ============= */
export function InputPage() {
  return (
    <ComponentDocPage
      title="Input"
      description="Displays a form text field or a component that looks like a text field."
      slug="input"
      primary={{
        preview: <Input placeholder="Email" className="w-64" />,
        code: `<Input placeholder="Email" />`,
      }}
      examples={[
        {
          title: "With Label",
          preview: (
            <div className="flex w-72 flex-col gap-2">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
          ),
          code: `<div className="flex flex-col gap-2">
  <Label htmlFor="email">Email address</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>`,
        },
        {
          title: "With Icon",
          preview: (
            <div className="relative w-72">
              <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="you@example.com" className="pl-9" />
            </div>
          ),
          code: `<div className="relative">
  <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
  <Input placeholder="you@example.com" className="pl-9" />
</div>`,
        },
        {
          title: "Disabled",
          preview: <Input disabled placeholder="Disabled" className="w-64" />,
          code: `<Input disabled placeholder="Disabled" />`,
        },
        {
          title: "File",
          preview: (
            <div className="flex w-72 items-center gap-2">
              <Input type="file" className="w-full" />
            </div>
          ),
          code: `<Input type="file" />`,
        },
        {
          title: "Error State",
          preview: (
            <div className="flex w-72 flex-col gap-1.5">
              <Input
                placeholder="Enter username"
                className="border-destructive focus-visible:ring-destructive"
                aria-invalid
              />
              <p className="flex items-center gap-1 text-xs text-destructive">
                <AlertCircle className="size-3" />
                Username is already taken.
              </p>
            </div>
          ),
          code: `<Input
  placeholder="Enter username"
  className="border-destructive focus-visible:ring-destructive"
  aria-invalid
/>`,
        },
      ]}
      props={[
        { name: "type", type: "string", default: '"text"', description: "The HTML input type (text, email, password, etc.)." },
        { name: "value", type: "string | number", description: "The controlled value of the input." },
        { name: "defaultValue", type: "string | number", description: "The default value for an uncontrolled input." },
        { name: "placeholder", type: "string", description: "Placeholder text shown when the input is empty." },
        { name: "disabled", type: "boolean", default: "false", description: "When true, the input is disabled." },
        { name: "className", type: "string", description: "Additional Tailwind classes." },
        { name: "...props", type: "InputHTMLAttributes<HTMLInputElement>", description: "All standard input HTML attributes." },
      ]}
    />
  )
}

/* ============= Textarea ============= */
export function TextareaPage() {
  return (
    <ComponentDocPage
      title="Textarea"
      description="Displays a form textarea or a component that looks like a textarea."
      slug="textarea"
      primary={{
        preview: <Textarea placeholder="Type your message here." className="w-72" />,
        code: `<Textarea placeholder="Type your message here." />`,
      }}
      examples={[
        {
          title: "With Label",
          preview: (
            <div className="flex w-72 flex-col gap-2">
              <Label htmlFor="message">Your message</Label>
              <Textarea id="message" placeholder="Type your message here." />
              <p className="text-xs text-muted-foreground">
                Write a few sentences about yourself.
              </p>
            </div>
          ),
          code: `<div className="flex flex-col gap-2">
  <Label htmlFor="message">Your message</Label>
  <Textarea id="message" placeholder="Type your message here." />
  <p className="text-xs text-muted-foreground">
    Write a few sentences about yourself.
  </p>
</div>`,
        },
        {
          title: "Disabled",
          preview: <Textarea disabled placeholder="Disabled" className="w-72" />,
          code: `<Textarea disabled placeholder="Disabled" />`,
        },
        {
          title: "With Rows",
          preview: <Textarea rows={8} placeholder="Up to 8 rows visible." className="w-72" />,
          code: `<Textarea rows={8} placeholder="Up to 8 rows visible." />`,
        },
      ]}
      props={[
        { name: "value", type: "string", description: "The controlled value." },
        { name: "defaultValue", type: "string", description: "The default value for an uncontrolled textarea." },
        { name: "rows", type: "number", default: "4", description: "The number of visible text rows." },
        { name: "placeholder", type: "string", description: "Placeholder text." },
        { name: "disabled", type: "boolean", default: "false", description: "When true, the textarea is disabled." },
        { name: "...props", type: "TextareaHTMLAttributes<HTMLTextAreaElement>", description: "All standard textarea HTML attributes." },
      ]}
    />
  )
}

/* ============= Label ============= */
export function LabelPage() {
  return (
    <ComponentDocPage
      title="Label"
      description="Renders an accessible label associated with controls."
      slug="label"
      primary={{
        preview: <Label>Email address</Label>,
        code: `<Label>Email address</Label>`,
      }}
      examples={[
        {
          title: "Linked to Input",
          preview: (
            <div className="flex w-72 flex-col gap-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter username" />
            </div>
          ),
          code: `<div className="flex flex-col gap-2">
  <Label htmlFor="username">Username</Label>
  <Input id="username" placeholder="Enter username" />
</div>`,
        },
        {
          title: "With Required Asterisk",
          preview: (
            <Label>
              Email <span className="text-destructive">*</span>
            </Label>
          ),
          code: `<Label>
  Email <span className="text-destructive">*</span>
</Label>`,
        },
      ]}
      props={[
        { name: "htmlFor", type: "string", description: "The id of the form control this label is associated with." },
        { name: "className", type: "string", description: "Additional Tailwind classes." },
        { name: "...props", type: "LabelHTMLAttributes<HTMLLabelElement>", description: "All standard label HTML attributes." },
      ]}
    />
  )
}

/* ============= Checkbox ============= */
export function CheckboxPage() {
  return (
    <ComponentDocPage
      title="Checkbox"
      description="A control that allows the user to toggle between checked and unchecked."
      slug="checkbox"
      primary={{
        preview: <Checkbox />,
        code: `<Checkbox />`,
      }}
      examples={[
        {
          title: "With Label",
          preview: (
            <div className="flex items-center gap-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="cursor-pointer">
                Accept terms and conditions
              </Label>
            </div>
          ),
          code: `<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms" className="cursor-pointer">
    Accept terms and conditions
  </Label>
</div>`,
        },
        {
          title: "Default Checked",
          preview: <Checkbox defaultChecked />,
          code: `<Checkbox defaultChecked />`,
        },
        {
          title: "Disabled",
          preview: (
            <div className="flex gap-4">
              <Checkbox disabled />
              <Checkbox defaultChecked disabled />
            </div>
          ),
          code: `<Checkbox disabled />
<Checkbox defaultChecked disabled />`,
        },
      ]}
      props={[
        { name: "checked", type: "boolean | 'indeterminate'", description: "The controlled checked state." },
        { name: "defaultChecked", type: "boolean", description: "The default checked state for an uncontrolled checkbox." },
        { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Callback called when the checked state changes." },
        { name: "disabled", type: "boolean", default: "false", description: "When true, the checkbox is disabled." },
        { name: "...props", type: "CheckboxProps", description: "All Radix Checkbox props." },
      ]}
    />
  )
}

/* ============= Switch ============= */
export function SwitchPage() {
  return (
    <ComponentDocPage
      title="Switch"
      description="A control that toggles between on and off states."
      slug="switch"
      primary={{
        preview: <Switch />,
        code: `<Switch />`,
      }}
      examples={[
        {
          title: "With Label",
          preview: (
            <div className="flex items-center gap-3">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>
          ),
          code: `<div className="flex items-center gap-3">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`,
        },
        {
          title: "Default Checked",
          preview: <Switch defaultChecked />,
          code: `<Switch defaultChecked />`,
        },
        {
          title: "Disabled",
          preview: (
            <div className="flex gap-4">
              <Switch disabled />
              <Switch defaultChecked disabled />
            </div>
          ),
          code: `<Switch disabled />
<Switch defaultChecked disabled />`,
        },
      ]}
      props={[
        { name: "checked", type: "boolean", description: "The controlled checked state." },
        { name: "defaultChecked", type: "boolean", description: "The default checked state." },
        { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Callback called when the state changes." },
        { name: "disabled", type: "boolean", default: "false", description: "When true, the switch is disabled." },
        { name: "...props", type: "SwitchProps", description: "All Radix Switch props." },
      ]}
    />
  )
}

/* ============= RadioGroup ============= */
export function RadioGroupPage() {
  return (
    <ComponentDocPage
      title="Radio Group"
      description="A set of checkable buttons — known as radio buttons — where no more than one of the buttons can be checked at a time."
      slug="radio-group"
      primary={{
        preview: (
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Comfortable</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3">Compact</Label>
            </div>
          </RadioGroup>
        ),
        code: `<RadioGroup defaultValue="comfortable">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="compact" id="r3" />
    <Label htmlFor="r3">Compact</Label>
  </div>
</RadioGroup>`,
      }}
      examples={[
        {
          title: "Horizontal",
          preview: (
            <RadioGroup defaultValue="comfortable" className="flex gap-6">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="default" id="rh1" />
                <Label htmlFor="rh1">Default</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="comfortable" id="rh2" />
                <Label htmlFor="rh2">Comfortable</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="compact" id="rh3" />
                <Label htmlFor="rh3">Compact</Label>
              </div>
            </RadioGroup>
          ),
          code: `<RadioGroup defaultValue="comfortable" className="flex gap-6">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="default" id="rh1" />
    <Label htmlFor="rh1">Default</Label>
  </div>
  {/* ... */}
</RadioGroup>`,
        },
      ]}
      props={[
        { name: "value", type: "string", description: "The controlled selected value." },
        { name: "defaultValue", type: "string", description: "The default selected value." },
        { name: "onValueChange", type: "(value: string) => void", description: "Callback called when the selected value changes." },
        { name: "orientation", type: '"horizontal" | "vertical"', default: '"vertical"', description: "The orientation of the radio group." },
        { name: "disabled", type: "boolean", default: "false", description: "When true, the entire group is disabled." },
      ]}
    />
  )
}

/* ============= Select ============= */
export function SelectPage() {
  return (
    <ComponentDocPage
      title="Select"
      description="Displays a list of options for the user to pick from — triggered by a button."
      slug="select"
      primary={{
        preview: (
          <Select>
            <SelectTrigger className="w-56">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        ),
        code: `<Select>
  <SelectTrigger className="w-56">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="blueberry">Blueberry</SelectItem>
      <SelectItem value="grapes">Grapes</SelectItem>
      <SelectItem value="pineapple">Pineapple</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`,
      }}
      props={[
        { name: "value", type: "string", description: "The controlled selected value." },
        { name: "defaultValue", type: "string", description: "The default selected value." },
        { name: "onValueChange", type: "(value: string) => void", description: "Callback called when the selected value changes." },
        { name: "disabled", type: "boolean", default: "false", description: "When true, the select is disabled." },
      ]}
    />
  )
}

/* ============= Slider ============= */
export function SliderPage() {
  const [value, setValue] = React.useState([50])
  return (
    <ComponentDocPage
      title="Slider"
      description="An input where the user selects a value from within a given range."
      slug="slider"
      primary={{
        preview: (
          <div className="w-72">
            <Slider value={value} onValueChange={setValue} max={100} step={1} />
          </div>
        ),
        code: `<Slider defaultValue={[50]} max={100} step={1} />`,
      }}
      examples={[
        {
          title: "Range Slider",
          preview: (
            <div className="w-72">
              <Slider defaultValue={[25, 75]} max={100} step={1} />
            </div>
          ),
          code: `<Slider defaultValue={[25, 75]} max={100} step={1} />`,
        },
        {
          title: "With Steps",
          preview: (
            <div className="w-72">
              <Slider defaultValue={[40]} max={100} step={10} />
            </div>
          ),
          code: `<Slider defaultValue={[40]} max={100} step={10} />`,
        },
      ]}
      props={[
        { name: "value", type: "number[]", description: "The controlled value(s)." },
        { name: "defaultValue", type: "number[]", description: "The default value(s) for an uncontrolled slider." },
        { name: "onValueChange", type: "(value: number[]) => void", description: "Callback called when the value(s) change." },
        { name: "min", type: "number", default: "0", description: "The minimum value." },
        { name: "max", type: "number", default: "100", description: "The maximum value." },
        { name: "step", type: "number", default: "1", description: "The stepping interval." },
        { name: "disabled", type: "boolean", default: "false", description: "When true, the slider is disabled." },
      ]}
    />
  )
}

/* ============= Toggle ============= */
export function TogglePage() {
  return (
    <ComponentDocPage
      title="Toggle"
      description="A two-state button that can be either on or off."
      slug="toggle"
      primary={{
        preview: (
          <Toggle aria-label="Toggle italic">
            <span className="font-bold italic">I</span>
          </Toggle>
        ),
        code: `<Toggle aria-label="Toggle italic">
  <span className="font-bold italic">I</span>
</Toggle>`,
      }}
      examples={[
        {
          title: "Default Pressed",
          preview: (
            <Toggle defaultPressed aria-label="Toggle bold">
              <span className="font-bold">B</span>
            </Toggle>
          ),
          code: `<Toggle defaultPressed aria-label="Toggle bold">
  <span className="font-bold">B</span>
</Toggle>`,
        },
        {
          title: "With Icon",
          preview: (
            <Toggle defaultPressed aria-label="Toggle underline">
              <span className="underline">U</span>
            </Toggle>
          ),
          code: `<Toggle defaultPressed aria-label="Toggle underline">
  <span className="underline">U</span>
</Toggle>`,
        },
        {
          title: "Disabled",
          preview: (
            <Toggle disabled aria-label="Toggle italic">
              <span className="font-bold italic">I</span>
            </Toggle>
          ),
          code: `<Toggle disabled aria-label="Toggle italic">
  <span className="font-bold italic">I</span>
</Toggle>`,
        },
      ]}
      props={[
        { name: "pressed", type: "boolean", description: "The controlled pressed state." },
        { name: "defaultPressed", type: "boolean", description: "The default pressed state." },
        { name: "onPressedChange", type: "(pressed: boolean) => void", description: "Callback called when the pressed state changes." },
        { name: "disabled", type: "boolean", default: "false", description: "When true, the toggle is disabled." },
      ]}
    />
  )
}

/* ============= ToggleGroup ============= */
export function ToggleGroupPage() {
  return (
    <ComponentDocPage
      title="Toggle Group"
      description="A set of two-state buttons that can be toggled on or off, with optional single or multiple selection."
      slug="toggle-group"
      primary={{
        preview: (
          <ToggleGroup type="single">
            <ToggleGroupItem value="a">A</ToggleGroupItem>
            <ToggleGroupItem value="b">B</ToggleGroupItem>
            <ToggleGroupItem value="c">C</ToggleGroupItem>
          </ToggleGroup>
        ),
        code: `<ToggleGroup type="single">
  <ToggleGroupItem value="a">A</ToggleGroupItem>
  <ToggleGroupItem value="b">B</ToggleGroupItem>
  <ToggleGroupItem value="c">C</ToggleGroupItem>
</ToggleGroup>`,
      }}
      examples={[
        {
          title: "Multiple Selection",
          preview: (
            <ToggleGroup type="multiple" defaultValue={["a", "c"]}>
              <ToggleGroupItem value="a">A</ToggleGroupItem>
              <ToggleGroupItem value="b">B</ToggleGroupItem>
              <ToggleGroupItem value="c">C</ToggleGroupItem>
            </ToggleGroup>
          ),
          code: `<ToggleGroup type="multiple" defaultValue={["a", "c"]}>
  <ToggleGroupItem value="a">A</ToggleGroupItem>
  <ToggleGroupItem value="b">B</ToggleGroupItem>
  <ToggleGroupItem value="c">C</ToggleGroupItem>
</ToggleGroup>`,
        },
        {
          title: "Outline Variant",
          preview: (
            <ToggleGroup type="single" variant="outline">
              <ToggleGroupItem value="left">Left</ToggleGroupItem>
              <ToggleGroupItem value="center">Center</ToggleGroupItem>
              <ToggleGroupItem value="right">Right</ToggleGroupItem>
            </ToggleGroup>
          ),
          code: `<ToggleGroup type="single" variant="outline">
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>`,
        },
      ]}
      props={[
        { name: "type", type: '"single" | "multiple"', required: true, description: "Whether the group allows a single value or multiple values." },
        { name: "value", type: "string | string[]", description: "The controlled selected value(s)." },
        { name: "defaultValue", type: "string | string[]", description: "The default selected value(s)." },
        { name: "onValueChange", type: "(value: string | string[]) => void", description: "Callback called when the selection changes." },
        { name: "variant", type: '"default" | "outline"', default: '"default"', description: "The visual style of the toggle items." },
      ]}
    />
  )
}

/* ============= InputOTP ============= */
export function InputOTPPage() {
  const [value, setValue] = React.useState("")
  return (
    <ComponentDocPage
      title="Input OTP"
      description="An accessible OTP (one-time password) input component."
      slug="input-otp"
      primary={{
        preview: (
          <InputOTP maxLength={6} value={value} onChange={(v) => setValue(v)}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        ),
        code: `<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`,
      }}
      props={[
        { name: "maxLength", type: "number", required: true, description: "The maximum number of characters the user can enter." },
        { name: "value", type: "string", description: "The controlled value." },
        { name: "onChange", type: "(value: string) => void", description: "Callback called when the value changes." },
        { name: "pattern", type: "RegExp", description: "A regular expression that the input must match." },
      ]}
    />
  )
}

/* ============= Form ============= */
export function FormPage() {
  return (
    <ComponentDocPage
      title="Form"
      description="Build forms with react-hook-form, zod validation, and accessible Journal DS components."
      slug="form"
      primary={{
        preview: (
          <form className="flex w-72 flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <Label htmlFor="form-username">Username</Label>
              <Input id="form-username" placeholder="Enter username" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="form-email">Email</Label>
              <Input id="form-email" type="email" placeholder="you@example.com" />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        ),
        code: `<form className="flex flex-col gap-4" onSubmit={onSubmit}>
  <div className="flex flex-col gap-2">
    <Label htmlFor="username">Username</Label>
    <Input id="username" placeholder="Enter username" />
  </div>
  <div className="flex flex-col gap-2">
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" placeholder="you@example.com" />
  </div>
  <Button type="submit">Submit</Button>
</form>`,
      }}
    />
  )
}
