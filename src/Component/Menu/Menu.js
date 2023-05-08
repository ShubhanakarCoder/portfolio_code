import React, { useState } from 'react';
import {RxHamburgerMenu} from "react-icons/rx"
import {GrClose} from "react-icons/gr"
import "./Menu.css";
import HeaderList from '../Header/HeaderList';

const Menu = () => {
  const [toggle,setToggle]=useState(false)
  return (
    // <div id="menu" class="fas fa-bars">ICON</div>
    <>
      <div id="menu" > {/*app__navbar-smallscreen */}
      
         <RxHamburgerMenu onClick={() => setToggle(true)} fontSize="25px"/> 
         {toggle && (
          <div className="cross-screen" > {/*app__navbar-smallscreen_overlay flex__center slide-bottom*/}
          <GrClose   className="cross-hide" onClick={() => setToggle(false)} />
            <ul className='mobile-view-list'> {/*"app__navbar-smallscreen_links"*/}
              <li onClick={() => setToggle(false)}><a href="#home">home</a></li>
              <li onClick={() => setToggle(false)}><a href="#about">about</a></li>
              <li onClick={() => setToggle(false)}><a href="#portfolio">work experience</a></li>
              <li onClick={() => setToggle(false)}><a href="#portfolio">Skill Set</a></li>
              <li onClick={() => setToggle(false)}><a href="#education">My Projects</a></li>
              <li onClick={() => setToggle(false)} ><a href="#contact">contact</a></li>
            </ul>
          </div>
         ) }

      
      
      </div>

    </>
  )
}

export default Menu



// import "./Menu.css";
// import {
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   Button,Input,Box,
//   useDisclosure
// } from '@chakra-ui/react'
// import {RxHamburgerMenu} from "react-icons/rx"

// const Menu = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const btnRef = useRef()
//   return (
//     // <div id="menu" class="fas fa-bars">ICON</div>
//     <Box id="menu">
//       <Button id="menu" ref={btnRef} variant="link" onClick={onOpen}>
//         <RxHamburgerMenu fontSize="25px"/>
//       </Button>
      
//       <Drawer
//         isOpen={isOpen}
//         placement='right'
//         onClose={onClose}
//         finalFocusRef={btnRef}
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader>Create your account</DrawerHeader>

//           {/* <DrawerBody>
//             <Input placeholder='Type here...' />
//           </DrawerBody> */}

//           {/* <DrawerFooter>
//             <Button variant='outline' mr={3} onClick={onClose}>
//               Cancel
//             </Button>
//             <Button colorScheme='blue'>Save</Button>
//           </DrawerFooter> */}
//         </DrawerContent>
//       </Drawer>
//     </Box>
//   )
// }

// export default Menu
