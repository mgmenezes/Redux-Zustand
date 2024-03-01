import ReactPlayer from "react-player";
import { useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { next } from "../store/slices/player";

export default function Video() {
  const dispatch = useDispatch();

  const lesson = useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player;
    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ];
    return currentLesson;
  });
  function handlePlayNext() {
    dispatch(next());
  }
  return (
    <div className="flex-1">
      <div className="w-full bg-zinc-950 aspect-video">
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          url={`https://www.youtube.com/watch?v=${lesson.id}`}
          onEnded={handlePlayNext}
        />
      </div>
    </div>
  );
}
