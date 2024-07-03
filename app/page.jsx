import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

async function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ''),
      ...data,
    };
  });

  // Sort posts by order
  posts.sort((a, b) => (a.order || 0) - (b.order || 0));

  return posts;
}

const Blog = async () => {
  const posts = await getPosts();

  return (
    <>
      <title>Blog - Brekor</title>
      <meta name="description" content="Découvrez les derniers articles de notre blog." />
      <meta name="keywords" content="blog, articles" />

      <section className="gradient-border">
        <h1 className="d-none">Blog</h1>
        <ul className="row d-flex justify-content-center gap-4 p-0">
          {posts.map((post) => (
            <li key={post.slug} className="col-4 blog-card p-0">
              <a href={`/${post.slug}`} className="d-flex flex-column justify-content-around">
                <img src={post.blogImage} alt="Image de l'article" className="img-fluid mx-auto" />
                <p><strong>{post.title}</strong></p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Blog;
