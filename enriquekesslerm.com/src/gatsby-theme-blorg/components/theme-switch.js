/** @jsx jsx */
import { IconButton, jsx, useColorMode } from 'theme-ui'
import { FaMoon as DarkIcon } from 'react-icons/fa'
import { MdWbSunny as LightIcon, } from 'react-icons/md'
import { IconContext } from 'react-icons'

export default () => {

  const [ colorMode, setColorMode ] = useColorMode()
  return (
    <IconButton onClick={() => setColorMode(colorMode === 'default' ? 'dark' : 'default')}>
      { colorMode === 'default' ?
        <IconContext.Provider value={{
          size: '1.2em', color: 'white', style: { verticalAlign: 'middle' }
        }}>
          <LightIcon />
        </IconContext.Provider>
        : <IconContext.Provider value={{
          size: '1em', color: 'white', style: { verticalAlign: 'middle' }
        }}>
        <DarkIcon />
      </IconContext.Provider>}
    </IconButton>
  )
}
