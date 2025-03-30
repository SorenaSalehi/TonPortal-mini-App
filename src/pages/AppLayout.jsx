import React, { lazy, useEffect, useState } from "react";
import { Outlet } from "react-router";
import UserVisitingModal from "../ui/UserVisitingModal";

const Navbar = lazy(() => import("../ui/navbar/Navbar"));
const Navigation = lazy(() => import("../ui/Navigation"));

export default function AppLayout() {
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        setOpenModal(true);
    }, []);
    return (
        <div className="box-border relative flex flex-col justify-start px-3 overflow-hidden h-dvh w-dvw text-slate-100 scroll-smooth">
            {/*//* before loading main bg */}
            <div className="absolute inset-0 object-cover w-full h-full -z-20 bg-color" />
            <div className="absolute inset-0 bg-black/30 -z-10 backdrop-blur-3xl" />
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 object-cover w-full h-full -z-20 backdrop-blur-3xl"
            >
                <source src="mainBg.mp4" type="video/mp4" />
            </video>

            <Navbar />
            <div className="px-1 overflow-auto no-scrollbar">
                <Outlet />
            </div>
            <Navigation />

            <UserVisitingModal
                openModal={openModal}
                handleCloseModal={() => setOpenModal(false)}
            />
        </div>
    );
}
