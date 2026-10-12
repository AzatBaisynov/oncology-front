import clsx from 'clsx';
import styles from './Button.module.scss';

type Props = {
  href?: string;                       // если передан — рендерится ссылка <a>
  variant?: 'primary' | 'outline';
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ href, variant = 'primary', className, children, ...rest }: Props) {
  const classes = clsx(styles.button, styles[variant], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
