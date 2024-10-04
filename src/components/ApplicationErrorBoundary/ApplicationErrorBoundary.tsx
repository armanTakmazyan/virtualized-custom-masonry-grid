import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from './ErrorFallback';
import { ApplicationErrorBoundaryProps } from './types';

export const ApplicationErrorBoundary: React.FC<
  ApplicationErrorBoundaryProps
> = ({ children }) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
);
