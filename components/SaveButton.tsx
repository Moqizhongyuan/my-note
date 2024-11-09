import Image from "next/image";
import { useFormStatus } from "react-dom";

export default function SaveButton({
  formAction,
}: {
  formAction: (payload: FormData) => void;
}) {
  const { pending } = useFormStatus();
  return (
    <button
      className="note-editor-done"
      type="submit"
      formAction={formAction}
      disabled={pending}
      role="menuitem"
    >
      <Image
        src="/checkmark.svg"
        width="14"
        height="10"
        alt=""
        role="presentation"
      />
      {pending ? "Saving" : "Done"}
    </button>
  );
}
