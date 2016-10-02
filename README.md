# hexo-reading-time
Hexo plugin that displays reading time for the article.

## Installation

```
npm install --save hexo-reading-time
```

## Usage

To display reading time, add the function into `post.ejs`:
```
<%- readingTime(page.content) %>
```
It will display `X min. read`.

You can cutomize the by passing the second argument as a string:
```
<%- readingTime(page.content, 'min.') %>
```
It will display `X min.`.


## License
MIT
