import { Video } from "lucide-react";

export type LessonProps = {
  title: string;
  time: string;
};

export default function Lesson({ time, title }: LessonProps) {
  return (
    <button className="flex items-center gap-3 text-sm text-zinc-500">
      <Video className="h-4 w-4 text-zinc-500" />
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">{time}</span>
    </button>
  );
}
