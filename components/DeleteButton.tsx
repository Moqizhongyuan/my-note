import Image from "next/image";
import { useFormStatus } from "react-dom";

export default function DeleteButton({
  isDraft,
  formAction,
}: {
  isDraft: boolean;
  formAction: (payload: FormData) => void;
}) {
  const { pending } = useFormStatus();
  return (
    !isDraft && (
      <button
        className="note-editor-delete"
        disabled={pending}
        formAction={formAction}
        role="menuitem"
      >
        <Image
          src="/cross.svg"
          width="10"
          height="10"
          alt=""
          role="presentation"
        />
        Delete
      </button>
    )
  );
}
