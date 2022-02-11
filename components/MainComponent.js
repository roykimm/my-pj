import Image from "next/image";
import { signIn } from 'next-auth/client';

const MainComponent = () => {

    const MovieLoginPage = () => {
        signIn();
    }

    return (
        <div>
            <div className="bg-white min-w-full min-h-screen flex">
                <img src="/images/gosung_main.jpg" className="min-w-full min-h-screen opacity-50" />
                <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                    <img src="/images/goseong_gun_logo.png" />
                    <p className="text-gray-700 text-center text-3xl font-extrabold">고성 방문객 분석 시스템</p>
                    <div className="flex mt-5">
                        <button className="bg-blue-600 uppercase text-xl tracking-wide font-extrabold py-3 w-full rounded hover:bg-[#0485ee]" onClick={MovieLoginPage}>로그인</button>
                    </div>
                </div>   
            </div>
            
        </div>
    )
}

export default MainComponent;