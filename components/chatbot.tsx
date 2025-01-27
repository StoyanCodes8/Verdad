"use client"

import * as React from "react"
import { Bot, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function Chatbot() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Button
        size="icon"
        className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <Bot className="h-6 w-6" />
        <span className="sr-only">Open chatbot</span>
      </Button>
      {isOpen && (
        <Card className="fixed bottom-20 right-4 w-80 shadow-lg">
          <CardHeader className="flex flex-row items-center">
            <div className="flex-1">
              <CardTitle>AI Assistant</CardTitle>
              <CardDescription>Ask me anything about politics</CardDescription>
            </div>
            <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close chatbot</span>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col space-y-2">
                <div className="bg-muted p-3 rounded-lg text-sm">
                  Hello! How can I help you understand political topics today?
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <form className="flex w-full items-center space-x-2">
              <Input placeholder="Type your message..." className="flex-1" />
              <Button type="submit">Send</Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  )
}

