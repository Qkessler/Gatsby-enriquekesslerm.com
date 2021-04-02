/** @jsx jsx */

import { Link as GatsbyLink } from 'gatsby'
import { jsx, Text, Box, Link } from 'theme-ui'
import ThemeSwitch from './theme-switch'

const NavLink = ({ path, text }) => {
  return (
    <Link as={GatsbyLink} to={path}>
      <Box as='div' sx={{ color: 'text', fontSize: 18 }}>
        <Text sx={{ p: 10 }}>{text}</Text>
      </Box>
    </Link>)
}

export default () => {
  return (
    <header sx={{
      '@media print': { display: 'none' },
      display: 'flex',
      p: 2,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <Box bg='muted' p={1} h={10} w={10} sx={{ borderRadius: 6, }}>
        <ThemeSwitch />
      </Box>
      <Box as='div' sx={{ display: 'flex', placeItems: 'center' }}>
        <NavLink path='/blog' text='Blog'/>
        <NavLink path='/projects' text='Projects'/>
        <NavLink path='/about' text='About'/>
        <NavLink path='/' text='Home'/>
      </Box>
    </header>
  )
}
