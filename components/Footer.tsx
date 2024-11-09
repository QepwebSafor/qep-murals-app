// components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer style={{ padding: '20px', textAlign: 'center' }}>
      <span>
        <Link href="/privacy-policy">Política de Privacidad</Link> |{' '}
        <Link href="/terms-of-service">Condiciones del Servicio</Link>
      </span>
    </footer>
  );
};

export default Footer;
