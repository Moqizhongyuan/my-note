import Note from "@/components/Note";
import { getNote } from "@/lib/redis";
import { Params } from "next/dist/server/request/params";

export default async function Page({ params }: { params: Params }) {
  // 动态路由 获取笔记 id
  const { id: noteId } = (await params) as { id: string };
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
