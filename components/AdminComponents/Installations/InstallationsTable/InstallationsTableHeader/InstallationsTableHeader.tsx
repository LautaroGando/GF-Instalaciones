
import InstallationsTableHeaders from '@/utils/InstallationsTableHeaders'
import React from 'react'

const InstallationsTableHeader = () => {
  return (
    <thead>
      <tr className="sticky top-0 bg-bgColor border-b border-primaryColor">
        {InstallationsTableHeaders.map((item, i) => (
          <th key={i} className="px-4 h-12 whitespace-nowrap border-b border-primaryColor">
            {item}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default InstallationsTableHeader