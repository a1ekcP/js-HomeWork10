import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ContextTheme from '../context/ContextTheme'

function ChangeTheme(){
    const {theme, setTheme} = useContext(ContextTheme);
    const {setAlert} = useContext(ContextTheme);

    function ChangeTheme(){
        setTheme('bg-dark')
        setAlert('theme was changed')
    }

    return <>
        {
        theme === 'bg-secondary' ? <Button onClick={ChangeTheme} variant="dark">Switch theme</Button> : <Button onClick={() => setTheme('bg-secondary')} variant="light">Switch theme</Button>
        }
    </>
}

export default ChangeTheme;