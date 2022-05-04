import { Button } from 'app/components/Button';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <h1>My HomePage</h1>
      <Button
        variant="link"
        href="https://github.com/shekhardesigner/socccd.ts-react/"
      />
    </>
  );
}
