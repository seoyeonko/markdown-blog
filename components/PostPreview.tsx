import { PostMetadata } from './PostMetadata';
import Link from 'next/link';

export default function PostPreview(props: PostMetadata) {
  return (
    <div key={props.slug}>
      <Link href={`/posts/${props.slug}`}>
        <h2>{props.title}</h2>
      </Link>
      <p>{props.subtitle}</p>
      <p>{props.date}</p>
    </div>
  );
}
