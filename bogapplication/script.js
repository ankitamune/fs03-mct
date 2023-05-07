const postForm = document.getElementById('post-form');

postForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('comment').value;
  if (title.trim() === '' || description.trim() === '') {
    alert('Please fill in all fields');
    return;
  }
  const id = Date.now();
  const post = {title, description };
  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.push(post);
  localStorage.setItem('posts', JSON.stringify(posts));
  alert('Post added successfully');
  window.location.href = 'home.html';
});