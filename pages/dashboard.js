
import Head from "next/head";
import { useContext } from "react";
import Nheader from "../components/Nheader";
import Nheader2 from "../components/Nheader2";
import MapContext from "../context/map/mapContext";

const DashBoard = () => {

    const { mapObj } = useContext(MapContext);
    const { map } = mapObj;

    return (
        <div>
            <Head>
                <title>고성군 대시보드</title>
                <link rel="icon" href="/gosung_favicon.png" />
            </Head>
            <Nheader />
            <Nheader2 gb="1" />
            <div id='map' className="h-[800px] w-full px-10 py-10"></div>
        </div>
    )
}

export default DashBoard;