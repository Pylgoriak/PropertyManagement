import React from 'react';

export function FormTitle(props) {
    const { className, text } = props;
    return (
      <h1 className={`${className} formTitle`}>{text}</h1>
  )
}