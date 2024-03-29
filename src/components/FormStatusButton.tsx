"use client";
// @ts-expect-error
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function FormStatusButton() {
  const { pending } = useFormStatus();
  //useFormStatus has to be used inside a <form> tag.
  //we can extract the current "pending" status
  return (
    <button type="submit" disabled={pending}>
      {pending ? "sending comment..." : "send comment"}
    </button>
  );
}
