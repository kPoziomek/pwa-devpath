import { DateTime } from 'luxon';
import { Trans } from 'react-i18next';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="has-text-centered">
        <Trans i18nKey="footer">
          Github repo <a href="https://phrase.com/blog"> pwa </a> .
          <br />
          Click and see source code
        </Trans>
      </p>
    </footer>
  );
};

export default Footer;
