import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils';

enum CallStatus {
  INACTIVE = 'INACTIVE',
  CONNECTING = 'CONNECTING',
  ACTIVE = 'ACTIVE',
  FINISHED = 'FINISHED',
}

const Agent = ({ userName }: AgentProps) => {
  const callStatus = CallStatus.ACTIVE;
  const isSpeaking = true;
  const messages = [
    '您好，怎麼稱呼？',
    '我叫陳翰毅，很高興認識您！'
  ];
  const lastMessage = messages[messages.length - 1];

  return (
    <>
      <div className='call-view'>
        <div className="card-interviewer">
          <div className="avatar">
            <Image src="/ai-avatar.png" alt="vapi" width={65} height={54} className="object-cover" />
            {isSpeaking && <span className='animate-speak' />}
          </div>
          <h3>AI 面試官</h3>
        </div>

        <div className="card-border">
          <div className="card-content">
            <Image src="/user-avatar.png" alt="user avatar" width={540} height={540} className="rounder-full object-cover size-[120px]" />
            <h3>{userName}</h3>
          </div>
        </div>
      </div>

      {messages.length > 0 && (
        <div className="transcript-border">
          <div className="transcript">
            <p 
              key={lastMessage} 
              className={cn('transition-opacity duration-500 opacity-0', 'animate-fadeIn opacity-100')}
            >
              {lastMessage}
            </p>
          </div>
        </div>
      )}

      <div className="w-full flex justify-center">
        {callStatus !== 'ACTIVE' ? (
          <button className='relative btn-call'>
            <span className={cn('absolute animate-ping rounded-full opacity-75', callStatus !== 'CONNECTING' && 'hidden')} />

            <span>
              {callStatus === 'INACTIVE' || callStatus === 'FINISHED' ? 'Call' : '...'}
            </span>
          </button>
        ) : (
          <div className="btn-disconnect">
            結束通話
          </div>
        )}
      </div>
    </>
  )
}

export default Agent