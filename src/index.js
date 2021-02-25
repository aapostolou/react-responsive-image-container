import React, { useEffect } from 'react'

export const ResponsiveImageContainer = ({
  srcSet,
  sizes = [],
  src = '',
  loading = 'auto',
  className
}) => {
  useEffect(() => {
    /* srcSet */
    if (!srcSet) {
      throw `ResponsiveImageContainer - 'image' is not set.`
    } else if (!Array.isArray(srcSet)) {
      throw `ResponsiveImageContainer - 'image' must be an Array.\n\tCurrent type: ${Object.prototype.toString.call(
        srcSet
      )}`
    }

    /* sizes */
    if (!Array.isArray(sizes)) {
      throw `ResponsiveImageContainer - 'sizes' must be an Array.\n\tCurrent type: ${Object.prototype.toString.call(
        sizes
      )}`
    }

    /* loading */
    if (['auto', 'lazy', 'eager'].indexOf(loading) == -1) {
      throw `'loading' attribute must be 'auto', 'lazy' or 'eager'.\n\tCurrent value: ${loading}`
    }
  }, [srcSet, sizes, loading])

  /* srcSet */
  const generateSrcSet = () =>
    srcSet.map((image) => `${image.path} ${image.size}w`).join(',')
  /* sizes */
  const generateSizes = () =>
    sizes
      .sort((a, b) => a.size - b.size)
      .map(
        (breakpoint) => `(min-width: ${breakpoint.minWidth}) ${breakpoint.size}`
      )
      .join(',')

  /* className */
  const generateClassName = () =>
    `responsve-image-container${className ? ` ${className}` : ''}`

  return (
    <div className={generateClassName()}>
      <img
        srcSet={generateSrcSet()}
        sizes={generateSizes()}
        src={src}
        loading={loading}
      />
    </div>
  )
}
