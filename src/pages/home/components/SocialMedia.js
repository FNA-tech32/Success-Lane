import React from 'react';
import SocialIcon from 'components/socialIcon/SocialIcon';
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

import config from 'config/constants';

const links = [
  { href: config.social.TWITTER_URL, icon: faTwitter, className: 'ml-0' },
  { href: config.social.INSTA_URL, icon: faInstagram },
  { href: config.social.FB_URL, icon: faFacebook },
  { href: config.social.GITHUB_URL, icon: faGithub, className: 'mr-0' },
].filter((link) => link.href);

const SocialMedia = () => {
  if (!links.length) return null;

  return (
    <div className="flex flex-row-reverse self-center md:self-auto">
      {links.map((link) => (
        <SocialIcon
          key={link.href}
          href={link.href}
          icon={link.icon}
          size="2x"
          className={link.className}
        />
      ))}
    </div>
  );
};

export default SocialMedia;
