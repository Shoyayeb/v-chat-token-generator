import React from 'react';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import { Typography } from '@mui/material';

const drawerWidth = 350;


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
}));
const SideBar = () => {

    return (
        <div>
            <Drawer
                sx={{
                    display: { xs: "none", md: "block" },
                    width: { md: drawerWidth, xs: "100vw" },
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open="true"
            >
                <DrawerHeader sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 3 }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="38"
                        fill="none"
                        viewBox="0 0 42 38"
                    >
                        <g filter="url(#filter0_i_5_10)">
                            <path
                                fill="#21978B"
                                d="M8 12.232l14.193-.273L28.532 0l1.321 14.148 10.91 6.384-13.19 1.595-7.341 10.637-.319-12.826L8 12.232z"
                            ></path>
                            <path
                                fill="url(#paint0_linear_5_10)"
                                d="M28.52 29.228l5.611-.108 2.506-4.729.523 5.594 4.314 2.524-5.216.631-2.902 4.206-.126-5.071-4.71-3.047z"
                            ></path>
                            <path
                                fill="url(#paint1_linear_5_10)"
                                d="M0 19.836l5.612-.108L8.118 15l.522 5.594 4.314 2.524-5.215.63-2.903 4.206-.126-5.07L0 19.835z"
                            ></path>
                        </g>
                        <defs>
                            <filter
                                id="filter0_i_5_10"
                                width="41.474"
                                height="41.346"
                                x="0"
                                y="0"
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                <feBlend
                                    in="SourceGraphic"
                                    in2="BackgroundImageFix"
                                    result="shape"
                                ></feBlend>
                                <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                ></feColorMatrix>
                                <feOffset dy="4"></feOffset>
                                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                                <feComposite
                                    in2="hardAlpha"
                                    k2="-1"
                                    k3="1"
                                    operator="arithmetic"
                                ></feComposite>
                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                                <feBlend in2="shape" result="effect1_innerShadow_5_10"></feBlend>
                            </filter>
                            <linearGradient
                                id="paint0_linear_5_10"
                                x1="20.737"
                                x2="20.737"
                                y1="0"
                                y2="37.346"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#01211E"></stop>
                                <stop offset="1" stopColor="#0D4833"></stop>
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_5_10"
                                x1="4.059"
                                x2="8.895"
                                y1="17.418"
                                y2="25.536"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#21978B"></stop>
                                <stop offset="1" stopColor="#000905"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                    <Typography sx={{ fontWeight: 'bold', mx: 3, fontFamily: "Inter" }} variant="h4">Auth</Typography>
                </DrawerHeader>
            </Drawer>
            <Drawer
                sx={{
                    display: { xs: "block", md: "none" },
                    width: "100vw",
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: "100vw",
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="top"
                open="true"
            >
                <DrawerHeader sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
                    <svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_i_5_10)">
                            <path d="M8 12.2319L22.1933 11.9591L28.5316 0L29.8531 14.1478L40.7635 20.5316L27.5732 22.1267L20.2319 32.7635L19.9134 19.938L8 12.2319Z" fill="#21978B" />
                            <path d="M28.5194 29.2277L34.1313 29.1198L36.6374 24.3913L37.1599 29.9852L41.4737 32.5093L36.2584 33.14L33.3557 37.3456L33.2298 32.2746L28.5194 29.2277Z" fill="url(#paint0_linear_5_10)" />
                            <path d="M0 19.8363L5.61186 19.7284L8.11794 15L8.64045 20.5938L12.9543 23.1179L7.739 23.7486L4.83633 27.9543L4.71042 22.8832L0 19.8363Z" fill="url(#paint1_linear_5_10)" />
                        </g>
                        <defs>
                            <filter id="filter0_i_5_10" x="0" y="0" width="41.4737" height="41.3457" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_5_10" />
                            </filter>
                            <linearGradient id="paint0_linear_5_10" x1="20.7368" y1="0" x2="20.7368" y2="37.3456" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#01211E" />
                                <stop offset="1" stopColor="#0D4833" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_5_10" x1="4.05897" y1="17.4183" x2="8.89531" y2="25.5362" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#21978B" />
                                <stop offset="1" stopColor="#000905" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <Typography sx={{ fontWeight: 'bold', mx: 3 }} variant="h4">Auth</Typography>
                </DrawerHeader>
            </Drawer>

        </div>
    );
};

export default SideBar;