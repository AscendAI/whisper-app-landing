import Image from 'next/image';
import Link from 'next/link';

import logoImg from '../public/images/image-1-logo.svg';
import topHeaderImg from '../public/images/image-2-topHeader.svg';
import phoneWithHandImg from '../public/images/image-3-phonewithhand.svg';
import appStoreBtnImg from '../public/images/image-4-appstorebutton.svg';
import bottomHeaderImg from '../public/images/image-5-bottomheaderwithlogo.svg';
import footerImg from '../public/images/image-6-footer.svg';

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
          width={341}
          height={154}
          className="block"
          priority
        />
        <Image
          src={phoneWithHandImg}
          alt="Phone Showcase"
          width={374}
          height={472}
          className="block"
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
          width={335}
          height={403}
          className="block"
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
        <Image
          src={footerImg}
          alt="Footer"
          width={100}
          height={24}
          className="block"
        />
      </div>
    </main>
  );
}
