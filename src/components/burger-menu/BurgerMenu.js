import React from 'react';
import styles from './BurgerMenu.module.scss'
import './chakra_styles.css'
import {
    Drawer,
    DrawerBody,
    useDisclosure,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {headerNav} from '../header-navigation'

const BurgerMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <div>
            <button ref={btnRef} colorscheme='teal' onClick={onOpen} className={styles.menu_btn}>
                <span className="material-symbols-outlined">menu</span>
            </button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
                className={styles.wrapper_burger_menu}
            >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader><Link className={styles.header_logo} to='/'>GAME<span>Finder</span></Link></DrawerHeader>

                <DrawerBody>
                    <ul className={styles.burger_menu_ul}>
                        {headerNav.map((elem,index) => {
                            return <Link key={index} to={elem.path}>{elem.name}</Link>
                        })}
                    </ul>
                    
                </DrawerBody>
                
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default BurgerMenu;