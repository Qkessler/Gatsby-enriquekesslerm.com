/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx, Text, Box } from 'theme-ui'
import ThemeSwitch from './theme-switch'

export default ({ title }) => {
  return (
    <header sx={{
      '@media print': { display: 'none' },
      display: 'flex',
      p: 2,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <Box bg='gray' p={1} h={10} w={10} sx={{ borderRadius: 6}}>
        <ThemeSwitch />
      </Box>
      <Box sx={{ display: 'flex', placeItems: 'center'}}>
        <Link to='/blog'>
      <Text sx={{
            p: 3,
          }}>Blog</Text>
        </Link>
        <Link to='/projects'>
          <Text sx={{
            p: 3,
          }}>Projects</Text>
        </Link>
        <Link to='/about'>
          <Text sx={{
            p: 3,
          }}>About</Text>
        </Link>
        <Link to='/'>
          <Text sx={{
            p: 3,
          }}>Home</Text>
        </Link>
      </Box>
    </header>
  )
}
