fetch('/blog/posts/')
  .then(() => {
    const posts = ['test.md']; // later auto generate
    const container = document.getElementById('cmsPosts');

    posts.forEach(file => {
      fetch('/blog/posts/' + file)
        .then(res => res.text())
        .then(md => {
          const html = marked.parse(md);
          const div = document.createElement('article');
          div.innerHTML = html;
          container.appendChild(div);
        });
    });
  });
