import { useState } from 'react'
import Image from 'next/image';
import { ContentViewContainer } from './styles';


const ContentView = () => {
  const [iconsEnabled, setIconsEnabled] = useState<any>({ gridView: false, listView: false })
  return (
    <ContentViewContainer>
      <p>Ver en: </p>
      <div>
        <div className='view-icons-container' onClick={() => setIconsEnabled({ gridView: true, listView: false })}>
          <Image
            src={`/images/icons/${iconsEnabled.gridView ? 'grid-enabled' : 'grid-disabled'}.svg`}
            alt={''}
            width={20}
            height={20}
          />
        </div>
        <div className='view-icons-container' onClick={() => setIconsEnabled({ gridView: false, listView: true })}>
          <Image
            src={`/images/icons/${iconsEnabled.listView ? 'list-enabled' : 'list-disabled'}.svg`}
            alt={''}
            width={20}
            height={20}
          />
        </div>
      </div>
    </ContentViewContainer>
  )
}

export default ContentView