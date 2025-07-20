import React from 'react';

export default function MapEmbed() {
  return (
    <div style={{ width: '100%', height: 0, paddingBottom: '56%', position: 'relative', marginTop: '1rem' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18…(your map embed URL)…"
        style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        allowFullScreen=""
        loading="lazy"
        title="Office Locations Map"
      />
    </div>
  );
}
