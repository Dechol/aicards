/**
 * v0 by Vercel.
 * @see https://v0.dev/t/v8CwCZuUkld
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <>
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <div>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-9 w-9">
              <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
              <AvatarFallback>U</AvatarFallback>
              <span className="sr-only">Toggle user menu</span>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>My Account</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100">
        <div className="flex flex-col w-full max-w-md px-4 py-6 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-semibold text-center text-gray-800">AI Image Generator</h2>
          <div className="mt-4 flex w-full">
            <Input className="mr-2" placeholder="Enter AI prompt" type="text" />
            <Button type="submit">Generate</Button>
          </div>
        </div>
        <section className="mt-12 w-full px-4">
          <h2 className="text-2xl font-semibold text-center text-gray-800">Generated Images</h2>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div>
              <img
                alt="Generated Image"
                className="w-full h-full object-cover object-center rounded-md"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
            </div>
            <div>
              <img
                alt="Generated Image"
                className="w-full h-full object-cover object-center rounded-md"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
            </div>
            <div>
              <img
                alt="Generated Image"
                className="w-full h-full object-cover object-center rounded-md"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
