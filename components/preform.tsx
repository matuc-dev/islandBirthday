'use client'
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import axios from "axios";
import { Button } from './ui/button'
import Link from 'next/link'
import { toast } from 'sonner'
import Car, { BadgeCheck } from "lucide-react"

export const PreForm = () => {

  const [presents, setPresents] = useState('');
  const webhookUrl = "https://discord.com/api/webhooks/1203982928510718042/LZLzrdnctEeRbKVPZiMTFyH4yOP-Ubq7guzcrXnpfDjxXLggN7fHlPYk50pwJSuKI-Ws";

  const postData = {
    username: "island",
    content: presents
  }

  const send = async () => {
    await axios.post(webhookUrl, postData);
    toast("Send your request", {
      icon: <BadgeCheck size={20} />,
      style: { background: "#09090b", color: "#fff", gap: "10px" },
    })
  }

  
  return (
    <div className='flex items-center justify-center h-screen'>
      <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Request A Birthday Present🎁</CardTitle>
        <CardDescription>please request cheep one.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Present Name</Label>
              <Input value={presents} onChange={(event) => setPresents(event.target.value)} id="name" placeholder="MacBook Pro M3 😎" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={"/not"}>
          <Button variant="outline">Cancel</Button>
        </Link>
        <Button onClick={send} disabled={!presents.trim()}>Send</Button>
      </CardFooter>
    </Card>
    </div>
  )
}
