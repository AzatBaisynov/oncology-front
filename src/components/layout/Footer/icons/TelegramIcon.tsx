import type { SVGProps } from 'react';
import { SvgIcon } from './SvgIcon';

export function TelegramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="M21 4 3 11l6 2 2 6 3-4 5 3 2-14Z" />
    </SvgIcon>
  );
}
