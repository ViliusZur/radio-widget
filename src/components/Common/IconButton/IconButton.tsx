import React from 'react';
import styles from './iconButton.module.css';

interface Props {
  testid: string;
  src: string;
  alt: string;
}

const IconButton: React.FC<Props> = ({ testid, src, alt }) => (
  <button className={styles.Invisible}>
    <img data-testid={testid} src={src} alt={alt} className={styles.Image} />
  </button>
);

export default IconButton;
