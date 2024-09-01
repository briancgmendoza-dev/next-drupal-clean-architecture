"use client"

import { useRef } from "react"
import { useRouter } from "next/navigation"

import { Form } from "@/app/_components/ui/form"
import { Textbox } from "@/app/_components/ui/input"
import { Button } from "@/app/_components/ui/button"
import { login } from "@/app/actions"

export default function LoginForm() {
  const router = useRouter()
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData()

    if (usernameRef.current && passwordRef.current) {
      formData.append("username", usernameRef.current?.value)
      formData.append("password", passwordRef.current?.value)
    }

    const response = await login(formData)

    if (response?.success) {
      router.push("/home")

      if (usernameRef.current) usernameRef.current.value = ""
      if (passwordRef.current) passwordRef.current.value = ""
    } else {
      alert("Invalid credentials")
    }
  }
  return (
    <Form onSubmit={handleOnSubmit}>
      <Textbox
        name="username"
        ref={usernameRef}
        type="input"
        placeholder="Enter your username"
        required
      />
      <Textbox
        name="password"
        ref={passwordRef}
        type="password"
        placeholder="Enter your password"
        required
      />
      <Button type="submit">Submit</Button>
    </Form>
  )
}
