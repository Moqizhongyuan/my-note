import { getAllNotes } from "@/lib/redis";
import { Inote } from "./Note";
import SidebarItemHeader from "./SidebarNoteItemHeader";
import SidebarNoteListFilter from "./SidebarNoteListFilter";
import { ReactNode } from "react";

export default async function NoteList() {
  const notes = await getAllNotes();

  if (Object.entries(notes).length === 0) {
    return <div className="notes-empty">{"No notes created yet!"}</div>;
  }

  return (
    <SidebarNoteListFilter
      notes={Object.entries(notes).map(([noteId, note]) => {
        const noteData = JSON.parse(note) as Inote;
        return {
          noteId,
          note: noteData,
          header: (
            <SidebarItemHeader
              title={noteData.title}
              updateTime={noteData.updateTime}
            />
          ) as ReactNode,
        };
      })}
    />
  );
}
