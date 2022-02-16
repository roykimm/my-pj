const AnalysisComponent = () => {
    return (
        <div className="w-[450px] bg-slate-700 rounded-md">
            <div className="bg-orange-500 text-center rounded-t-md text-white py-[1.5px]">탈박물관</div>
            <div className="flex justify-center items-center space-x-10">
                <div>
                    <p className="text-xs text-orange-300 px-3">오늘방문자</p>
                    <p className="text-sm text-white font-bold text-center">377</p>
                </div>
                <div>
                    <p className="text-xs text-orange-300 px-3">이달방문자</p>
                    <p className="text-sm text-white font-bold text-center">377</p>
                </div>
                <div>
                    <p className="text-xs text-orange-300 px-3">누적방문자</p>
                    <p className="text-sm text-white font-bold text-center">377</p>
                </div>
            </div>
            <div className="flex justify-center items-center space-x-[52px]">
                <div>
                    <p className="text-xs text-orange-300 px-3">체류인원</p>
                    <p className="text-sm text-white font-bold text-center">377</p>
                </div>
                <div>
                    <p className="text-xs text-orange-300 px-3">체류시간</p>
                    <p className="text-sm text-white font-bold text-center">377</p>
                </div>
                <div>
                    <p className="text-xs text-orange-300 px-3">재방문자</p>
                    <p className="text-sm text-white font-bold text-center">377</p>
                </div>
            </div>
            <div className="flex justify-center items-center space-x-5 pb-1">
                <div>
                    <p className="text-xs text-orange-300 px-3">온도</p>
                    <p className="text-sm text-white font-bold text-center">2 ℃</p>
                </div>
                <div>
                    <p className="text-xs text-orange-300 px-3">습도</p>
                    <p className="text-sm text-white font-bold text-center">58 ℃</p>
                </div>
                <div>
                    <p className="text-xs text-orange-300 px-3">미세먼지</p>
                    <p className="text-sm text-white font-bold text-center">27 ㎍/㎥</p>
                </div>
                <div>
                    <p className="text-xs text-orange-300 px-3">초미세먼지</p>
                    <p className="text-sm text-white font-bold text-center">22 ㎍/㎥</p>
                </div>
                <div>
                    <p className="text-xs text-orange-300 px-3">TVOC</p>
                    <p className="text-sm text-white font-bold text-center">450 ppb</p>
                </div>
            </div>
        </div>


    )
}

export default AnalysisComponent;