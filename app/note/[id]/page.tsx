import Note from "@/components/Note";
import { getNote } from "@/lib/redis";

export default async function Page({ params }: { params: { id: string } }) {
  // 动态路由获取笔记 id
  const noteId = params.id;

  // 从 Redis 中获取笔记
  const note = await getNote(noteId);

  if (note == null) {
    return (
      <div className="note--empty-state">
        <span className="note-text--empty-state">
          Click a note on the left to view something! 🥺
        </span>
      </div>
    );
  }

  // 渲染 Note 组件
  return <Note noteId={noteId} note={note} />;
}
