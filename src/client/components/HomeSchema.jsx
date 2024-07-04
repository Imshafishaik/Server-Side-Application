import React from 'react'

const HomeSchema = () => {

    const helloSchema={
        "@context": "http://schema.org",
        "@type": "ItemList",
        mainEntityOfPage: {
            "@type":"WebPage",
            "@id":"https://www.mmtfrontend.com"
          },
    }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(helloSchema),
        }}
      />
    </>
  )
}

export default HomeSchema
