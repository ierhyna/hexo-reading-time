# hexo-reading-time
[Hexo](https://hexo.io/) plugin that displays reading time for the article.

## Installation

```
npm install --save hexo-reading-time
```

## Usage
### Basic Usage

To display reading time, add the function into `post.ejs`.

Ejs:
```
<%- readingTime(page.content) %>
```
Swig:
```
{{ readingTime(page.content) }}
```
Jade:
```
span= readingTime(page.content)
```

It will display `X min. read`.

### Customization

You can cutomize the output by passing the second argument as a string.

Ejs:
```
<%- readingTime(page.content, 'min.') %>
```
Swig:
```
{{ readingTime(page.content, 'min.') }}
```
Jade:
```
span= readingTime(page.content, 'min.')
```

It will display `X min.`.

## License
MIT
