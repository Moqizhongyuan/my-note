import Note from "@/components/Note";
import { getNote } from "@/lib/redis";

export default async function Page(props: {
  params: Promise<{ id: string; [key: string]: unknown }>;
}) {
  const params = await props.params;
  // 动态路由 获取笔记 id
  const noteId = params.id;
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

  return <Note noteId={noteId} note={note} />;
}
