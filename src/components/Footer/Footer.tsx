import Image from "next/image";

const Footer = (): React.JSX.Element => {
  return (
    <>
      <footer className="bg-white py-8">
        <div className="w-full text-center">
          <Image
            src="https://storage.googleapis.com/komon-website/logo-komon-gray.svg"
            className="mx-auto h-6 md:h-10"
            alt="Komon Logo"
            data-testid="komon-footer-logo"
          />
        </div>
        <div className="mt-2 w-full text-center">
          <a
            href="https://komon.notion.site/Privacy-Policy-3f888f71a7eb40e7a081e55bca0cef0b"
            data-testid="komon-privacy-policy-footer"
            className="footer-link"
          >
            Política de Privacidad
          </a>
          <span className="mx-2 text-dark-20">|</span>
          <a
            href="https://komon.notion.site/Terms-and-Conditions-1b8e47a400464d6fa9865e06d07fd26b"
            data-testid="komon-terms-of-use-footer"
            className="footer-link"
          >
            Condiciones de Uso
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
