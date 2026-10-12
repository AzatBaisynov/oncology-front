import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Используйте эти Link / useRouter вместо стандартных из next —
// они автоматически сохраняют текущий язык в адресе
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
