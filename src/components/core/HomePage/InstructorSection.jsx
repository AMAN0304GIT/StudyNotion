import React from 'react'
import Instructor from '../../../assets/Images/Instructor.png'
import HighlightText from './HighlightText'
import { FaArrowRight } from 'react-icons/fa'
import CTAButton from './Button'
const InstructorSection = () => {
  return (
    <div>
      <div className='flex lg:flex-row flex-col gap-20 items-center '>
            <div className='lg:w-[50%] mt-16'>
                <img src={Instructor} alt="Instructor" className='shadow-white shadow-[-20px_-20px_0px_0px]' />
            </div>

            <div className='lg:w-[50%] flex flex-col gap-10'>
                <div className='text-4xl font-semibold font-inter lg:w-[50%]'>
                    Become an 
                    <HighlightText text={" instructor"}/>
                </div>
                <div>
                    <p className='font-medium text-[16px] w-[90%] text-justify text-richblack-300 font-inter'>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
                </div>
                
                <div className='w-fit place-self-center lg:self-start '>
                    <CTAButton active={true} linkto={"/signup"}>
                        <div className='flex gap-3 items-center '>
                            Start Teaching Today 
                            <FaArrowRight/>
                        </div>
                    </CTAButton>
                </div>
            </div>
      </div>
    </div>
  )
}

export default InstructorSection
