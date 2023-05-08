import React, { useEffect, useState } from 'react'
import "./Portfolio.css"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdBiotech } from 'react-icons/md';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'
import { FiAirplay } from "react-icons/fi";

const Portfolio = () => {
    // const { isOpen, onOpen, onClose } = useDisclosure()

    const [showModal, setShowModal] = useState(false)
    const ModalComponent = () => {

        useEffect(() => {
            document.body.style.overflowY = "hidden";
            return () => {
                document.body.style.overflowY = "scroll";
            }
        }, [])

        return (
            <>
                <div className='modal-wrapper' onClick={() => setShowModal(false)}></div>
                <div className='modal-container'>
                    <h1 >DETIALS</h1>
                    {/* <List spacing={30}>
                        <ListItem>
                            <h1><BsFillArrowRightSquareFill />
                                Expertise with record-to-report tools such as T-rec, Oracle Database, and PeopleSoft.
                            </h1>
                        </ListItem>
                        <ListItem>
                            <h1><BsFillArrowRightSquareFill />
                                Solved Tickets on Zendesk tool by using an internal tool provided by the US based client.
                            </h1>
                        </ListItem>
                        <ListItem>
                            <h1><BsFillArrowRightSquareFill />
                                Providing documentation/SOP at all stages of a product's life cycle
                            </h1>
                        </ListItem>
                        
                        <ListItem>
                            <h1><BsFillArrowRightSquareFill />
                                Identified bugs and improved the UI of the amount matching tool (ARTHIKA,RPA Intake) by raising JIRA tickets
                            </h1>
                        </ListItem>
                        <ListItem>
                            <h1><BsFillArrowRightSquareFill />
                                Identified bugs and improved the UI of the amount matching tool (ARTHIKA,RPA Intake) by raising JIRA tickets
                            </h1>
                        </ListItem>
                        <ListItem>
                            <h1><BsFillArrowRightSquareFill />
                                Responsible for running test cases and posting defects and escalating to Higher team by inbuild defect Tools.
                            </h1>
                        </ListItem>
                    </List> */}

                    <UnorderedList>
                        <ListItem>
                            <h2>
                                Responsible for running test cases and posting defects and escalating to Higher team by inbuild defect Tools.
                            </h2>
                        </ListItem>
                        <ListItem><h2>
                            Solved Tickets on Zendesk tool by using an internal tool provided by the US based client.
                        </h2></ListItem>
                        <ListItem><h2>
                            Expertise with record-to-report tools such as T-rec, Oracle Database, and PeopleSoft.
                        </h2></ListItem>
                        <ListItem>
                            <h2>
                                Responsible for running test cases and posting defects and escalating to Higher team by inbuild defect Tools.
                            </h2>
                        </ListItem>
                        <ListItem>
                            <h2>
                                Identified bugs and improved the UI of the amount matching tool (ARTHIKA,RPA Intake) by raising JIRA tickets
                          </h2>
                        </ListItem>
                    </UnorderedList>

                    <button class="btn" onClick={() => setShowModal(false)}>CLOSE</button>
                </div>
            </>
        )
    }



    const workHistory = [
        {
            companyName: "Genpact",
            position: "Process Developer",
            role: "Creative Direction || User Experience || Visual Design || Project MaCreative Direction || User Experience || Visual Design || Project Ma",
            year: "2021 Nov - 2022 Apr",

            techSkills: [
                {
                    name: "java",
                },
                {
                    name: "JavaScript",
                },
                {
                    name: "HTML",
                },
                {
                    name: "CSS",
                },
            ]
        },
        {
            companyName: "Wipro Technology",
            position: "Process Developer",
            role: "vijsdhfiudshnfkvhiuhsdvkdsiuvhdskjv hdsoihfds0",
            year: "2021 Nov - 2022 Apr",

            techSkills: [
                {
                    name: "java",
                },
                {
                    name: "JavaScript",
                },
                {
                    name: "HTML",
                },
                {
                    name: "CSS",
                },
            ]
        }
    ]

    const workColor = [
        "brown",
        "brown"
    ]
    return (
        <section class="portfolio" id="portfolio">

            <h1 class="heading">Wrok <span>Experience</span> </h1>


            <div className='VerticalTimeline'>
                <VerticalTimeline lineColor="orange" >
                    {workHistory.map((el, i) => (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: workColor[i], color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            dateClassName="date-color"
                            iconStyle={{ background: workColor[i], color: '#fff' }}
                            icon={<MdBiotech />}
                        >
                            <h3 className="vertical-timeline-element-title">{el.companyName}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{el.position}</h4>
                            <h6 className="work-exp-detail">{el.role}</h6>
                            <h5 className="work-exp-detail">{el.year}</h5>
                            {/*                             
                            <button class="btn"  onClick={() => setShowModal(true)}>
                                Github <i class="fas fa-user" ></i>
                            </button> */}

                            <button onClick={() => setShowModal(true)} class="btn" >Experience in More Details.</button>
                            {showModal && <ModalComponent />}


                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>

        </section>
    )
}

export default Portfolio


// import { Button } from '@chakra-ui/react'
// import React, { useState } from 'react'

// const Portfolio = () => {
//     const [showModal, setShowModal] = useState(false)
//     const ModalComponent = () => {
//         return (
//             <>
//                 <h1>DETIALS</h1>
//                 <h1>Wrok Experience in Details.</h1>

//                 <Button onClick={() => setShowModal(false)}>CLOSE</Button>
//             </>
//         )
//     }

//   return (
//     <div>
//         <Button onClick={()=>setShowModal(true)}>open modal</Button>

//         {showModal && <ModalComponent/>}
//     </div>
//   )
// }

// export default Portfolio