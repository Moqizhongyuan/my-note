// components/EditButton.js
import Link from "next/link";
import { ReactNode } from "react";

export default function EditButton({
  noteId,
  children,
}: {
  noteId: string | null;
  children: ReactNode;
}) {
  const isDraft = !noteId;
  return (
    <Link href={`/note/edit/${noteId || ""}`} className="link--unstyled">
      <button
        className={[
          "edit-button",
          isDraft ? "edit-button--solid" : "edit-button--outline",
        ].join(" ")}
        role="menuitem"
      >
        {children}
      </button>
    </Link>
  );
}
