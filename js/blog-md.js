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
fetch(postUrl)
  .then(res => res.text())
  .then(md => {
    const { meta, content } = parseMarkdownWithFrontmatter(md);

    document.getElementById('post-title').innerText = meta.title || '';
    document.getElementById('post-date').innerText = meta.date || '';
    document.getElementById('post-desc').innerText = meta.description || '';

    document.getElementById('post-content').innerHTML =
      marked.parse(content);
  });
