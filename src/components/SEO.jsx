import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../config/siteConfig';

export default function SEO({
  title,
  description,
  name = siteConfig.companyName,
  type = 'website',
  url,
  image = '/favicon.png',
  schema,
  canonical
}) {
  const currentUrl = url ? `https://www.vajranicglobaltrade.com${url}` : 'https://www.vajranicglobaltrade.com';
  const canonicalUrl = canonical ? `https://www.vajranicglobaltrade.com${canonical}` : currentUrl;
  const imageUrl = image.startsWith('http') ? image : `https://www.vajranicglobaltrade.com${image}`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={name} />
      
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
