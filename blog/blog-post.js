function parseMarkdownWithFrontmatter(md) {
  let meta = {};
  let content = md;

  if (md.startsWith('---')) {
    const parts = md.split('---');
    const fm = parts[1].trim().split('\n');

    fm.forEach(line => {
      const [key, ...rest] = line.split(':');
      meta[key.trim()] = rest.join(':').trim().replace(/"/g, '');
    });

    content = parts.slice(2).join('---').trim();
  }

  return { meta, content };
}

const params = new URLSearchParams(window.location.search);
const file = params.get('post');

fetch(`posts/${file}`)
  .then(res => res.text())
  .then(md => {
    const { meta, content } = parseMarkdownWithFrontmatter(md);

    document.getElementById('post-title').innerText = meta.title || '';
    document.getElementById('post-desc').innerText = meta.description || '';
    document.getElementById('post-date').innerText = meta.date || '';

    document.getElementById('post-content').innerHTML =
      marked.parse(content);
  });
