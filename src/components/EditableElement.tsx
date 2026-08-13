import React from 'react';
import { Link } from 'react-router-dom';

type ElementType = 'text' | 'image' | 'button' | 'link' | 'icon' | 'container';

interface Props {
  id: string;
  type?: ElementType;
  defaultContent?: string;
  defaultHref?: string;
  defaultStyle?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  as?: React.ElementType | typeof Link;
  [key: string]: unknown;
}

export function EditableElement({
  id,
  type = 'text',
  defaultContent,
  defaultHref,
  defaultStyle = {},
  className = '',
  children,
  as,
  ...rest
}: Props) {
  const content = defaultContent;
  const href = defaultHref;
  const style: React.CSSProperties = { ...defaultStyle };

  const Tag = as ?? (type === 'text' || type === 'icon' ? 'span' : 'div');

  if (type === 'image') {
    return (
      <img
        src={content}
        alt="Content"
        className={className}
        style={style}
        referrerPolicy="no-referrer"
        {...(rest as React.ImgHTMLAttributes<HTMLImageElement>)}
      />
    );
  }
  if (type === 'button' || type === 'link') {
    if (children) {
      return (
        <Tag href={href} to={href} className={className} style={style} {...rest}>
          {children}
        </Tag>
      );
    }
    return (
      <Tag href={href} to={href} className={className} style={style} {...rest}>
        <span className="flex items-center gap-2">{content}</span>
      </Tag>
    );
  }
  if (type === 'container') {
    return (
      <Tag className={className} style={style} {...rest}>
        {children ?? content}
      </Tag>
    );
  }
  return (
    <Tag className={className} style={style} {...rest}>
      {content ?? children}
    </Tag>
  );
}
