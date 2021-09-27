import React, { useContext } from 'react';
import Button from '../../Components/Atoms/Button/Button';
import {ThemeContext} from '../../Contexts/ThemeContext';
import Card from '../../Components/Molecules/Card/Card';

const Settings = ({history})=>{
    const {theme, setTheme} = useContext(ThemeContext);
return(
<div>
        <Button content ='Toggle Theme' onClick={()=>{
            console.log("THEME: ",theme)
            setTheme(theme==='light'?'dark':'light')}
            }/>
            <Card>
                <p>TESTING MY JOY</p>
            </Card>
    </div>
)}
export default Settings;