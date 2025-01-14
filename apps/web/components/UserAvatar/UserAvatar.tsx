import React from 'react';
import Identicon from 'react-identicons';
import { addEllipsis } from 'utils/strings';
import { useTheme } from 'next-themes';

type UserAvatarProps = {
  address: string;
  size?: number;
  ellipsis?: boolean;
  bg?: string;
};

const UserAvatar = (props: UserAvatarProps) => {
  const { theme } = useTheme();
  const {
    address,
    size = 30,
    bg = theme === 'dark' ? '#EB5F49' : '#EFBB73',
    ellipsis = true,
  } = props;

  return (
    <div className="flex items-center">
      <div className="mr-2 rounded-full w-[30px] h-[30px] overflow-hidden lg:flex">
        <Identicon string={address} size={size} bg={bg} />
      </div>
      {ellipsis && <p className="text-xs font-black">{addEllipsis(address)}</p>}
      {!ellipsis && <p className="text-xs font-black">{address}</p>}
    </div>
  );
};

export default UserAvatar;
