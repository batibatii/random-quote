import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function Login() {
  return (
    <div className="w-11/12 flex flex-col justify-center max-w-md h-[400px] border p-8 bg- dark:bg-slate-900 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none">
      <div className="grid w-full max-w-sm gap-3">
        <div className="mb-5 relative flex flex-col gap-4 group">
          <Label className={`ml-1`} htmlFor="email">
            Email
          </Label>
          <Input
            className="dark:placeholder:t ext-slate-500"
            type="email"
            id="email"
            placeholder="Email"
          />
          <div className="absolute bottom-0 left-1 h-[2px] w-0 bg-ring transition-all duration-300 ease-in-out group-focus-within:w-[98%]"></div>
        </div>
        <div className="mb-5 relative flex flex-col gap-4 group">
          <Label className={`ml-1`} htmlFor="password">
            Password
          </Label>
          <Input
            className="dark:placeholder:text-slate-500"
            type="password"
            id="password"
            placeholder="Password"
          ></Input>
          <div className="absolute bottom-0 left-1 h-[2px] w-0 bg-ring transition-all duration-300 ease-in-out group-focus-within:w-[98%]"></div>
        </div>
        <Button
          className={`active:scale-95 active:translate-y-0.5 text-primary-foreground `}
        >
          Login / Sign Up
        </Button>
      </div>
    </div>
  );
}
