
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from 'flowbite-react';
import Image from 'next/image';

function FooterComponent() {
  return (
    <Footer className='p-2 rounded-none mt-20 h-auto bg-slate-200 '>
     <div className="w-full text-center ">  {/* sm:flex sm:items-center sm:justify-between */}
     <div className='w-full flex flex-col sm:flex-row justify-center items-center mb-2 sm:justify-between '>
        <div className="flex justify-center items-center sm:flex sm:justify-center sm:items-center"> {/* Espaciado adicional entre logo y título en dispositivos medianos */}
          <Image src={"/assets/icons/logo.png"} alt={"logo"} height={50} width={50} />
          <h3 className='font-bold text-2xl text-neutral-900'>MyAgenda</h3>
        </div>
        <FooterLinkGroup className='mt-2 sm:ml-4 sm:mt-0 flex flex-row  sm:flex sm:justify-center sm:items-center'> {/* Cambio de dirección en dispositivos medianos */}
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Licensing</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterLinkGroup>
      </div>

        <FooterDivider />
        <FooterCopyright className=' h-auto mt-[-25px] flex justify-center items-center' href="#" by="MyAgenda" year={2024} />
      </div>
    </Footer>
  );
}

export default FooterComponent;