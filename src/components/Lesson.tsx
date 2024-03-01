import { PlayCircle, Video } from "lucide-react";

export type LessonProps = {
  title: string;
  time: string;
  isCurrent: boolean;
  onPlay: () => void;
};

export default function Lesson({
  time,
  title,
  onPlay,
  isCurrent = false,
}: LessonProps) {
  return (
    <button
      data-active={isCurrent}
      disabled={isCurrent}
      onClick={onPlay}
      className="flex items-center gap-3 text-sm text-zinc-500 data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100"
    >
      {isCurrent ? (
        <PlayCircle className="h-4 w-4 text-emerald-400" />
      ) : (
        <Video className="h-4 w-4 text-zinc-500" />
      )}
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">{time}</span>
    </button>
  );
}
