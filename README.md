# react-responsive-image-container

Create responsive images.
[**GIT**](https://github.com/aapostolou/react-responsive-image-container)

## Before tou start

You need to know why responsive images are so usefull and how to create one.

Learn about [**Responsive Images**](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

## Installation

```bash
npm i react-responsive-image-container
```

## Usage

```javascript
import { ResponsiveImageContainer } from 'react-responsive-image-container'

const srcSet = [
  { path: 'https://via.placeholder.com/1920', size: 1920 },
  { path: 'https://via.placeholder.com/1200', size: 1200 },
  { path: 'https://via.placeholder.com/900', size: 900 },
  { path: 'https://via.placeholder.com/600', size: 600 },
  { path: 'https://via.placeholder.com/480', size: 480 },
  { path: 'https://via.placeholder.com/300', size: 300 }
]

const sizes = [
  { minWidth: '1366px', size: '350px' }, // if (window.innerWidth >= 1366px) { image.width = 350px }
  { minWidth: '1024px', size: '33vw' }, // if (window.innerWidth >= 1024px) { image.width = 33vw }
  { minWidth: '768px', size: '75vw' }, // if (window.innerWidth >= 768px) { image.width = 75vw }
  { minWidth: '0', size: '100vw' } // if (window.innerWidth >= 0) { image.width = 100vw }
]

const src = srcSet[0].path

<ResponsiveImageContainer
  srcSet={srcSet}
  sizes={sizes}
  src={src}
  loading={'lazy'}
  className={'much-responsive'}
/>
```

<details>
<summary>HTML Result</summary>
```
<div class="responsve-image-container much-responsive">
    <img srcset="https://via.placeholder.com/1920 1920w,
                 https://via.placeholder.com/1200 1200w,
                 https://via.placeholder.com/900 900w,
                 https://via.placeholder.com/600 600w,
                 https://via.placeholder.com/480 480w,
                 https://via.placeholder.com/300 300w"
         sizes="(min-width: 1366px) 300px,
                (min-width: 1024px) 33vw,
                (min-width: 768px) 75vw,
                (min-width: 0) 100vw"
         src="https://via.placeholder.com/1920"
         loading="lazy">
</div>
```
</details>

## Props\*

| Attribute |  Type  | Default  | Description                                           |
| :-------- | :----: | :------: | ----------------------------------------------------- |
| srcSet    | array  |  `null`  | (_Mandatory_) Array of objects (`{ path, size }`)     |
| sizes     | array  |   `[]`   | (_Optional_) Array of objects (`{ minWidth, size }`)  |
| src       | string |  `null`  | (_Optional_) Default **<img>** `src` attribute        |
| loading   | string | `'auto'` | (_Optional_) Default **<img>** `loading` attribute    |
| className | string |  `null`  | (_Optional_) Pass custom `className` to the container |
