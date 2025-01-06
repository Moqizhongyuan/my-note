import NoteEditor from "@/components/NoteEditor";
import { getNote } from "@/lib/redis";

export default async function EditPage(props: {
  params: Promise<{
    id: string;
    [key: string]: unknown;
  }>;
}) {
  const params = await props.params;
  const noteId = params.id;
  const note = await getNote(noteId);

  if (note === null) {
    return (
      <div className="note--empty-state">
        <span className="note-text--empty-state">
          Click a note on the left to view something! 🥺
        </span>
      </div>
    );
  }

  return (
    <NoteEditor
      noteId={noteId}
      initialTitle={note.title}
      initialBody={note.content}
    />
  );
}
