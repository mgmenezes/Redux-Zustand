import { useAppSelector } from "../store";
import { useCurrentLesson } from "../store/slices/player";

export default function Header() {
  const { currentLesson, currentModule } = useCurrentLesson();

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentModule.title}</h1>
      <span className="text-sm text-zinc-400">
        Módulo "{currentLesson.title}"
      </span>
    </div>
  );
}
