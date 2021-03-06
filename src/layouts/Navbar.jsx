import NextLink from 'next/link';
import { Box, Link, Stack, Text } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { IconButton } from '@chakra-ui/button';
import { HamburgerIcon } from '@chakra-ui/icons';
import { AiTwotoneHome } from 'react-icons/ai';
import { IoDocumentTextSharp } from 'react-icons/io5';
import { SiGithub } from 'react-icons/si';

const categories = [
	// {
	// 	title: '홈',
	// 	link: '/',
	// },
	// {
	// 	title: '포스트',
	// 	link: '/posts',
	// },
	// {
	// 	title: '포트폴리오',
	// 	link: '/potfolio',
	// },
	{
		title: 'about',
		link: '/about',
	},
];

const Navbar = () => {
	return (
		<>
			<Stack
				isInline
				spacing='4'
				justifyContent='space-between'
				display={['none', 'none', 'flex']}
			>
				{categories.map((item) => (
					<NextLink href={item.link} key={item.title}>
						<Link fontWeight='bold' _hover={{ textDecoration: 'none' }}>
							{item.title}
						</Link>
					</NextLink>
				))}
				<Box display='flex' alignItems='center'>
					<Link target='_blank' href='https://github.com/Knorway'>
						<SiGithub />
					</Link>
				</Box>
				<Text
					fontSize='4xl'
					fontWeight='500'
					position='absolute'
					m='auto'
					left='50%'
					top='50%'
					transform='translate(-50%, -50%)'
				>
					<NextLink href='/' className='sdf'>
						<Link
							paddingBottom='2'
							display='inline-block'
							_hover={{ textDecoration: 'none' }}
						>
							knorway.github.io
						</Link>
					</NextLink>
				</Text>
			</Stack>
			<Box display={['block', 'block', 'none']}>
				<Menu>
					<MenuButton
						as={IconButton}
						aria-label='Options'
						icon={<HamburgerIcon />}
						size='md'
						variant='outline'
						border='none'
					/>
					<MenuList>
						<NextLink href='/'>
							<MenuItem icon={<AiTwotoneHome />}>
								<Link>home</Link>
							</MenuItem>
						</NextLink>
						<NextLink href='/about'>
							<MenuItem icon={<IoDocumentTextSharp />}>
								<Link>about</Link>
							</MenuItem>
						</NextLink>
					</MenuList>
				</Menu>
			</Box>
		</>
	);
};

export default Navbar;
