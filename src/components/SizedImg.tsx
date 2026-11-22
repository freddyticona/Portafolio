/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * SizedImg — envoltorio de <img> que añade width/height reales desde
 * IMAGE_DIMENSIONS para reservar espacio y mantener CLS = 0.
 */
import React from 'react';
import { imgProps } from '../lib/imageProps';

type Props = React.ImgHTMLAttributes<HTMLImageElement>;

export default function SizedImg({ src, alt = '', ...rest }: Props) {
  const dims = imgProps(typeof src === 'string' ? src : undefined);
  return <img src={src} alt={alt} {...dims} {...rest} />;
}
