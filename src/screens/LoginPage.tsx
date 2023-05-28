import { ReactComponent as AppleIcon } from '../assets/AppleIcon.svg';
import { ReactComponent as GoogleIcon } from '../assets/GoogleIcon.svg';

export const LoginPage = () => {
    return (
        <div className="max-w-[496px] flex flex-col gap-[24px]">
            <h2 className="text-white text-3xl">Hello,
                <span className="bg-blue-shade bg-clip-text text-transparent">Mikołaj!</span>
            </h2>
            <span className="text-noble-black-300 text-lg">
                Log in to Artificanum to start creating magic.</span>
            <div className="flex flex-row gap-[24px] h-12">
                <button className="flex flex-row px-2 py-6 items-center gap-[12px] text-noble-black-400 rounded-xl bg-noble-black-600 w-[236px]"><GoogleIcon/>Sign in with Google</button>
                <button className="flex flex-row px-2 py-6 items-center gap-[12px] text-noble-black-400 rounded-xl bg-noble-black-600 w-[236px]"><AppleIcon/>Sign in with Apple</button>
            </div>
            <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-noble-black-400"></div>
                <span className="flex-shrink mx-4 text-noble-black-400">or continue with e-mail</span>
                <div className="flex-grow border-t border-noble-black-400"></div>
            </div>
            <input type="text" aria-label="Login"/>
            <input type="text" aria-label="Password"/>
            <div className="flex flex-row items-center justify-between">
            <label><input type="checkbox" aria-label="Remember me"/> Remember me</label>
            <a className='bg-green-shade bg-clip-text text-transparent'>Forgot Password?</a>
            </div>
      
            <button>Log in</button>
        </div>
    )
}
