// app/[slug]/page.jsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import QuizForm from '@components/QuizForm';
import QuizResult from '@components/QuizResult';

async function getPost(slug) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    ...data,
    content: contentHtml,
    slug,
  };
}

const BlogPost = async ({ params }) => {
  const post = await getPost(params.slug);

  return (
    <>
      <title>{post.title}</title>
      <meta name="description" content={post.description} />
      <meta name="keywords" content={post.keywords} />

      <section className="gradient-border d-flex flex-column align-items-center">
        <h1>{post.title}</h1>
        {post.postImage && <img src={post.postImage} alt={`Image de ${post.title}`} className="post-img img-fluid mx-auto m-4"/>}
        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

        {params.slug === 'quiz-trouvez-votre-mouvement-artistique' && <QuizForm />}
      </section>
    </>
  );
};

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export default BlogPost;
