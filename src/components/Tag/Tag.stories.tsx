import React from 'react';
import Tag from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
};

export const Primary = () => <Tag label="Primary Tag" color="primary" />;
export const Success = () => <Tag label="Success Tag" color="success" />;
export const Warning = () => <Tag label="Warning Tag" color="warning" />;
export const Error = () => <Tag label="Error Tag" color="error" />;
