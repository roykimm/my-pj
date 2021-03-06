import { signOut, useSession } from "next-auth/client";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import { useEffect } from 'react';

const Nheader = () => {

    const [ session ] = useSession();

    const router = useRouter();
    useEffect(() => {
        if(!session){
            alert('로그인이 필요합니다.');
            router.push("/");
        }
    }, [])
    
    return (
        <div className="top-0 z-[1000] flex items-center px-10 h-[72px] py-2 md:px-12 bg-[#3C496E] text-white">
            <Image src="/images/goseong_gun_logo.png" width={180} height={60} className="cursor-pointer"  onClick={() => router.push("/")}/>
            <p className="ml-3 text-2xl">고성 방문객 분석 시스템</p>
            <button onClick={() => signOut()} className="text-sm ml-auto uppercase border px-4 py-1.5 rounded-md font-normal tracking-wide hover:bg-white hover:text-black transition duration-200">로그아웃</button>
        </div>
    )
}

export default Nheader;