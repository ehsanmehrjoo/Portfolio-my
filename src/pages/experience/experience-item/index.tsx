import Description from './description'
import ScreenShots from './screen-shots';

const index = () => {
  return (
    <div className='flex flex-col gap-10'>
      <Description />
      <ScreenShots />
    </div>
  );
};

export default index;
