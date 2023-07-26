import React from 'react';


// import iconImage from '../public/images/profile.png';
import GridButton from '../../../components/User/GridButton';
import iconImage from '../../../public/images/post/profile1.png';

const Profile = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Grid Buttons Example</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <GridButton
          title="0"
          paragraph="Days Since Joining"
          icon={iconImage}
        />
        <GridButton
          title="Button 2"
          paragraph="This is button 2 description."
        />
        <GridButton
          title="Button 3"
          paragraph="This is button 3 description."
          icon={iconImage}
        />
        <GridButton
          title="Button 4"
          paragraph="This is button 4 description."
        //   icon={iconImage}
        />
      </div>
    </div>
  );
};

export default Profile;
