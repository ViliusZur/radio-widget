import React from 'react';
import styles from './iconButton.module.css';

interface Props {
  src: string;
  alt: string;
}

const Button: React.FC<Props> = ({ src, alt }) => (
  <button className={styles.Invisible}>
    <img src={src} alt={alt} className={styles.Image} />
  </button>
);

export default Button;
