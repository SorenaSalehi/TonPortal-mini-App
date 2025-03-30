import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { colorLibrary } from "./color-library";
import Button from "./Button";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 250,
    bgcolor: colorLibrary.boxBg,
    boxShadow: 24,
    p: 4,
    borderRadius: "1rem",
    color: colorLibrary.text,
};

export default function UserVisitingModal({ openModal, handleCloseModal }) {
    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={handleCloseModal}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={openModal}>
                    <Box sx={style}>
                        <Box display={"flex"} alignItems={"center"}>
                            <Typography
                                id="transition-modal-title"
                                variant="h6"
                            >
                                Hey there! 😊 This app is designed as a Telegram
                                Mini App,
                            </Typography>
                        </Box>
                        <Box display={"flex"} alignItems={"center"}>
                            <Typography id="transition-modal-description">
                                so for the best experience, please view it on
                                your mobile device or resize your browser to a
                                smaller screen. Thanks!
                            </Typography>
                        </Box>

                        <Button onClick={handleCloseModal}>ok</Button>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}
