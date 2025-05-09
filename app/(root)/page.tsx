import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import InterviewCard from '../components/InterviewCard'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <section className='card-cta'>
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>透過AI面試練習&反饋，為面試做好萬全準備</h2>
          <p className="text-lg">
            模擬實際面試對談並快速得到反饋
          </p>
          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href="/interview">開始面試</Link>
          </Button>
        </div>

        <Image src="/robot.png" alt='robo-dude' width={400} height={400} className='max-sm:hidden' />
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>您的面試</h2>

        <div className="interviews-section">
          {dummyInterviews.map((interview) =>(
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>來場面試</h2>

        <div className="interviews-section">
          {dummyInterviews.map((interview) =>(
            <InterviewCard {...interview} key={interview.id} />
          ))}

          {/* <p>沒有可進行的面試</p> */}
        </div>
      </section>
    </>
  )
}

export default page