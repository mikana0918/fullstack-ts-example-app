import { useMemo } from 'react'
import {
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  HStack,
  Avatar,
  Text
} from '@chakra-ui/react'
import { FiHome, FiBook, FiSettings } from 'react-icons/fi'
import { IconType } from 'react-icons'
import NextLink from 'next/link'
import { pagesPath } from '~/utils/$path'
import { useAuth } from '~/hooks/useAuth'
import { AmplifyUser } from '@aws-amplify/ui'

const DEFAULT_USER_ICON_PATH =
  'https://icon-library.com/images/anonymous-user-icon/anonymous-user-icon-16.jpg'

interface LinkItemProps {
  name: string
  icon: IconType
  path: string
}
const LinkItems: Array<LinkItemProps> = [
  {
    name: 'Home',
    icon: FiHome,
    path: '/'
  },
  {
    name: 'Articles',
    icon: FiBook,
    path: pagesPath.article.$url().pathname
  },
  {
    name: 'Settings',
    icon: FiSettings,
    path: pagesPath.settings.$url().pathname
  }
]

export default function SimpleSidebar() {
  const { isOpen, onClose } = useDisclosure()
  const { user, cognitoUser } = useAuth()

  const userIconPath = useMemo(() => {
    return user?.icon_path
      ? `${process.env.NEXT_PUBLIC_ASSET_ORIGIN_URL}/${user.icon_path}`
      : DEFAULT_USER_ICON_PATH
  }, [user])

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
        userIconPath={userIconPath}
        cognitoUser={cognitoUser}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent
            onClose={onClose}
            userIconPath={userIconPath}
            cognitoUser={cognitoUser}
          />
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

interface SidebarProps extends BoxProps {
  onClose: () => void
  userIconPath: string
  cognitoUser?: AmplifyUser
}

const SidebarContent = ({
  onClose,
  userIconPath,
  cognitoUser,
  ...rest
}: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} path={link.path}>
          {link.name}
        </NavItem>
      ))}
      <Box position={'fixed'} bottom={0} padding={'3'}>
        <HStack>
          {cognitoUser ? (
            <Box>
              <HStack>
                <Avatar src={userIconPath} />
                <Text fontSize={'sm'}>{'TODO: NAME'}</Text>
              </HStack>
            </Box>
          ) : null}
        </HStack>
      </Box>
    </Box>
  )
}

interface NavItemProps extends FlexProps {
  icon: IconType
  path: string
  children: string | number
}

const NavItem = ({ icon, path, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href={path}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      as={NextLink}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white'
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white'
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}
