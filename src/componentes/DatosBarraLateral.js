import React from 'react';

import {BsCircleFill, BsPersonCircle, BsFillQuestionCircleFill} from "react-icons/bs";
import {IoIosPaper} from "react-icons/io";
import {BiCircle} from "react-icons/bi"
import {RiTeamFill, RiArrowUpSFill, RiArrowDownSFill} from "react-icons/ri";
import {AiFillHome} from "react-icons/ai"
import {FaEnvelopeOpenText} from "react-icons/fa"



export const DatosBarraLateral=[
    {
        name: "Home",
        path: "/Administrador",
        icon: <AiFillHome color = "white"/>
    },
    {
        name: "Reportes",
        path: "/Administrador",
        icon: <IoIosPaper color = "white"/>,
        iconClosed: <RiArrowDownSFill color = "white" />,
        iconOpened: <RiArrowUpSFill color = "white" />,
        subNav: [
            {
                path:"/reporte1",
                icon:<BsCircleFill color = "green" />,
                name:"Reporte 1",
            },
            {
                path:"/reporte2",
                icon1: <BiCircle color = "black"/>,
                icon:<BsCircleFill color = "red" />,
                name:"Reporte 2",
            },
            {
                path:"/reporte3",
                icon:<BsCircleFill color = "green"/>,
                name:"Reporte 3"
            },
            {
                path:"/reporte4",
                icon:<BsCircleFill color = "yellow"/>,
                name:"Reporte 4"
            },
            {
                path:"/reporte5",
                icon:<BsCircleFill color = "orange"/>,
                name:"Reporte 5"
            },
            {
                path:"/reporte6",
                icon:<BsCircleFill color = "green"/>,
                name:"Reporte 6"
            }
        ]
        },
        {
        name: 'Mensajes',
        path: '/Administrador',
        icon: <FaEnvelopeOpenText color = "white" />,
        iconClosed: <RiArrowDownSFill color = "white" />,
        iconOpened: <RiArrowUpSFill color = "white" />,
        subNav: [
            {
                name: 'Mensaje 1',
                path: '/mensaje1',
                icon: <IoIosPaper color = "white" />
            },
            {
                name: 'Mensaje 2',
                path: '/mensaje2',
                icon: <IoIosPaper color = "white" />
            }
            ]
        },
        {
        name: "Equipo",
        path: "/Administrador",
        icon: <RiTeamFill color = "white"/>,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subNav: [
            {
                path:"/desarrollador1",
                icon:<BsPersonCircle color = "white"/>,
                name:"Richard Gonzalez"
            },
            {
                path:"/desarrollador2",
                icon:<BsPersonCircle color = "white"/>,
                name:"Jose Toledo"
            },
            {
                path:"/desarrollador3",
                icon:<BsPersonCircle color = "white"/>,
                name:"Elizabeth Bravo"
            },
            {
                path:"/desarrollador4",
                icon:<BsPersonCircle color = "white"/>,
                name:"Vanessa Suazo"
            },
            {
                path:"/desarrollador5",
                icon:<BsPersonCircle color = "white"/>,
                name:"Victor Mora"
            },
            {
                path:"/desarrollador6",
                icon:<BsPersonCircle color = "white"/>,
                name:"Marcelo Peña"
            }
        ]
        },
        {
        name: "Soporte",
        path: "/Administrador",
        icon: <BsFillQuestionCircleFill color = "white"/>,
        }
];