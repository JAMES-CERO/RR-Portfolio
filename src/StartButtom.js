import React, { useState} from "react"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Fade from "@mui/material/Fade"
import ContactMe from "./components/ContactMe"
import AboutMe from "./components/AboutMe"


const StartButtom = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [selectedItem, setSelectedItem] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    
    const itemClick = (item) => {
        setSelectedItem(item)
        handleClose()
    }
    
    let content
    switch (selectedItem) {
        case 'About Me':
            content = <AboutMe />
            break
        
        case 'Contact Me':
            content = <ContactMe />
            break
        default:
            content = null
    }


    
   

    return (
        <div style={{placeSelf: 'center'}}>
            <Button style={{fontSize:'2vw', background:'lightPink'}} aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                Click Here!
            </Button>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >

                <MenuItem onClick={() => itemClick('About Me')}>About Me</MenuItem>
                <MenuItem onClick={() => itemClick('My awesome github\'s repos')}>My awesome github's repos</MenuItem>
                <MenuItem onClick={() => itemClick('Contact Me')}>Contact Me</MenuItem>
            </Menu>
            {content}
        </div>
    )
}

export default StartButtom