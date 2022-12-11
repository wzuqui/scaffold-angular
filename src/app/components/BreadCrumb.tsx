import React from 'react';
import { useLocation } from 'react-router-dom';

export function BreadCrumb() {
  const { pathname } = useLocation();
  return <div>{pathname}</div>;
}
