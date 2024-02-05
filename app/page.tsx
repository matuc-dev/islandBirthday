'use client'
import { motion } from 'framer-motion';
import confetti from "canvas-confetti";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";


export default function Home() {
  const [text, setText] = useState(false);
  const [but, setBut] = useState(false);
  const [pre, setPre] = useState(false);
  const change = () => {
    setText(!text);
    setBut(!but);
    setPre(!pre);
    confetti();
  }
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-2'>
      <motion.div initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0}} >
        <h1 className='text-3xl font-black'>{text ? "Happy Birsday Island🎉!!" : "It makes Tasks for you."}</h1>
      </motion.div>
      <Button className={but ? "hidden" : "flex"} onClick={change}>Login</Button>
      <Link href={"/present"}><Button className={pre ? "flex" : "hidden"}>Get Present🎁</Button></Link>
    </div>
  )
}
