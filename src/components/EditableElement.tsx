import React from 'react';
import { Link } from 'react-router-dom';
import { Edit2 } from 'lucide-react';
import { useCMS } from '../contexts/CMSContext';

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
  const { isEditing, data, selectElement, selectedId, updateElement } = useCMS();

  const stored = data[id];
  const content = stored?.content !== undefined ? stored.content : defaultContent;
  const href = stored?.href !== undefined ? stored.href : defaultHref;
  const style: React.CSSProperties = { ...defaultStyle, ...(stored?.style ?? {}) };
  const isSelected = selectedId === id;

  const handleClick = (e: React.MouseEvent) => {
    if (!isEditing) return;
    e.preventDefault();
    e.stopPropagation();
    if (!stored) {
      updateElement(id, { type, content: content ?? '', href, style: defaultStyle as Record<string, string> });
    }
    selectElement(id);
  };

  const Tag = as ?? (type === 'text' || type === 'icon' ? 'span' : 'div');

  if (!isEditing) {
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

  // Edit mode
  const ringClass = isSelected
    ? 'ring-2 ring-primary ring-offset-2 z-50'
    : 'hover:ring-2 hover:ring-blue-400 hover:ring-offset-1 hover:z-40 outline outline-1 outline-dashed outline-gray-300/50';

  let inner: React.ReactNode;
  if (type === 'image') {
    inner = (
      <img
        src={content}
        alt="Editable"
        className="w-full h-full object-cover pointer-events-none"
        referrerPolicy="no-referrer"
      />
    );
  } else if (type === 'container') {
    inner = children ?? content;
  } else {
    inner = content ?? children;
  }

  return (
    <Tag
      onClick={handleClick}
      className={`${className} relative transition-all duration-200 cursor-pointer ${ringClass}`}
      style={style}
      {...rest}
    >
      {isSelected && (
        <span className="absolute -top-3 -left-3 bg-primary text-white p-1 rounded-full shadow-sm z-50 animate-bounce">
          <Edit2 size={12} />
        </span>
      )}
      {inner}
    </Tag>
  );
}
