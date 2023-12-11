import { useEffect, useState } from 'react';
import sanitizeHtml from 'sanitize-html';

// Styled components
import { Content } from './style';

// Definitions
import { Props } from './types';
import { useDevice } from '@cencosud-ds/easy-design-system';

const HtmlText = (props: Props) => {
  // Props
  const { children, options } = props;

  // Hooks
  const { device } = useDevice();

  // State
  const [html, setHtml] = useState<string>('');

  // Methods
  const calculateHtml = () => {
    const sanitized = sanitizeHtml(children, {
      allowedTags: [
        'address',
        'article',
        'aside',
        'footer',
        'header',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'hgroup',
        'main',
        'nav',
        'section',
        'blockquote',
        'dd',
        'div',
        'dl',
        'dt',
        'figcaption',
        'figure',
        'hr',
        'li',
        'main',
        'ol',
        'p',
        'pre',
        'ul',
        'a',
        'abbr',
        'b',
        'bdi',
        'bdo',
        'br',
        'cite',
        'code',
        'data',
        'dfn',
        'em',
        'i',
        'kbd',
        'mark',
        'q',
        'rb',
        'rp',
        'rt',
        'rtc',
        'ruby',
        's',
        'samp',
        'small',
        'span',
        'strong',
        'sub',
        'sup',
        'time',
        'u',
        'var',
        'wbr',
        'caption',
        'col',
        'colgroup',
        'table',
        'tbody',
        'td',
        'tfoot',
        'th',
        'thead',
        'tr',
      ],
      ...options,
    });
    setHtml(sanitized);
  };

  // Effects
  useEffect(() => {
    calculateHtml();
  }, [children, options]);

  return (
    <Content
      dangerouslySetInnerHTML={{ __html: html }}
      style={{ fontSize: device === 'Phone' ? '14px' : '16px' }}
    />
  );
};

export default HtmlText;
