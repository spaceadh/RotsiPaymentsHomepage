import { getAllPosts } from '../src/content/blog';
import { projects } from '../src/content/projects';
import { serviceEntries } from '../src/content/services';
import { absoluteUrl } from '../src/lib/site';

export default function sitemap() {
  const now = new Date();
  const staticRoutes = ['/', '/contact', '/work', '/labs', '/blog', '/services'];
  const projectRoutes = projects.map((project) => project.href);
  const blogRoutes = getAllPosts().map((post) => `/blog/${post.slug}`);
  const serviceRoutes = serviceEntries.map((service) => service.href);

  return [...staticRoutes, ...projectRoutes, ...blogRoutes, ...serviceRoutes].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: path === '/contact' ? 'monthly' : 'weekly',
    priority: path === '/' ? 1 : path.startsWith('/blog/') ? 0.7 : path.startsWith('/services') ? 0.85 : 0.8,
  }));
}
