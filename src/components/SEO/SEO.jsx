import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEO component — wraps react-helmet-async Helmet.
 * Use on every page for unique title / description / OG tags.
 *
 * Props:
 *  title        — page-specific title (without brand suffix)
 *  description  — unique meta description (max ~155 chars)
 *  canonical    — canonical URL path e.g. "/services"
 *  ogImage      — full URL for og:image (defaults to garage photo)
 *  noIndex      — set true on pages you don't want indexed
 */
const DEFAULT_OG_IMAGE =
  'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&q=80';

const SEO = ({
  title,
  description,
  canonical = '/',
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
}) => {
  const SITE_NAME = 'Bombay Motors';
  const SITE_URL = 'https://www.bombaymotors.com';
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — Multi Car Repair and Service | Madhubani, Bihar`;

  const canonicalUrl = `${SITE_URL}${canonical}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Geo */}
      <meta name="geo.region" content="IN-BR" />
      <meta name="geo.placename" content="Madhubani, Bihar, India" />
    </Helmet>
  );
};

export default SEO;
