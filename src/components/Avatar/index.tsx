import { AvatarProps } from './Avatar.types';
import styles from './Avatar.module.css';

export function Avatar({ hasBorder = true, ...props}: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
