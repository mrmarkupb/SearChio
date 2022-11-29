let query = document.querySelector('.query');
let searchBtn = document.querySelector('.searchBtn');

searchBtn.onclick = function() {
  let url = 'https://search.yahoo.com/search?p='+query.value;
  window.open(url,'_self');
};