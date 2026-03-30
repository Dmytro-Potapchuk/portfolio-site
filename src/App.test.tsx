import React from 'react';
import { render, screen } from '@testing-library/react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function BrandProbe() {
  const { t } = useLanguage();
  return <span>{t.brand}</span>;
}

test('language provider exposes site brand', () => {
  render(
    <LanguageProvider>
      <BrandProbe />
    </LanguageProvider>
  );
  expect(screen.getByText(/Dmytro Potapchuk/i)).toBeInTheDocument();
});
