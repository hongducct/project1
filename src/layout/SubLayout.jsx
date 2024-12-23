import SubHeader from '@/components/SubHeader'
import React from 'react'

const SubLayout = ({children,title}) => {
  return (
    <div>
      <SubHeader title={title} />
      <main className="mt-14 bg-pink-50">{children}</main>
    </div>
  )
}

export default SubLayout