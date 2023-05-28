import { ReactComponent as AppleIcon } from '../assets/AppleIcon.svg';
import { ReactComponent as GoogleIcon } from '../assets/GoogleIcon.svg';

export const LoginPage = () => {
    return (
      <div className="w-[520px] h-screen m-auto flex flex-col justify-center items-center">

   
        <div className="w-[496px] flex flex-col gap-[24px] h-682px">
            <h2 className="text-white text-3xl">Hello,
                <span className="bg-blue-shade bg-clip-text text-transparent">&nbsp; Mikołaj!</span>
            </h2>
            <span className="text-noble-black-300 text-lg">
                Log in to Artificanum to start creating magic.</span>
            <div className="flex flex-row gap-[24px] h-12">
                <button className="flex flex-row py-6 items-center gap-[12px] text-noble-black-400 rounded-xl bg-noble-black-600 w-[236px]"><GoogleIcon className="relative ml-6"/>Sign in with Google</button>
                <button className="flex flex-row px-2 py-6 items-center gap-[12px] text-noble-black-400 rounded-xl bg-noble-black-600 w-[236px]"><AppleIcon className="relative ml-6"/>Sign in with Apple</button>
            </div>
            <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-noble-black-400"></div>
                <span className="flex-shrink mx-4 text-noble-black-400">or continue with e-mail</span>
                <div className="flex-grow border-t border-noble-black-400"></div>
            </div>
            <input className="rounded-lg bg-noble-black-600 text-white shadow-heisenberg-blue" value="test" type="text" aria-label="Login"/>
            <input className="rounded-lg bg-noble-black-600 text-white shadow-heisenberg-blue" type="text" aria-label="Password"/>
            <div className="flex flex-row items-center justify-between">
            <label className="text-noble-black-200 h-6 font-medium">
            <input type="checkbox" aria-label="Remember me" className="rounded-sm h-6 w-6 mr-4 bg-noble-black-600 accent-noble-black-600"/> Remember me</label>
            <a className="bg-green-shade bg-clip-text text-transparent">Forgot Password?</a>
            </div>
            <button className="bg-steem-green-500 w-full h-12 rounded-xl my-12">Log in</button>
          <div className="m-auto">
          <span className="text-noble-black-400">Don't have an account ?</span> <a href="###" className="px-2 bg-green-shade bg-clip-text text-transparent"> Sign up</a>
            </div>
        </div>
        </div>
    )
}
