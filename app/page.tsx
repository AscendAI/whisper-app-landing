import Image from 'next/image';
import Link from 'next/link';

import logoImg from '../public/images/image-1-logo.png';
import topHeaderImg from '../public/images/image-2-topHeader.png';
import phoneWithHandImg from '../public/images/image-3-phonewithhand.png';
import appStoreBtnImg from '../public/images/image-4-appstorebutton.png';
import bottomHeaderImg from '../public/images/image-5-bottomheaderwithlogo.png';
import footerImg from '../public/images/image-6-footer.png';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07070b] flex flex-col items-center">
      <div className="w-full max-w-md flex flex-col items-center overflow-hidden">
        <Image
          src={logoImg}
          alt="Logo"
          width={96}
          height={32}
          className="block"
          priority
        />
        <Image
          src={topHeaderImg}
          alt="Header"
          className="w-full h-auto block"
          priority
        />
        <Image
          src={phoneWithHandImg}
          alt="Phone Showcase"
          className="w-full h-auto block"
          priority
        />
        <Link href="#" className="block hover:opacity-80 transition-opacity">
          <Image
            src={appStoreBtnImg}
            alt="Download on App Store"
            width={152}
            height={48}
            className="block"
            priority
          />
        </Link>
        <Image
          src={bottomHeaderImg}
          alt="Features"
          className="w-full h-auto block"
        />
        <Link href="#" className="block hover:opacity-80 transition-opacity">
          <Image
            src={appStoreBtnImg}
            alt="Download on App Store"
            width={152}
            height={48}
            className="block"
          />
        </Link>
        <Image src={footerImg} alt="Footer" className="w-full h-auto block" />
      </div>
    </main>
  );
}
