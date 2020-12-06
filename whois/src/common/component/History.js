import { Space, Tag, Timeline, Typography } from 'antd';
import { diffWords } from 'diff';
import React, { createRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Bottom = React.forwardRef((props, ref) => 
  <div {...props} ref={ref} />
);

/**
 * @param {object} param
 * @param {object[]} param.items 
 * @param {boolean} param.isFetched 
 * @param {()=>void} param.dispatchHistory
 */
export default function History({ items, isFetched, dispatchHistory }) {

  const thisRef = createRef();
  useEffect(() => {
    if( !thisRef?.current ) return;
    if( !isFetched ) return;

    const elem = thisRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      if( !entry?.isIntersecting ) return;
      console.log( entry )
      dispatchHistory();
    }, {threshold: 1});
    observer.observe( elem );
    return () => observer.unobserve( elem );
  }, [thisRef, isFetched, dispatchHistory]);

  return (
    <>
      <Timeline>
        {items.map( item => (
          <Timeline.Item key={item.id}>
            <Space direction="vertical">
              <Space style={{ flexWrap:'wrap' }}>
              <Tag>
                  <Link to={`/user/${item.editor}`}>
                    수정한 사람: {item.editor}
                  </Link>
                </Tag>
                <Tag>
                  <Link to={`/user/${item.name}`}>
                    수정한 사람: {item.name}
                  </Link>
                </Tag>
                <Tag>날짜: {item.date}</Tag>
                <Tag>속성: {COLUMN_MAP[item.column]}</Tag>
              </Space>
              <Space>
                {getDiff(item).map((diff, index) => (
                  <Typography.Text
                  key={index}
                  delete={diff.removed}
                  style={{
                    color: diff.added ? 'blue' : diff.removed ? 'red' : 'grey',
                  }}
                  >
                    {diff.value}
                  </Typography.Text>
                ))}
              </Space>
            </Space>
          </Timeline.Item>
        ))}
      </Timeline>
      <Bottom ref={thisRef} />
    </>
  );
}

const COLUMN_MAP = {
  tag: '태그',
  department: '소속',
};

/**
 * 
 * @param {object} param
 * @param {'tag' | 'department'} param.column
 * @param {string} param.before
 * @param {string} param.after
 * @returns {Array<{value: string, removed?: boolean, added?: boolean}>}
 */
function getDiff({ column, before, after }) {
  if( column === 'tag' ) {
    const tags1 = before.split(',').map(item => item.trim());
    const tags2 = after.split(',').map(item => item.trim());
    if( tags1.length > tags2.length ) {
      const tag = tags1.find( item => !tags2.includes( item ) );
      if( tag ) {
        return [{ value: tag, removed: true }];
      }
    } else if( tags1.length < tags2.length ) {
      const tag = tags2.find( item => !tags1.includes( item ) );
      if( tag ) {
        return [{ value: tag, added: true }];
      }
    }
  }

  return diffWords( before, after );
}