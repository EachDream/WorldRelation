import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  url: string;
};

export const MockupBrowser = ({ children, url }: Props) => {
  return (
    <div className="mockup-browser border bg-base-300 shadow-2xl">
      <div className="mockup-browser-toolbar">
        <div className="input">{url}</div>
      </div>
      <div className="flex justify-center bg-base-200">{children}</div>
    </div>
  );
};
