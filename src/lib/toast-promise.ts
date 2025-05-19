import toast from "react-hot-toast";

/**
 * Fungsi toast.promise yang reusable.
 * @param promise Promise apa pun yang ingin ditampilkan dengan toast
 * @param messages Object berisi pesan loading, success, dan error
 */
export function toastPromise<T>(
  promise: Promise<T>,
  messages: {
    loading: string;
    success: string;
    error: string;
  }
): Promise<T> {
  return toast.promise(promise, {
    loading: messages.loading,
    success: messages.success,
    error: messages.error,
  });
}
