import type { SVGProps } from 'react';
import { SvgIcon } from './SvgIcon';

export function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="m10 9 5 3-5 3V9Z" />
    </SvgIcon>
  );
}
