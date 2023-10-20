import Link from "next/link";
import GetFormattedDate from "@/lib/getFormattedDtate";
type Props = {
  post: BlogPost;
};

export default function PostItem({ post }: Props) {
  const { id, title, date } = post;
  const newDate = GetFormattedDate(date);
  return (
    <div>
      <li className="text-left mt-4 text-2xl dark:text-white/90" key={id}>
        <Link
          className="underline hover:text-black/70 dark:hover:text-slate-300"
          href={`/Posts/${id}`}
        >
          {title}
        </Link>
        <p className="text-sm mt-1">{newDate}</p>
      </li>
    </div>
  );
}
