"use client";

import { useSearchParams } from "next/navigation";
import { Inote } from "./Note";
import SidebarNoteItemContent from "./SidebarNoteItemContent";
import { ReactNode } from "react";

const SidebarNoteListFilter = ({
  notes,
}: {
  notes: Array<{ noteId: string; note: Inote; header: ReactNode }>;
}) => {
  const searchParams = useSearchParams();
  const searchText = searchParams.get("q");
  return (
    <ul className="notes-list">
      {notes.map((noteItem) => {
        const { note, noteId, header } = noteItem;
        if (
          !searchText ||
          (searchText &&
            note.title.toLowerCase().includes(searchText.toLowerCase()))
        ) {
          return (
            <li key={noteId}>
              <SidebarNoteItemContent
                id={noteId}
                title={note.title}
                expandedChildren={
                  <p className="sidebar-note-excerpt">
                    {note.content.substring(0, 20) || <i>(No content)</i>}
                  </p>
                }
              >
                {header}
              </SidebarNoteItemContent>
            </li>
          );
        }

        return null;
      })}
    </ul>
  );
};

export default SidebarNoteListFilter;
