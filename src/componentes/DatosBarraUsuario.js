import React from 'react';

import {BsCircleFill, BsPersonCircle, BsFillQuestionCircleFill} from "react-icons/bs";
import {IoIosPaper} from "react-icons/io";
import {BiCircle} from "react-icons/bi"
import {RiTeamFill, RiArrowUpSFill, RiArrowDownSFill} from "react-icons/ri";
import {AiFillHome} from "react-icons/ai"
import {FaEnvelopeOpenText} from "react-icons/fa"



export const DatosBarraUsuario=[
    {
        name: "Inicio",
        path: "/Usuario",
        icon: <AiFillHome color = "white"/>
    },
    {
        name: "Reportes",
        path: "#",
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
        name: "Soporte",
        path: "/Soporte",
        icon: <BsFillQuestionCircleFill color = "white"/>,
        }
];