import { ChevronDown } from "lucide-react";
import Lesson from "./Lesson";
import * as Collapsible from "@radix-ui/react-collapsible";

export type ModuleProps = {
  moduleIndex: number;
  title: string;
  amountLessons: number;
};

export default function Module({
  title,
  amountLessons,
  moduleIndex,
}: ModuleProps) {
  return (
    <Collapsible.Root className="group">
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong>{title}</strong>
          <span className="text-sm text-zinc-400 ">{amountLessons} aulas</span>
        </div>
        <ChevronDown className=" text-zinc-400 ml-auto w-5 h-5 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180" />
      </Collapsible.Trigger>
      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          <Lesson title="Fundamento do Redux" time="4:55" />
          <Lesson title="Fundamento do Redux" time="4:55" />
          <Lesson title="Fundamento do Redux" time="4:55" />
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
