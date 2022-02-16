import { GlobeIcon, ClipboardIcon, CubeIcon, ChartBarIcon, ChartPieIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const Nbottom = ({gb}) => {
    
    const router = useRouter();

    return (
        <div className="flex justify-center items-center bg-gray-600 py-2">
            <button onClick={() => router.push('/compare')} className={"flex items-center justify-center text-sm bg-orange-600 px-5 py-1 rounded-md ml-5 text-white hover:bg-orange-700 hover:text-gray-200 "+ (gb == 1 ? " bg-red-400 " : " bg-orange-600" ) +""}><GlobeIcon className="w-5 h-5 mr-1" />통합 분석</button>
            <button onClick={() => router.push('/compare/floating-population')} className={"flex items-center justify-center text-sm bg-orange-600 px-5 py-1 rounded-md ml-5 text-white hover:bg-orange-700 hover:text-gray-200 "+ (gb == 2 ? " bg-red-400 " : " bg-orange-600" ) +""}><ClipboardIcon className="w-5 h-5 mr-1" />유동인구 분석</button>
            <button onClick={() => router.push('/compare/congestion')} className={"flex items-center justify-center text-sm bg-orange-600 px-5 py-1 rounded-md ml-5 text-white hover:bg-orange-700 hover:text-gray-200 "+ (gb == 3 ? " bg-red-400 " : " bg-orange-600" ) +""}><CubeIcon className="w-5 h-5 mr-1" />혼잡도 분석</button>
            <button onClick={() => router.push('/compare/environmental-information')} className={"flex items-center justify-center text-sm bg-orange-600 px-5 py-1 rounded-md ml-5 text-white hover:bg-orange-700 hover:text-gray-200 "+ (gb == 4 ? " bg-red-400 " : " bg-orange-600" ) +""}><ChartBarIcon className="w-5 h-5 mr-1" />환경정보 분석</button>
            <button onClick={() => router.push('/compare/amount-of-movement')} className={"flex items-center justify-center text-sm bg-orange-600 px-5 py-1 rounded-md ml-5 text-white hover:bg-orange-700 hover:text-gray-200 "+ (gb == 5 ? " bg-red-400 " : " bg-orange-600" ) +""}><ChartPieIcon className="w-5 h-5 mr-1" />이동량 분석</button>
        </div>
    )
}

export default Nbottom;