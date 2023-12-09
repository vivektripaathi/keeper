import React from 'react';
import HighlightIcon from '@mui/icons-material/Highlight';

const Header = (props)=>{
    return (
        <header>
            <h1> <HighlightIcon /> Keeper </h1>
            { props.isLogin && <img src={"https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"} alt={'jmbh'}/> }
        </header>
    )
}

export default Header;
