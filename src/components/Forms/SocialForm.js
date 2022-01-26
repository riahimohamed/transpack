import React from 'react'
import { SocialIcon } from "react-native-elements";

const SocialForm = ({type, title, size = 20, iconType="font-awesome"}) => {
    return (
          <SocialIcon
              button
              iconSize={size}
              iconType={iconType}
              style={{ paddingHorizontal: 10 }}
              title={title}
              type={type}
            />
    )
}

export default SocialForm;
