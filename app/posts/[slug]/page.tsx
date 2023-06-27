import getPostMetadata from '@/components/getPostMetadata';
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';

const getPostContent = (slug: string) => {
  const folder = 'posts/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);

  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default function Post(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <div>
      <div className="my-12">
        <h1 className="text-2xl text-slate-700 font-bold text-center">
          {post.data.title}
        </h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>
      <article className="prose lg:prose-xl">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
}
