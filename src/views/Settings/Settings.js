import React, { useContext } from 'react';
import Button from '../../Components/Atoms/Button/Button';
import {ThemeContext} from '../../Contexts/ThemeContext';


const Settings = ({history})=>{
    const {theme, setTheme} = useContext(ThemeContext);
return(
<div>
        <Button content ='Toggle Theme' onClick={()=>{setTheme(theme==='light'?'dark':'light')}}/>
    </div>
)}
export default Settings;