import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import WorkIcon from '@material-ui/icons/Work';
import './MyTimeline.css';
import { Typography } from '@material-ui/core';

const MyTimeline = ({title,children,icon}) => {
    return (
        <Timeline className={'timeline'}>
            {/* item header */}

      <TimelineItem className={'timeline_firstitem'}>
        <TimelineSeparator>
          <TimelineDot className={"timeline_dot_header"}>
              {<WorkIcon/>}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><Typography variant='h6' className={'timeline_header'}>{'title'}</Typography></TimelineContent>
      </TimelineItem>
      <TimelineItem>
          {children}
          {/* reminding item */}
       <CustomtimelineSeparator/>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
    </Timeline>  
    );
}

export const CustomtimelineSeparator = ()=>(
    <TimelineSeparator className={'separator_padding'}>
    <TimelineDot className={'timeline_dot'}/>
    <TimelineConnector/>
  </TimelineSeparator>
);
export default MyTimeline;
