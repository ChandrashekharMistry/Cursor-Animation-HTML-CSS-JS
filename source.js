const follower = document.getElementById('follower');
document.addEventListener('mousemove', e => {
  follower.style.top = e.pageY -5 + 'px';
  follower.style.left = e.pageX + 'px';
});