const listProps = ['title', 'date', 'slug'];
module.exports = {
  archive: listProps,
  categoryPosts: listProps,
  tagPosts: listProps,
  page: ['title', 'date', 'updated', 'content', 'color'],
  post: ['title', 'date', 'author', 'thumbnail', 'excerpt', 'slug', 'comments', 'dropcap', 'tags', 'categories', 'updated', 'content', 'prev', 'next', 'color'],
  postList: ['title', 'date', 'author', 'thumbnail', 'excerpt', 'slug', 'tags', 'categories'],

  site: ['title', 'subtitle', 'description', 'author', 'language', 'timezone', 'url', 'root', 'feed'],
  theme: ['menu', 'page', 'profile', 'sns', 'copyright', 'disqus', 'color', 'thumbnail'],
}