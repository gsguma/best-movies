window.onload = function () {
  var count = 0;
  var total = 0;
  var items = document.getElementsByClassName('item');
  var items_lenght = items.length;

  var url = window.top.location.hash;
  var hash = url.split('#').pop();

  for (var i = 0; i < items_lenght; i++) {
    let item = items[i];

    let title_element = item.getElementsByClassName('title')[0];
    let title_text = title_element.innerText;
    let title_url = title_text.toLowerCase();

    title_url = `https://google.com/search?q=movie+${encodeURIComponent(title_url).replace('%20', '+')}`;
    title_element.innerHTML = `<a target="_blank" href="${title_url}">${title_text}</a>`;
  }
}
