import { PropsWithChildren, useId } from "react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

interface FormWrapperProps extends PropsWithChildren {
  readonly title: string;
  readonly value?: string;
}

export function FormWrapper({ children, title, value }: FormWrapperProps) {
  const id = useId();
  return (
    <AccordionItem
      className="rounded-lg border bg-background px-4 py-1"
      value={value ?? id}
    >
      <AccordionTrigger className="justify-start gap-3 py-2 text-[15px] leading-6 hover:no-underline [&>svg]:-order-1">
        {title}
      </AccordionTrigger>
      <AccordionContent className="pb-2 ps-7 text-muted-foreground">
        {children}
      </AccordionContent>
    </AccordionItem>
  );
}
