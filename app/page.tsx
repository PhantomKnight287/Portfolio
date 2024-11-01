import Transition from "@/components/transition";
import {AiOutlineRight, AiOutlineMail} from "react-icons/ai";
import {FiGithub} from "react-icons/fi";
import {Projects} from "@/constants";
import Badge from "@/components/badge";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Gurpal Singh | PhantomKnight287",
    description: "I am a Full Stack Web and App Developer from India.",
    openGraph: {
        title: "Gurpal Singh | PhantomKnight287",
        description: "I am a Full Stack Web and App Developer from India.",
        // @ts-ignore
        type: "website",
        url: "https://phantomknight287.github.io/",
        site_name: "Gurpal Singh | PhantomKnight287",
        images: [
            {
                url: "https://github.com/phantomknight287.png",
                width: 200,
                height: 200,
                alt: "PhantomKnight287",
            },
        ],
    },
    twitter: {
        site: "@PhantomKnight287",
        title: "Gurpal Singh | PhantomKnight287",
        description: "I am a Full Stack Web and App Developer from India.",
        card: "summary_large_image",
        creator: "gurpalsingh287",
        images: [
            {
                url: "https://github.com/phantomknight287.png",
                width: 200,
                height: 200,
            },
        ],
    },
};

export default function Home() {
    return (
        <main className="min-h-screen pt-10 container items-center justify-center flex-col">
            <div
                className="content-center items-center flex flex-none flex-col flex-nowrap gap-2.5 h-min justify-center overflow-visible relative w-full px-4 py-0">
                <div className="container max-w-[512px] flex flex-row">
                    <Image
                        src="https://github.com/phantomknight287.png"
                        alt="PhantomKnigh287"
                        width={44}
                        height={44}
                        className="rounded-full"
                    />
                    <div className="flex flex-col ml-2">
                        <h1 className="text-base font-bold text-white">Gurpal Singh</h1>
                        <span className="text-sm text-gray-400">@PhantomKnight287</span>
                    </div>
                </div>
            </div>
            <div className="flex mt-10 flex-col max-w-[512px] mx-auto p-5 lg:p-0">
                <div className="container">
                    <h1 className="text-xl font-bold text-gray-400">
                        I make
                        <Transition/>
                    </h1>
                    <p className="mt-5 text-xl text-gray-400">
                        I&apos;m Gurpal Singh, an {Math.floor(
                        (new Date().getTime() - new Date("2005-04-30").getTime()) / (1000 * 60 * 60 * 24 * 365.25)
                    )} year old developer living in India. I
                        am a self-taught developer who loves to code and make things.
                    </p>
                    <p className="mt-5 text-xl text-gray-400">
                        Currently working in a company and messing with{" "}
                        <Badge href="https://nextjs.org">
                            <svg
                                width="14"
                                height="14"
                                aria-label="Next.js logomark"
                                viewBox="0 0 180 180"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="inline-flex mr-1"
                            >
                                <mask
                                    id="a"
                                    style={{
                                        maskType: "alpha",
                                    }}
                                    maskUnits="userSpaceOnUse"
                                    x={0}
                                    y={0}
                                    width={180}
                                    height={180}
                                >
                                    <circle cx={90} cy={90} r={90} fill="#000"/>
                                </mask>
                                <g mask="url(#a)">
                                    <circle
                                        cx={90}
                                        cy={90}
                                        r={87}
                                        fill="#000"
                                        stroke="#fff"
                                        strokeWidth={6}
                                    />
                                    <path
                                        d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z"
                                        fill="url(#paint0_linear_408_139)"
                                    />
                                    <path
                                        fill="url(#paint1_linear_408_139)"
                                        d="M115 54H127V126H115z"
                                    />
                                </g>
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_408_139"
                                        x1={109}
                                        y1={116.5}
                                        x2={144.5}
                                        y2={160.5}
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#fff"/>
                                        <stop offset={1} stopColor="#fff" stopOpacity={0}/>
                                    </linearGradient>
                                    <linearGradient
                                        id="paint1_linear_408_139"
                                        x1={121}
                                        y1={54}
                                        x2={120.799}
                                        y2={106.875}
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#fff"/>
                                        <stop offset={1} stopColor="#fff" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            Next.js
                        </Badge>
                        ,{" "}
                        <Badge href="https://nestjs.com">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="svg8"
                                width={14}
                                height={14}
                                version="1.1"
                                viewBox="0 0 264.583 255.588"
                                className="inline-flex mr-1"
                            >
                                <metadata id="metadata5"/>
                                <g id="layer1" transform="translate(0,-41.412487)">
                                    <path
                                        style={{
                                            fill: "#e0234e",
                                            fillOpacity: 1,
                                            fillRule: "evenodd",
                                            stroke: "none",
                                            strokeWidth: ".80775058",
                                        }}
                                        id="path818"
                                        d="m 153.33845,45.652481 c -1.80934,0 -3.48944,0.387729 -5.04032,0.904673 3.29558,2.19706 5.10493,5.104961 6.00963,8.400551 0.0648,0.45233 0.19386,0.775444 0.25856,1.227759 0.0648,0.387729 0.12916,0.775444 0.12916,1.163171 0.2586,5.686509 -1.48628,6.397323 -2.71403,9.757543 -1.87398,4.329529 -1.35704,8.982133 0.90466,12.730079 0.19387,0.452318 0.45234,0.969275 0.77546,1.421618 -2.45558,-16.348759 11.17919,-18.804304 13.69932,-23.90924 0.19386,-4.458761 -3.48944,-7.431263 -6.39731,-9.499092 -2.77864,-1.680104 -5.29884,-2.197062 -7.62513,-2.197062 z m 20.54903,3.683318 c -0.25858,1.486247 -0.0647,1.09853 -0.12913,1.873973 -0.0647,0.516945 -0.0647,1.163157 -0.12914,1.680102 -0.12914,0.516959 -0.2586,1.033904 -0.45236,1.550886 -0.12913,0.516945 -0.32309,1.033903 -0.51694,1.550847 -0.2586,0.516983 -0.45234,0.969301 -0.71082,1.486258 -0.19385,0.258585 -0.32309,0.516945 -0.51695,0.775443 -0.12914,0.193857 -0.25858,0.387715 -0.38771,0.581572 -0.32309,0.452355 -0.64621,0.904673 -0.96929,1.292387 -0.38774,0.387729 -0.71083,0.840046 -1.16319,1.163171 0,0.0647 0,0.0647 0,0.0647 -0.38771,0.3231 -0.77543,0.710815 -1.22775,1.033903 -1.35702,1.033902 -2.90787,1.809344 -4.32952,2.778644 -0.45231,0.323088 -0.90468,0.581587 -1.29238,0.9693 -0.45233,0.323088 -0.84006,0.646176 -1.22776,1.033903 -0.45236,0.387715 -0.77545,0.775442 -1.16318,1.227784 -0.32309,0.387728 -0.7108,0.840048 -0.96927,1.292402 -0.32312,0.452317 -0.6462,0.904661 -0.9047,1.35699 -0.25857,0.516944 -0.45233,0.969299 -0.71081,1.486245 -0.19385,0.516944 -0.38773,0.969301 -0.51695,1.486244 -0.19386,0.581586 -0.3231,1.098544 -0.45234,1.615514 -0.0647,0.258583 -0.0647,0.58156 -0.12914,0.840045 -0.0648,0.258584 -0.0648,0.516945 -0.12913,0.775443 0,0.516944 -0.0647,1.09853 -0.0647,1.615475 0,0.387727 0,0.775441 0.0647,1.163169 0,0.516946 0.0647,1.033892 0.19385,1.615476 0.0647,0.516944 0.19384,1.033902 0.32312,1.550885 0.19386,0.516944 0.3231,1.033902 0.51694,1.550847 0.12916,0.323126 0.32309,0.646213 0.45236,0.904673 l -14.86252,-5.75114 c -2.52018,-0.710815 -4.9757,-1.35699 -7.49588,-1.938576 -1.357,-0.323087 -2.714,-0.646198 -4.07102,-0.969299 -3.87719,-0.77543 -7.81895,-1.356991 -11.76076,-1.744705 -0.12913,0 -0.19385,-0.06471 -0.32309,-0.06471 -3.8772,-0.387714 -7.68973,-0.581572 -11.5669,-0.581572 -2.84328,0 -5.68656,0.129131 -8.465201,0.323088 -3.941798,0.258584 -7.883602,0.775442 -11.825373,1.421617 -0.969302,0.129144 -1.938602,0.323125 -2.907905,0.516984 -2.003199,0.387689 -3.941771,0.840044 -5.815742,1.292386 -0.9693,0.258584 -1.938602,0.516958 -2.907903,0.775419 -0.96927,0.387713 -1.87394,0.84007 -2.778642,1.227784 -0.710811,0.323088 -1.421619,0.646187 -2.132431,0.9693 -0.129139,0.06471 -0.25858,0.06471 -0.32309,0.129144 -0.64621,0.323087 -1.22779,0.581547 -1.809341,0.904671 -0.193861,0.06471 -0.323122,0.129132 -0.452351,0.193859 -0.71081,0.323089 -1.421618,0.710803 -2.003201,1.033902 -0.45235,0.193858 -0.90467,0.452343 -1.292389,0.646213 -0.193862,0.129131 -0.452353,0.258572 -0.581582,0.323088 -0.581579,0.323088 -1.16316,0.646174 -1.680111,0.9693 -0.581581,0.323087 -1.098532,0.646175 -1.550882,0.969263 -0.452318,0.323125 -0.904667,0.581585 -1.29239,0.904672 -0.06474,0.06471 -0.129139,0.06471 -0.193861,0.129145 -0.387719,0.258583 -0.840039,0.581571 -1.227758,0.904696 0,0 -0.06473,0.0647 -0.12914,0.129142 -0.32309,0.258584 -0.646212,0.516947 -0.969301,0.775407 -0.129138,0.06471 -0.258581,0.193857 -0.38772,0.258583 -0.32309,0.258586 -0.64618,0.581586 -0.969271,0.84007 -0.06473,0.129143 -0.193859,0.193858 -0.258581,0.258585 -0.38772,0.387715 -0.775441,0.710802 -1.163161,1.09853 -0.06473,0 -0.06473,0.06471 -0.129139,0.129131 -0.38772,0.3231 -0.775439,0.710816 -1.163159,1.098543 -0.06473,0.06471 -0.06473,0.12913 -0.12914,0.12913 -0.32309,0.323089 -0.64618,0.646213 -0.969301,1.033902 -0.129137,0.129143 -0.32309,0.258586 -0.452319,0.387715 -0.32309,0.387728 -0.710811,0.775443 -1.09853,1.163171 -0.06473,0.129132 -0.19386,0.193858 -0.258582,0.323087 -0.516952,0.516983 -0.969302,1.033928 -1.486252,1.550885 -0.06473,0.06471 -0.129138,0.129128 -0.193859,0.193858 -1.033931,1.098529 -2.132463,2.197059 -3.295594,3.166352 -1.163159,1.0339 -2.390922,2.0032 -3.618711,2.84325 -1.292392,0.9047 -2.520152,1.68011 -3.877173,2.45555 -1.292392,0.71079 -2.649412,1.35701 -4.071032,1.9386 -1.357022,0.58157 -2.778641,1.09854 -4.200264,1.55085 -2.714041,0.58157 -5.492684,1.68011 -7.883605,1.87397 -0.51695,0 -1.098531,0.12915 -1.615482,0.19385 -0.581578,0.12914 -1.098529,0.25859 -1.615479,0.38774 -0.516951,0.19384 -1.033931,0.38771 -1.550883,0.58156 -0.516951,0.19386 -1.033901,0.45235 -1.550852,0.71083 -0.45235,0.32308 -0.969299,0.58157 -1.421651,0.90466 -0.452322,0.32309 -0.904672,0.7108 -1.292393,1.09853 -0.452319,0.32312 -0.904669,0.77545 -1.29239,1.16315 -0.387721,0.45237 -0.77544,0.84008 -1.0985304,1.29239 -0.3230901,0.51695 -0.7108108,0.96931 -0.9693016,1.48627 -0.32309,0.45235 -0.6461799,0.96929 -0.9046707,1.48622 -0.2585815,0.58161 -0.5169498,1.09855 -0.7108107,1.68014 -0.1938599,0.51695 -0.3877199,1.09852 -0.5815799,1.68011 -0.1291382,0.51694 -0.2585813,1.0339 -0.3230898,1.55083 0,0.0648 -0.064719,0.12916 -0.064719,0.19387 -0.1291392,0.58161 -0.1291392,1.35706 -0.1938608,1.74479 -0.064719,0.45232 -0.1291373,0.84002 -0.1291373,1.29238 0,0.25858 0,0.58155 0.064719,0.84003 0.064719,0.45236 0.1291371,0.84007 0.2585814,1.22782 0.1291382,0.38766 0.2585815,0.77539 0.4523201,1.16312 0,0.0647 0,0.0647 0,0.0647 0.1938599,0.38775 0.4523506,0.77545 0.7108108,1.16317 0.2585814,0.38772 0.5169804,0.77544 0.8400704,1.16317 0.3230899,0.32309 0.7108109,0.71078 1.0985304,1.03389 0.3877209,0.38772 0.7754421,0.71081 1.2277611,1.0339 1.550881,1.35703 1.938601,1.80938 3.941806,2.84327 0.323087,0.19387 0.64621,0.32311 1.03393,0.51697 0.06473,0 0.129139,0.0647 0.193859,0.0647 0,0.12913 0,0.19387 0.06473,0.32313 0.06472,0.51696 0.193859,1.03389 0.32309,1.55086 0.129138,0.58158 0.323121,1.09855 0.516981,1.55087 0.19386,0.38773 0.32309,0.77543 0.516951,1.16317 0.06472,0.12915 0.12914,0.25858 0.19386,0.32309 0.258581,0.51694 0.51695,0.96932 0.77541,1.42162 0.323121,0.45233 0.64621,0.90466 0.969299,1.35703 0.323092,0.3877 0.710813,0.84004 1.098532,1.22775 0.387721,0.38773 0.775442,0.71083 1.227793,1.09852 0,0 0.06473,0.0648 0.129137,0.0648 0.387722,0.32312 0.77544,0.64622 1.163162,0.90466 0.45232,0.32311 0.90467,0.58157 1.421619,0.84007 0.452351,0.25858 0.969302,0.51695 1.486252,0.71082 0.387721,0.19386 0.84004,0.32311 1.292392,0.45234 0.06473,0.0648 0.129138,0.0648 0.258582,0.12916 0.258581,0.0648 0.581548,0.12912 0.840039,0.19384 -0.193859,3.48945 -0.258582,6.78504 0.258583,7.94822 0.58155,1.29238 3.424821,-2.64941 6.268094,-7.17277 -0.387719,4.45875 -0.646211,9.6929 0,11.24381 0.710809,1.61545 4.587982,-3.42487 7.948203,-8.98215 45.815262,-10.59757 87.62418,21.066 92.01829,65.78273 -0.84006,-6.97892 -9.43446,-10.85608 -13.37623,-9.88677 -1.93861,4.78183 -5.2342,10.92068 -10.53299,14.73324 0.45233,-4.2649 0.25856,-8.65901 -0.64619,-12.92392 -1.42165,5.94501 -4.2003,11.50232 -8.01287,16.28415 v 0 c -6.138857,0.45232 -12.277729,-2.52019 -15.50872,-6.97891 -0.258582,-0.19388 -0.323091,-0.58159 -0.516951,-0.84006 -0.193862,-0.45238 -0.387719,-0.90467 -0.516951,-1.35703 -0.193859,-0.45232 -0.323089,-0.90467 -0.387719,-1.35699 -0.06473,-0.45236 -0.06473,-0.90469 -0.06473,-1.42163 0,-0.32312 0,-0.6462 0,-0.96928 0.06473,-0.45238 0.19386,-0.90471 0.323091,-1.35705 0.129138,-0.45232 0.25858,-0.90467 0.45235,-1.35701 0.258582,-0.45231 0.45232,-0.90466 0.775441,-1.35698 1.09853,-3.10178 1.09853,-5.62192 -0.90467,-7.10816 -0.387721,-0.25858 -0.775441,-0.45236 -1.227791,-0.64622 -0.258584,-0.0647 -0.581582,-0.19386 -0.84004,-0.25857 -0.193861,-0.0647 -0.32309,-0.12916 -0.516951,-0.19387 -0.452351,-0.12914 -0.904702,-0.25859 -1.357022,-0.32309 -0.45235,-0.12913 -0.90467,-0.19386 -1.35702,-0.19386 -0.452321,-0.0648 -0.969303,-0.12914 -1.421622,-0.12914 -0.323089,0 -0.64621,0.0647 -0.969301,0.0647 -0.516949,0 -0.969299,0.0648 -1.421621,0.19386 -0.45235,0.0648 -0.904669,0.12913 -1.357019,0.25856 -0.452322,0.12915 -0.904673,0.25859 -1.357023,0.45238 -0.452319,0.19385 -0.840041,0.38771 -1.292389,0.58157 -0.38769,0.19387 -0.775412,0.45232 -1.227761,0.64618 -15.056371,9.82217 -6.074235,32.82674 4.200264,39.48256 -3.877175,0.71081 -7.818947,1.5509 -8.917479,2.39092 -0.06473,0.0647 -0.129138,0.12915 -0.129138,0.12915 2.778642,1.68009 5.686516,3.10173 8.723616,4.32949 4.135665,1.35702 8.529786,2.58479 10.468387,3.10176 0,0 0,0.0647 0,0.0647 5.363424,1.09854 10.79148,1.48626 16.284139,1.16317 28.62649,-2.00321 52.0834,-23.78003 56.3483,-52.47111 0.12914,0.58159 0.25858,1.09852 0.38772,1.68012 v 0 c 0.19387,1.16312 0.45232,2.3909 0.58155,3.61867 0,0 0,0 0,0.0648 0.12914,0.58158 0.19386,1.16315 0.25858,1.6801 0,0.12914 0,0.19386 0,0.25859 0.0648,0.58157 0.12915,1.16316 0.12915,1.6801 0.0647,0.71082 0.12914,1.42162 0.12914,2.13247 0,0.32309 0,0.64619 0,1.0339 0,0.32312 0.0647,0.7108 0.0647,1.03392 0,0.38773 -0.0647,0.77542 -0.0647,1.16314 0,0.32313 0,0.64621 0,0.90467 0,0.45236 -0.0648,0.84006 -0.0648,1.2924 0,0.25856 0,0.51696 -0.0647,0.84006 0,0.45236 -0.0647,0.90466 -0.0647,1.42162 -0.0648,0.19386 -0.0648,0.38772 -0.0648,0.58159 -0.0647,0.51696 -0.12914,0.9693 -0.19387,1.48626 0,0.19387 0,0.38771 -0.0647,0.58159 -0.0648,0.64617 -0.19385,1.22777 -0.25855,1.87394 0,0 0,0.0648 0,0.0648 v 0.0647 c -0.12914,0.58157 -0.2586,1.22776 -0.38775,1.80933 0,0.0647 0,0.12914 0,0.19387 -0.12912,0.58156 -0.25858,1.16316 -0.3877,1.74471 0,0.0648 -0.0647,0.19387 -0.0647,0.25856 -0.12916,0.5816 -0.2586,1.16317 -0.45232,1.74478 0,0.0647 0,0.12912 0,0.19384 -0.19386,0.64617 -0.38773,1.22776 -0.51698,1.80934 -0.0647,0.0647 -0.0647,0.12914 -0.0647,0.12914 -0.19387,0.64621 -0.38771,1.29239 -0.58155,1.93858 -0.25858,0.64621 -0.45234,1.22778 -0.71081,1.87398 -0.25857,0.6462 -0.45236,1.2924 -0.71083,1.87396 -0.25859,0.64622 -0.51697,1.2278 -0.77543,1.87397 0,0 -0.0648,0 -0.0648,0 -0.2586,0.58157 -0.51699,1.22779 -0.8401,1.80938 0,0 0,0 0,0 0,0 0,0 0,0 -0.0647,0.19383 -0.12912,0.32309 -0.19384,0.4523 -0.0647,0.0648 -0.0647,0.12914 -0.12914,0.19388 -4.20026,8.46514 -10.40377,15.89639 -18.15809,21.71217 v 0 c -0.51695,0.32309 -1.03392,0.71082 -1.55086,1.09852 0,0 0,0 0,0 -0.12915,0.12915 -0.32312,0.19388 -0.45235,0.32309 -0.45235,0.3231 -0.90468,0.64618 -1.42161,0.96931 l 0.19385,0.38772 h 0.0647 v 0 c 0.90466,-0.12913 1.80934,-0.25858 2.71402,-0.38772 h 0.0647 c 1.68012,-0.25858 3.36023,-0.58158 5.04035,-0.90467 0.45231,-0.0648 0.9693,-0.19385 1.42161,-0.32312 0.32309,-0.0648 0.58158,-0.12913 0.90467,-0.19386 0.45235,-0.0648 0.90468,-0.19386 1.35704,-0.25857 0.3877,-0.12914 0.77543,-0.19388 1.16314,-0.3231 6.46195,-1.55089 12.73007,-3.68335 18.73965,-6.20349 -10.27448,14.02243 -24.03847,25.33087 -40.12874,32.76212 7.43127,-0.51696 14.86251,-1.74472 22.03528,-3.81254 26.0417,-7.68977 47.94772,-25.20165 61.06549,-48.7878 -2.6494,14.92714 -8.5944,29.14344 -17.38265,41.55041 6.26809,-4.13569 12.01923,-8.91753 17.25342,-14.34557 14.47478,-15.12097 23.97388,-34.31296 27.20483,-54.92665 2.19708,10.2099 2.84328,20.74293 1.87398,31.14666 46.65534,-65.07192 3.87717,-132.53476 -14.02244,-150.305141 -0.0648,-0.129133 -0.12914,-0.193858 -0.12914,-0.323089 -0.0648,0.0647 -0.0648,0.0647 -0.0648,0.129144 0,-0.06471 0,-0.06471 -0.0647,-0.129144 0,0.775442 -0.0647,1.550848 -0.12914,2.326291 -0.19387,1.48625 -0.38771,2.907879 -0.64621,4.329529 -0.32308,1.42162 -0.71081,2.84322 -1.09854,4.26488 -0.45232,1.35699 -0.96925,2.77862 -1.55085,4.13565 -0.58158,1.29237 -1.22778,2.64939 -1.93859,3.9418 -0.71082,1.22778 -1.48625,2.52016 -2.32629,3.6833 -0.84006,1.2278 -1.74474,2.39093 -2.64943,3.48944 -0.96931,1.16318 -2.00319,2.1971 -3.03712,3.23101 -0.64618,0.58158 -1.22775,1.09853 -1.87398,1.61546 -0.51694,0.45236 -0.96927,0.84009 -1.48625,1.29239 -1.16314,0.90468 -2.32629,1.74474 -3.61867,2.52019 -1.22778,0.77542 -2.52014,1.55086 -3.81254,2.19707 -1.35702,0.64619 -2.71404,1.22776 -4.07104,1.80935 -1.35702,0.51693 -2.77864,0.96928 -4.20031,1.35701 -1.42161,0.3877 -2.90785,0.71081 -4.32949,0.96928 -1.48623,0.25858 -2.97249,0.38771 -4.39412,0.51697 -1.03392,0.0647 -2.06782,0.12915 -3.10175,0.12915 -1.48626,0 -2.97248,-0.12915 -4.39412,-0.25858 -1.48624,-0.12914 -2.97251,-0.32314 -4.39413,-0.64623 -1.48625,-0.25858 -2.9079,-0.64621 -4.32953,-1.09851 h -0.0647 c 1.42163,-0.12914 2.84327,-0.2586 4.26492,-0.51697 1.48622,-0.25858 2.90785,-0.58156 4.3295,-0.96931 1.42162,-0.38771 2.84325,-0.84006 4.20026,-1.357 1.42162,-0.51696 2.77865,-1.16313 4.07105,-1.80936 1.357,-0.64621 2.58478,-1.357 3.87716,-2.13244 1.22776,-0.84005 2.45554,-1.68009 3.61869,-2.58479 1.16316,-0.90466 2.26167,-1.87394 3.29562,-2.90786 1.09853,-0.96932 2.06781,-2.06784 3.03711,-3.16638 0.96927,-1.16312 1.87396,-2.32628 2.71402,-3.48944 0.12915,-0.19387 0.25859,-0.45232 0.38774,-0.64619 0.64617,-1.03392 1.29235,-2.06783 1.87392,-3.10176 0.71083,-1.29239 1.35704,-2.58479 1.9386,-3.94177 0.58159,-1.35702 1.09855,-2.71405 1.55089,-4.13566 0.45232,-1.35703 0.77542,-2.77864 1.09853,-4.200258 0.25859,-1.486258 0.51694,-2.90791 0.64619,-4.329528 0.12914,-1.486244 0.25857,-2.972503 0.25857,-4.394119 0,-1.033928 -0.0648,-2.06783 -0.12912,-3.101733 -0.12915,-1.486246 -0.32311,-2.9079 -0.51696,-4.329519 -0.25859,-1.486257 -0.58157,-2.907873 -0.96931,-4.329529 -0.45231,-1.356991 -0.90467,-2.778634 -1.42161,-4.135623 -0.51699,-1.357028 -1.16315,-2.714042 -1.80938,-4.006443 -0.71081,-1.292388 -1.42161,-2.584776 -2.19704,-3.812536 -0.84005,-1.22776 -1.68013,-2.390917 -2.5848,-3.554087 -0.96927,-1.098531 -1.93857,-2.19706 -2.97251,-3.29559 -0.51694,-0.516947 -1.09853,-1.098532 -1.6801,-1.615476 -2.90787,-2.2617 -5.945,-4.394159 -8.9821,-6.332732 -0.45233,-0.258574 -0.84005,-0.452342 -1.2924,-0.646212 -2.13246,-1.356992 -4.13566,-2.067831 -6.13885,-2.714007 z"
                                    />
                                </g>
                            </svg>
                            Nest.js
                        </Badge>
                        ,{" "}
                        <Badge href="https://www.prisma.io/" className="mr-1">
                            <svg
                                width="14"
                                height="14"
                                className="inline-block mr-1"
                                viewBox="0 0 159 194"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M2.39749 123.139C0.476293 126.272 0.506027 130.226 2.47414 133.331L38.0964 189.524C40.4083 193.171 44.8647 194.834 49.0006 193.593L151.798 162.754C157.408 161.071 160.23 154.813 157.778 149.494L91.6953 6.14463C88.4726 -0.846183 78.7573 -1.42002 74.734 5.14279L2.39749 123.139ZM89.9395 38.9158C88.535 35.6658 83.7788 36.1664 83.0817 39.6375L57.64 166.316C57.1035 168.987 59.6044 171.268 62.215 170.489L133.24 149.287C135.313 148.669 136.381 146.379 135.522 144.393L89.9395 38.9158Z"
                                    fill="#4C51BF"
                                />
                            </svg>
                            Prisma
                        </Badge>
                        ,{" "}
                        <Badge href="https://turbo.build/repo" className="ml-10">
                            <svg
                                className={"inline-block mr-1"}
                                width={14}
                                height={14}
                                viewBox={`0 0 20 30`}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <linearGradient
                                        id="logo-ring-gradient"
                                        x1="15.0234"
                                        y1="4.00556"
                                        x2="3.64419"
                                        y2="15.3847"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#0096FF"/>
                                        <stop offset="1" stopColor="#FF1E56"/>
                                    </linearGradient>
                                    <linearGradient id="gradient">
                                        <stop offset="0%" stopColor="#000000"/>
                                        <stop offset="25%" stopColor="#ffffff"/>
                                        <stop offset="85%" stopColor="#ffffff"/>
                                        <stop offset="100%" stopColor="#000000"/>
                                    </linearGradient>
                                    <mask id="logo-mask">
                                        <rect
                                            x="0"
                                            y="0"
                                            width={"26"}
                                            height="26"
                                            fill="url(#gradient)"
                                            transform="translate(-8,0)"
                                        />
                                    </mask>
                                </defs>
                                <g key="turborepo" className="z-0 relative">
                                    <path
                                        d="M13.9396 6.42181C9.79423 6.42181 6.42163 9.79441 6.42163 13.9398C6.42163 18.0852 9.79423 21.4578 13.9396 21.4578C18.085 21.4578 21.4576 18.0852 21.4576 13.9398C21.4576 9.79441 18.085 6.42181 13.9396 6.42181ZM13.9396 17.8304C11.7906 17.8304 10.049 16.0888 10.049 13.9398C10.049 11.7908 11.7906 10.0492 13.9396 10.0492C16.0886 10.0492 17.8302 11.7908 17.8302 13.9398C17.8302 16.0888 16.0886 17.8304 13.9396 17.8304Z"
                                        className="dark:fill-white fill-black"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M14.5697 5.187V2.38C20.6709 2.7062 25.5177 7.7574 25.5177 13.9398C25.5177 20.1222 20.6709 25.172 14.5697 25.4996V22.6926C19.1169 22.3678 22.7177 18.5682 22.7177 13.9398C22.7177 9.3114 19.1169 5.5118 14.5697 5.187ZM7.30928 19.6798C6.10388 18.2882 5.32688 16.5158 5.18828 14.5698H2.37988C2.52548 17.2928 3.61468 19.7638 5.32128 21.6664L7.30788 19.6798H7.30928ZM13.3097 25.4996V22.6926C11.3623 22.554 9.5899 21.7784 8.1983 20.5716L6.2117 22.5582C8.1157 24.2662 10.5867 25.354 13.3083 25.4996H13.3097Z"
                                        fill="url(#logo-ring-gradient)"
                                    />
                                </g>
                            </svg>
                            TurboRepo
                        </Badge>{" "}
                        and learning
                        <Badge
                            href={"https://flutter.dev"}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                id="logo_vector"
                                data-name="logo vector"
                                viewBox="0 0 300 371.43"
                                width={14}
                                height={14}
                                className="inline-flex mr-1"

                            >
                                <defs>
                                    <style>{".cls-2{clip-path:url(#clip-path)}.cls-4{fill:#54c5f8}"}</style>
                                    <clipPath id="clip-path">
                                        <path
                                            d="M300 171.43l-100 100 100 100H185.72l-42.86-42.86-57.15-57.15 100-100zM185.72 0L0 185.72l57.15 57.15L300 0z"
                                            fill="none"
                                        />
                                    </clipPath>
                                    <linearGradient
                                        id="linear-gradient"
                                        x1={6254.1}
                                        y1={5576.56}
                                        x2={6424.34}
                                        y2={5406.31}
                                        gradientTransform="matrix(.25 0 0 .25 -1404 -1054.53)"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset={0} stopColor="#1a237e" stopOpacity={0.4}/>
                                        <stop offset={1} stopColor="#1a237e" stopOpacity={0}/>
                                    </linearGradient>
                                    <radialGradient
                                        id="radial-gradient"
                                        cx={5649.77}
                                        cy={4319.41}
                                        r={1817.72}
                                        gradientTransform="matrix(.25 0 0 .25 -1404 -1054.53)"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset={0} stopColor="#fff" stopOpacity={0.1}/>
                                        <stop offset={1} stopColor="#fff" stopOpacity={0}/>
                                    </radialGradient>
                                </defs>
                                <g className="cls-2">
                                    <image
                                        width={125}
                                        height={97}
                                        transform="matrix(2.14 0 0 2.14 67.54 154.53)"
                                        xlinkHref="data:image/png;base64,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"
                                        style={{
                                            isolation: "isolate"
                                        }}
                                        opacity={0.2}
                                    />
                                    <path
                                        className="cls-4"
                                        d="M300 171.43L300 171.43 300 171.43 185.72 171.43 85.73 271.44 142.85 328.57 300 171.43z"
                                    />
                                </g>
                                <g className="cls-2">
                                    <path
                                        className="cls-4"
                                        d="M57.15 242.87L0 185.72 185.72 0 300 0 57.15 242.87z"
                                    />
                                </g>
                                <path
                                    fill="#01579b"
                                    className=""
                                    d="M142.85 328.57L185.72 371.44 300 371.44 300 371.44 200.01 271.44 142.85 328.57z"
                                />
                                <path
                                    fill="url(#linear-gradient)"
                                    className=""
                                    d="M142.85 328.57L227.61 299.24 200.01 271.44 142.85 328.57z"
                                />
                                <path
                                    transform="rotate(-45 142.862 271.435)"
                                    fill="#29b6f6"
                                    className=""
                                    d="M102.45 231.03H183.26V311.84000000000003H102.45z"
                                />
                                <path
                                    d="M300 171.43l-100 100 100 100H185.72l-42.86-42.86-57.15-57.15 100-100zM185.72 0L0 185.72l57.15 57.15L300 0z"
                                    fill="url(#radial-gradient)"
                                />
                                <style/>
                            </svg>
                            {" "}
                            Flutter
                        </Badge>{" "}and{" "}
                        <Badge href={"https://go.dev"}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height={14}
                                viewBox="16.8 16.1 72.9 27.6"
                                width={14}
                                className={"inline-flex mr-1"}
                            >
                                <switch>
                                    <g fill="#00acd7">
                                        <path
                                            d="M22.3 24.7c-.1 0-.2-.1-.1-.2l.7-1c.1-.1.2-.2.4-.2h12.6c.1 0 .2.1.1.2l-.6.9c-.1.1-.2.2-.4.2zM17 27.9c-.1 0-.2-.1-.1-.2l.7-1c.1-.1.2-.2.4-.2h16.1c.1 0 .2.1.2.2l-.3 1c0 .1-.2.2-.3.2zm8.5 3.3c-.1 0-.2-.1-.1-.2l.5-.9c.1-.1.2-.2.4-.2h7c.1 0 .2.1.2.2l-.1.8c0 .1-.1.2-.2.2zM62.1 24l-5.9 1.5c-.5.1-.6.2-1-.4-.5-.6-.9-1-1.7-1.3-2.2-1.1-4.4-.8-6.4.5-2.4 1.5-3.6 3.8-3.6 6.7 0 2.8 2 5.1 4.8 5.5 2.4.3 4.4-.5 6-2.3.3-.4.6-.8 1-1.3h-6.8c-.7 0-.9-.5-.7-1.1.5-1.1 1.3-2.9 1.8-3.8.1-.2.4-.6.9-.6h12.8c-.1 1-.1 1.9-.2 2.9-.4 2.5-1.3 4.9-2.9 6.9-2.5 3.3-5.8 5.4-10 6-3.5.5-6.7-.2-9.5-2.3-2.6-2-4.1-4.6-4.5-7.8-.5-3.8.7-7.3 3-10.3 2.5-3.3 5.8-5.4 9.9-6.1 3.3-.6 6.5-.2 9.3 1.7 1.9 1.2 3.2 2.9 4.1 5 .1.4 0 .5-.4.6z"/>
                                        <path
                                            d="M73.7 43.5c-3.2-.1-6.1-1-8.6-3.1-2.1-1.8-3.4-4.1-3.8-6.8-.6-4 .5-7.5 2.9-10.6 2.6-3.4 5.7-5.1 9.9-5.9 3.6-.6 7-.3 10 1.8 2.8 1.9 4.5 4.5 5 7.9.6 4.8-.8 8.6-4 11.9-2.3 2.4-5.2 3.8-8.4 4.5-1.1.2-2.1.2-3 .3zm8.4-14.2c0-.5 0-.8-.1-1.2-.6-3.5-3.8-5.5-7.2-4.7-3.3.7-5.4 2.8-6.2 6.1-.6 2.7.7 5.5 3.2 6.7 1.9.8 3.9.7 5.7-.2 2.9-1.4 4.4-3.7 4.6-6.7z"/>
                                    </g>
                                </switch>
                            </svg>
                            Go
                        </Badge>
                    </p>
                </div>
                <div className="flex items-start mt-5 w-full justify-start flex-col">
                    {/* <div className="flex flex-row items-center justify-start">
            <div className="aspect-square flex-none h-[10px] overflow-hidden relative w-2.5 will-change-transform bg-green-500 rounded-full"></div>
            <div className="flex flex-col justify-start shrink-0 opacity-100 ml-2 ">
              <p className="text-white">Available for new opportunities</p>
            </div>
          </div> */}
                    <br/>
                    <div className="flex flex-row mt-3 gap-3">
                        <a
                            href="https://github.com/phantomknight287"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center justify-start gap-2.5
              text-white transition duration-300 ease-in-out
              bg-neutral-700 hover:bg-neutral-900 rounded-md px-3 py-2.5
            "
                        >
                            <FiGithub className="text-white text-xl"/>
                        </a>
                        <a
                            href="mailto:phantomknight287@proton.me"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center justify-start gap-2.5
              text-white transition duration-300 ease-in-out
              bg-neutral-700 hover:bg-neutral-900 rounded-md px-3 py-2.5
            "
                        >
                            <AiOutlineMail className="text-white text-xl"/>
                        </a>
                    </div>
                </div>
                <div className="w-full h-[1px] "></div>
                <div className="mt-5">
                    <h1 className="text-2xl text-white mt-5 mb-5">Projects</h1>
                    <div className="flex flex-col">
                        {Projects.map((project) => (
                            <Link
                                className="proj group"
                                key={project.name.replace(" ", "-")}
                                href={`/project/${project.slug}`}
                            >
                                <article
                                    className="flex flex-row gap-0 items-center justify-between lg:justify-center mt-3 mb-3 w-full">
                                    <div
                                        className="flex flex-col justify-start opacity-100 flex-none shrink-0 h-auto relative whitespace-pre w-auto mr-3">
                                        <h1 className="text-lg font-medium leading-[1.3em] text-left text-gray-300 group-hover:text-white">
                                            {project.name}
                                        </h1>
                                    </div>
                                    <div
                                        className="w-full mr-2 border-y border-gray-700 rounded-2 transition duration-110 opacity-80 group-hover:border-white"></div>
                                    <AiOutlineRight
                                        className="text-gray-400 transition-all duration-[110ms] group-hover:text-white"
                                        size={20}
                                    />
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
