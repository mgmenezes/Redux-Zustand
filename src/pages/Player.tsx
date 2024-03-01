import { MessageCircle } from "lucide-react";
import Header from "../components/Header";
import Video from "../components/Video";
import Module from "../components/Module";
import { useAppSelector } from "../store";

export default function Player() {
  const modules = useAppSelector((state) => {
    return state.player.course.modules;
  });

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1110px] md-[768px] sm-[640px] flex-col gap-6">
        <div className="flex justify-between items-center">
          <Header />

          <button className="flex items-center gap-2 bg-violet-500 px-3     py-2 rounded-sm text-sm font-medium hover:bg-violet-600">
            <MessageCircle className="w-4 h-4" />
            Deixe seu feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-l border-zinc-700 bg-zinc-900 shadow pr-80">
          <Video />
          <aside
            className="absolute top-0 bottom-0 right-0 w-80 border-l divide-y-2 divide-zinc-900 border-zinc-800 
            overflow-y-scroll scrollbar-thin
             scrollbar-track-zinc-950 
             scrollbar-thumb-zinc-700"
          >
            {modules.map((module, index) => {
              return (
                <Module
                  key={module.id}
                  moduleIndex={index}
                  title={module.title}
                  amountLessons={module.lessons.length}
                />
              );
            })}
          </aside>
        </main>
      </div>
    </div>
  );
}
