import { Inote } from "./Note";
import SidebarNoteItemContent from "./SidebarNoteItemContent";
import SidebarNoteItemHeader from "@/components/SidebarNoteItemHeader";

export default function SidebarNoteItem({
  noteId,
  note,
}: {
  noteId: string;
  note: Inote;
}) {
  const { title, content = "", updateTime } = note;
  return (
    <SidebarNoteItemContent
      id={noteId}
      title={note.title}
      expandedChildren={
        <p className="sidebar-note-excerpt">
          {content.substring(0, 20) || <i>(No content)</i>}
        </p>
      }
    >
      <SidebarNoteItemHeader title={title} updateTime={updateTime} />
    </SidebarNoteItemContent>
  );
}
