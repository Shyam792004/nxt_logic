import React from 'react'
import UseLocalStroage from './UseLocalStroage'

const Light_Dark = () => {
    const [theme,setTheme]=UseLocalStroage('theme','dark');
    function handleTheme()
    {
        setTheme(theme==='light'?'dark':'light');
    }
  return (
    <div className='light-dark-mode' data-theme={theme}>
        <div className='container'>
              <p>hello world!</p>
              <button onClick={handleTheme}>Change Theme</button>
        </div>
    </div>
  )
}

export default Light_Dark