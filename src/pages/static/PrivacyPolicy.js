import React from 'react';
import MarkdownReader from 'components/markdownReader/MarkdownReader';
import privacyPolicy from './PrivacyPolicy.md?url';

function PrivacyPolicy() {
  return <MarkdownReader content={privacyPolicy} />;
}

export default PrivacyPolicy;
