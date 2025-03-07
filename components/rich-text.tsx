import React from 'react'

const RichText = ({block}) => {
  return (
    <div key={block.item.id}>
    <h2>{block.item.headline}</h2>
    <div
        className='prose text-white prose-h1:text-white max-w-full mx-auto w-full prose-headings:text-white'
        dangerouslySetInnerHTML={{ __html: block.item.content }}
    />
</div>
  )
}

export default RichText