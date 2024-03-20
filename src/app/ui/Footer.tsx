
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from 'flowbite-react';
import Image from 'next/image';

function FooterComponent() {
  return (
    <Footer className='p-2 footer mt-20 h-auto bg-transparent '>
     <div className="w-full text-center ">  {/* sm:flex sm:items-center sm:justify-between */}
     <div className='w-full flex flex-col sm:flex-row justify-center items-center mb-2 sm:justify-between '>
        <div className="flex justify-center items-center sm:flex sm:justify-center sm:items-center"> {/* Espaciado adicional entre logo y título en dispositivos medianos */}
          <Image src={"/assets/icons/logo.png"} alt={"logo"} height={50} width={50} />
          <h3 className='font-bold text-2xl text-neutral-400'>MyAgenda</h3>
        </div>
        <FooterLinkGroup className='mt-2 sm:ml-4 sm:mt-0 flex flex-row  sm:flex sm:justify-center sm:items-center'> {/* Cambio de dirección en dispositivos medianos */}
          <FooterLink href="#" className='text-neutral-400'>About</FooterLink>
          <FooterLink href="#" className='text-neutral-400'>Privacy Policy</FooterLink>
          <FooterLink href="#" className='text-neutral-400'>Licensing</FooterLink>
          <FooterLink href="#" className='text-neutral-400'>Contact</FooterLink>
        </FooterLinkGroup>
      </div>

        <FooterDivider />
        <FooterCopyright className=' h-auto mt-[-15px] flex justify-center items-center text-neutral-400' href="#" by="MyAgenda" year={2024} />
      </div>
    </Footer>
  );
}

export default FooterComponent;