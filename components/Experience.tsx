import { Fragment } from 'react';

type Props = {
  date: string;
  title: string;
  subTitle: string;
  desc?: string;
  data?: {
    section: string;
    list: string[];
  }[];
};

const Experience = ({
  date = '',
  title = '',
  subTitle = '',
  desc = '',
  data = [],
}: Props) => {
  return (
    <div className='timeline-item'>
      <span className='date'>{date}</span>
      <h4>
        {title} - <span>{subTitle}</span>
      </h4>
      <p>{desc}</p>
      {data.map((value) => (
        <Fragment key={value.section}>
          <span>{value.section}:</span>
          <ul>
            {value.list?.map((listValue) => (
              <li key={listValue}>- {listValue}</li>
            ))}
          </ul>
        </Fragment>
      ))}
    </div>
  );
};

export default Experience;
