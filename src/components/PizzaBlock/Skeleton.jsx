import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader className="pizza__block" speed={2} width={280} height={465} viewBox="0 0 280 465" backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
    <circle cx="139" cy="130" r="120" />
    <rect x="0" y="270" rx="10" ry="10" width="280" height="27" />
    <rect x="0" y="409" rx="10" ry="10" width="130" height="45" />
    <rect x="150" y="409" rx="10" ry="10" width="130" height="45" />
    <rect x="0" y="324" rx="10" ry="10" width="280" height="35" />
    <rect x="0" y="364" rx="10" ry="10" width="280" height="36" />
  </ContentLoader>
);

export default Skeleton;
