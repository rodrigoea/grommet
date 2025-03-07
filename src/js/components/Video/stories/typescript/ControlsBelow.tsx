import React from 'react';

import { Box, Video } from 'grommet';

export const ControlsBelow = () => (
  <Box align="center" pad="large">
    <Video
      skipInterval={2}
      controls={{ position: 'below', items: ['captions'] }}
    >
      <source src="small.mp4" type="video/mp4" />
      <source
        src="http://techslides.com/demos/sample-videos/small.webm"
        type="video/webm"
      />
      <source
        src="http://techslides.com/demos/sample-videos/small.ogv"
        type="video/ogg"
      />
      <source
        src="http://techslides.com/demos/sample-videos/small.3gp"
        type="video/3gp"
      />
      <track kind="subtitles" srcLang="en" src="small-en.vtt" />
    </Video>
  </Box>
);

ControlsBelow.storyName = 'Controls below';

export default {
  title: 'Media/Video/Controls below',
};
