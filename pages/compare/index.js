import Head from "next/head";
import Nheader from "../../components/Nheader";
import Nheader2 from "../../components/Nheader2";

const Compare = () => {
    return (
        <div>
            <Head>
                <title>고성군 비교분석</title>
                <link rel="icon" href="/gosung_favicon.png" />
            </Head>
            <Nheader />
            <Nheader2 gb="3" />
            비교분석1
        </div>
    )
}

export default Compare;