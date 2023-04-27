import { useState } from 'react';
import { GoThreeBars } from 'react-icons/go';

function MoreBtn() {
  const [showList, setShowList] = useState(false);

  function handleClick() {
    setShowList(!showList);
  }

  return (
    <div className='relative'>
      <button className='flex items-center text-[16px] mt-[10px] p-3' onClick={handleClick}>
        <span className='text-[25px]'><GoThreeBars/></span>
        <span className='ml-4'>More</span>
      </button>
      {showList && (
        <ul className='absolute bottom-[40px] left-[53px] bg-white'>
          <li>Switch Acoount</li>
          <li>Logout</li>
        </ul>
      )}
    </div>
  );
}

export default MoreBtn;