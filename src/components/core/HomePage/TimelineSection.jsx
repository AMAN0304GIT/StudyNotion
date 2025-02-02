import React from 'react'
import Logo1 from '../../../assets/TimeLineLogo/Logo1.svg'
import Logo2 from '../../../assets/TimeLineLogo/Logo2.svg'
import Logo3 from '../../../assets/TimeLineLogo/Logo3.svg'
import Logo4 from '../../../assets/TimeLineLogo/Logo4.svg'
import TimelineImage from '../../../assets/Images/TimelineImage.png'
const timeline = [
    {
        Logo: Logo1,
        heading: "Leadership",
        Description :"Fully committed to the success company",
    },
    {
        Logo: Logo2,
        heading: "Responsibility",
        Description :"Students will always be our top priority",
    },
    {
        Logo: Logo3,
        heading: "Flexibility",
        Description :"The ability to switch is an important skills",
    },
    {
        Logo: Logo4,
        heading: "Solve the problem",
        Description :"Code your way to a solution",
    },
]


const TimelineSection = () => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row gap-20 mb-20 items-center'>
        <div className='lg:w-[45%] flex flex-col gap-14 lg:gap-6 sm:gap-3'>
            {
                timeline.map( (element,index) =>{
                    return (
                        <div className='flex flex-row lg:gap-3' key={index}>
                            <div className='w-[50px] h-[50px] bg-white flex items-center'>
                                <img src ={element.Logo} alt=''/>
                            </div>

                            <div>
                                <h2 className='font-semibold text-[18px] font-inter'>{element.heading}</h2>
                                <p className='text-base font-inter'>{element.Description}</p>
                            </div>
                        </div>
                        

                    )
                    
                } )
            }
            
        </div>
            
  {/* image left wali */}

        <div className='relative shadow-blue-200 shadow-[-118px_11px_38px_-124px]'>
            <img src={TimelineImage} alt="TimelineImage" 
                className=' object-cover h-fit'
            />

            <div className='absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-8 left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-md'>
                <div className='flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7'>
                    <p className='text-3xl font-bold font-inter'>10</p>
                    <p className='text-caribbeangreen-500 text-sm font-inter'>Years of Experience</p>
                </div>

                <div className='flex gap-5 items-center px-7'>
                    <p className='text-3xl font-bold font-inter'>250</p>
                    <p className='text-caribbeangreen-500 text-sm font-inter'>Types of Courses</p>
                </div>
            </div>

        </div>



      </div>
    </div>
  )
}

export default TimelineSection
