import Carousel from "../main-components/Carousel"
import ContentBox from "../main-components/ContentBox"
import CollapseBox from "../main-components/CollapseBox"
import { spaPjtContent,djangoPjtContent,profilePjtContent,textPjtContent, salePjtContent } from "../main-components/Contents"
import { spaPjtStack,djangoPjtStack,profilePjtStack,textPjtStack, salePjtStack } from "../main-components/Contents"


export default function Projects() {
    return (
        <div id="projects">
            <div className="container">
                <div className="d-flex flex-column">
                    <h2 className="fs-1 fw-bold mt-5">PROJECTS</h2>
                    {/* Personal Project */}
                    {/* <div className="pt-3">
                        <Project 
                            projectName="Personal Project" carouselId="spaProject" carouselImg='./image/reactSpaProject.png'
                            contentTitle="SPA 게시판" contentAbout={spaPjtContent} stackContent={spaPjtStack} contentLink="https://github.com/riumr/browse_supabase"
                            siteLink="https://supabasehost.web.app"
                        />
                        <CollapseBox boxId="spaPjt" boxImg='./image/spa-collapse-img.png'/>
                    </div> */}
                    {/* Team Project */}
                    <div className="pt-3">
                        {/* 글자가 전체 화면의 너비 늘리는 문제 발생 */}
                        <Project
                            projectName="Django 팀 프로젝트" carouselId="teamProject" carouselImg='./image/javachip-item.jpg'
                            contentTitle="원두판매사이트" contentAbout={djangoPjtContent} stackContent={djangoPjtStack} contentLink="https://github.com/riumr/Java-chip"
                            siteLink=""
                        />
                        {/* <CollapseBox boxId="teamPjt" boxImg="./image/javachip-item.jpg"/> */}
                    </div>
                    {/* profile page */}
                    <div className="pt-3">
                        <Project
                            projectName="Profile Page" carouselId="portfolio" carouselImg='./image/p_1.png'
                            contentTitle="포트폴리오" contentAbout={profilePjtContent} stackContent={profilePjtStack} contentLink="https://github.com/riumr/riumr.github.io"
                            siteLink=""
                        />
                    </div>
                    {/* new project */}
                    <div className="pt-3">
                        <Project
                            projectName="Team 프로젝트-프론트엔드 담당" carouselId="saleProject" carouselImg='./image/p_1.png'
                            contentTitle="할인식품예약구매 웹 앱" contentAbout={salePjtContent} stackContent={salePjtStack} contentLink=""
                            siteLink=""
                        />
                    </div>
                    {/* Text 분석 프로젝트 */}
                    {/* <div className="pt-3">
                        <Project
                            projectName="Text Analysis Project" carouselId="textAnalysis" carouselImg='./image/textProject.png'
                            contentTitle="민원 데이터 시각화" contentAbout={textPjtContent} stackContent={textPjtStack} contentLink="https://github.com/analysistTH/complaintsAnaysis"
                            siteLink=""
                        />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

const Project = (props) => {
    const carouselId = props.carouselId
    const carouselImg = props.carouselImg
    const contentTitle = props.contentTitle
    const contentAbout = props.contentAbout
    const stackContent = props.stackContent
    const contentLink = props.contentLink
    const siteLink = props.siteLink
    return (
        <div className="pt-3">
            <h3 className="semibold">{props.projectName}</h3>
            <div className="style-project-box row py-2 px-2">
                <Carousel carouselId={carouselId} carouselImg={carouselImg}/>
                <ContentBox title={contentTitle} contentAbout={contentAbout} stackContent={stackContent} link={contentLink} site={siteLink}/>
            </div>
        </div>
    )
}