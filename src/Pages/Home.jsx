import React from 'react'
import {FaArrowRight} from "react-icons/fa"
import { Link } from 'react-router-dom'
import HighlightText from '../components/core/HomePage/HighlightText'
import CTAButton from '../components/core/HomePage/Button'
import boxoffice from '../assets/Images/boxoffice.png' 
import CodeBlocks from '../components/core/HomePage/CodeBlocks'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import TimelineSection from '../components/core/HomePage/TimelineSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'
const Home = () => {
  return (
    <div>

      {/*Section 1 */}
        <div className='relative mx-auto flex flex-col w-11/12 items-center text-white justify-between max-w-maxContent gap-8'>

            <Link to= {"/signup"}>
                <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit shadow-sm shadow-white'>
                    <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]  transition-all duration-200  group-hover:bg-richblack-900'>
                        <p>Become an Instructor</p>
                        <FaArrowRight />
                    </div>
                </div>
            </Link>

            <div className=' mt-7 text-center text-4xl font-semibold'>
                Empower Your Future with
                <HighlightText text={" Coding Skills"} />
            </div>

            <div className=' mt-3 w-[90%]  text-center text-lg font-bold text-richblack-300 '>
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
            </div>

            <div className='flex flex-row gap-7 mt-8'>
            <CTAButton active={true}  linkto= {"/signup"}>
                Learn More 
            </CTAButton>

            <CTAButton active={false}  linkto= {"/signup"}>
                Book a Demo
            </CTAButton>

            </div>
            

            {/* shadow left */}
            <div className='mt-16 shadow-blue-100 shadow-[8px_-29px_92px_-48px]'>
                
                <img src={boxoffice} alt="" />
            </div>

            {/* code Section1 */}
            
            <div>
            <CodeBlocks
                position={"lg:flex-row"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Unloack Your 
                        <HighlightText text={" coding potential "}/>
                        with our online courses.
                    </div>
                }
                subheading = {
                   "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you." 
                }
                ctabtn1={
                    {
                        btnText: "Try it Yourself",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "Learn More",
                        linkto: "/signup",
                        active: false,
                    }
                }

                codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n<link rel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a>\n</h1>\n<nav><a href="one/">One</a>\n<a href="two/">Two</a>\n<a href="three/">Three</a>\n</nav>`}
                codeColor={"text-yellow-25"}
                backgroundGradient={<div className='codeblock1 absolute'></div>}
            />

           
            </div>

            {/* code Section2 */}
            
            <div>
            <CodeBlocks
                position={"lg:flex-row-reverse md:flex-row-reverse" }
                heading={
                    <div className='w-[100%] lg:w-[50%] text-4xl font-semibold'>
                        Start
                        <HighlightText text={" coding in seconds "}/>
                    </div>
                }
                subheading = {
                   "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson." 
                }
                ctabtn1={
                    {
                        btnText: "Continue Lesson",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "Learn More",
                        linkto: "/signup",
                        active: false,
                    }
                }

                codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n<link rel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a>\n</h1>\n<nav><a href="one/">One</a>\n<a href="two/">Two</a>\n<a href="three/">Three</a>\n</nav>`}
                codeColor={"text-white"}
                backgroundGradient={<div className='codeblock2 absolute'></div>}
            />

           
            </div>   

            <ExploreMore />

        </div>

      {/*Section 2 */}
            
           <div className='bg-pure-greys-5 text-richblack-700' >
              <div className='homepage_bg h-[200px]'>
                    <div className='w-11/12 max-w-maxContent flex flex-col items-center gap-5 mx-auto'>
                      <div className='lg:h-[150px]'></div>
                        <div className='flex flex-row gap-7 text-white lg:mt-[20px] mt-[30px]'>
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className='flex items-center gap-3'>
                                   Explore Full Catalog
                                   <FaArrowRight/> 
                                </div>

                            </CTAButton>
                            <CTAButton active={false} linkto={"/signup"}>
                                <div className='items-center'>
                                    Learn More
                                </div>
                            </CTAButton>
                        </div>

                    </div>
             </div>

             <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center gap-7 lg:mt-[80px] '>
                    <div className='flex lg:flex-row flex-col items-center lg:gap-3'>
                        <div className='font-inter font-semibold text-4xl lg:w-[45%] '>
                            Get the skills you need for a 
                            <HighlightText text={" job that is in demand."}/>
                        </div>

                        <div className='flex flex-col items-start gap-10 lg:w-[40%] lg:text-start text-center text-richblack-700 font-medium mx-auto leading-6 text-base lg:mt-[3.75rem] mt-[1.25rem] '>
                        The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                         <div className='w-fit place-self-center lg:place-self-start'>
                             <CTAButton active={true} linkto={"/signup"}>
                                <div className='flex gap-3 '>
                                Learn More
                                </div>
                             </CTAButton>
                         </div>
                        
                        </div>
                    </div>


                    <TimelineSection />
   
                    <LearningLanguageSection />   
             </div>

           </div> 

    
      {/*Section 3 */}
      <div className='relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white'>
                <InstructorSection/>

                <h2 className='text-center text-4xl font-semibold mt-16'>Review from other Learners</h2>
                {/* review slider code */}
      </div>
    
      {/*Section 4 */}
           <Footer/>     
    </div>
  )
}

export default Home
