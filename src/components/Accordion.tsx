import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {faqs} from "@/constants";

export function FaqAccordion() {
  return (
    <Accordion collapsible className="mx-auto mt-4 w-full" type="single">
      {faqs.map((faq) => (
        <AccordionItem key={faq.value} className="last:border-b-0" value={faq.value}>
          <AccordionTrigger className="text-md items-center text-start md:text-[2vw]">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-md text-start text-primary md:text-[2vw]">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
