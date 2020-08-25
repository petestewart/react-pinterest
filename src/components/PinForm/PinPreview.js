import React, {useState} from 'react';

const PinPreview = (props) => {
  const [preview, setPreview] = useState(null);

  if (props.url) setPreview(
    <img src={props.url} alt="" />
  )

  return (
    {preview}
  )
};
