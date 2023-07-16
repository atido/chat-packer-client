import { Image, useBreakpointValue } from '@chakra-ui/react';

const Logo = () => {
    const logoSize = useBreakpointValue({ base: '20px', md: '30px', lg: '40px' });
  
    return <Image src="public/logo.svg" boxSize={logoSize} />;
}

export default Logo;
