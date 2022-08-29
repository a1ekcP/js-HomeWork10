import Alert from 'react-bootstrap/Alert';
import './style.css';
import ContextTheme from '../context/ContextTheme';
import { useContext } from 'react';

function AlertMessage(){
    const {alert} = useContext(ContextTheme);

    console.log(alert)
    return <Alert variant={'success'} className={'d-block alertMessage'}>
        {alert}
    </Alert>
}

export default AlertMessage;