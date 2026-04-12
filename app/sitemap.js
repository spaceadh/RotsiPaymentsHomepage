import { getAllPosts } from '../src/content/blog';
import { projects } from '../src/content/projects';
import { absoluteUrl } from '../src/lib/site';

export default function sitemap() {
  const now = new Date();
  const staticRoutes = ['/', '/contact', '/work', '/blog'];
  const projectRoutes = projects.map((project) => project.href);
  const blogRoutes = getAllPosts().map((post) => `/blog/${post.slug}`);

  return [...staticRoutes, ...projectRoutes, ...blogRoutes].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: path === '/contact' ? 'monthly' : 'weekly',
    priority: path === '/' ? 1 : path.startsWith('/blog/') ? 0.7 : 0.8,
  }));
}
