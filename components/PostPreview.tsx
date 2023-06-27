import { PostMetadata } from './PostMetadata';
import Link from 'next/link';

export default function PostPreview(props: PostMetadata) {
  return (
    <div className="border border-slate-200 p-4 rounded-md shadow-sm">
      <p className="text-sm text-slate-400">{props.date}</p>
      <Link href={`/posts/${props.slug}`}>
        <h2 className="text-violet-600 hover:underline mb-4">{props.title}</h2>
      </Link>
      <p className="text-slate-700">{props.subtitle}</p>
    </div>
  );
}
