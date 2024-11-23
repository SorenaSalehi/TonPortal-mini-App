import React, { lazy, useState } from "react";
import { motion } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import {
  analyzeLoadingAction,
  analyzeOneGroup,
  clearAnalyze,
  singleAnalyzeReceive,
} from "./groupSlice";
import { authenticateUser } from "../../services/apiTel";
import { webapp } from "../../App";

export default function GroupsItem({ name, img, id, openModal }) {
  const dispatch = useDispatch();

  async function handleClick() {
    try {
      dispatch(analyzeLoadingAction());
      // First dispatch the ID and open modal
      dispatch(analyzeOneGroup(id));
      openModal();

      // Make the API call
      const data = await authenticateUser(webapp, `analysis/groups?id=${id}`);

      if (data?.status === "success") {
        dispatch(singleAnalyzeReceive(data?.data));
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      dispatch(analyzeLoadingAction());
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileTap={{ scale: 0.9 }}
        viewport={{ once: true }}
        onClick={handleClick}
        className="flex justify-between px-4 py-3 font-semibold cursor-pointer bg-black/10 backdrop-brightness-150 rounded-xl text-slate-300"
      >
        <div className="flex items-center gap-2">
          <div
            className={`${
              img ? "" : "opacity-50"
            }overflow-hidden rounded-full w-14 h-14`}
          >
            <img src={img ? img : "/groupImg.webp"} loading="lazy" />
          </div>
          <p className="text-xl capitalize">{name}</p>
        </div>
      </motion.div>
    </>
  );
}
