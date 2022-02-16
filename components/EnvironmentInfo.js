const EnvironmentInfo = ({color, data}) => {

    console.log(color)
    return (
        <div className="w-[380px] bg-slate-700 rounded-md">
            <div className="bg-orange-500 text-center rounded-t-md text-white py-[1.5px]">{data.title}</div>
            
            <div className="flex justify-center items-center space-x-3 pb-1">
                <div className="">
                    <p className="text-xs text-orange-300 px-1">온도</p>
                    <p className="text-sm text-white font-bold text-center">{data.data1} ℃</p>
                </div>
                <div>
                    <p className="text-xs text-orange-300 px-1">습도</p>
                    <p className="text-sm text-white font-bold text-center">{data.data2} ℃</p>
                </div>
                <div>
                    <p className="text-xs text-orange-300 px-1">미세먼지</p>
                    <p className="text-sm text-white font-bold text-center">{data.data3} ㎍/㎥</p>
                </div>
                <div>
                    <p className="text-xs text-orange-300 px-1">초미세먼지</p>
                    <p className="text-sm text-white font-bold text-center">{data.data4} ㎍/㎥</p>
                </div>
                <div>
                    <p className="text-xs text-orange-300 px-1">TVOC</p>
                    <p className="text-sm text-white font-bold text-center">{data.data5} ppb</p>
                </div>
            </div>
        </div>


    )
}

export default EnvironmentInfo;