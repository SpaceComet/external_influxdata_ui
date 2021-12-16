import React, {CSSProperties, FC} from 'react'

interface Props {
  style: CSSProperties
}

const dockerLogo: FC<Props> = ({style}) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 1316 1126"
    xmlSpace="preserve"
    style={style}
  >
    <style>
      {
        '.st0{fill:#0296f3}.st1{fill:#0095f3}.st3{fill:#0196f3}.st4{fill:#0397f3}'
      }
    </style>
    <g id="_x30_g7aUg.tif">
      <path
        className="st0"
        d="M0 1001.9c1.3-6 2.4-12 3.9-17.8 12.1-45.9 55.5-79.9 102.8-81.3 26.6-.8 50.7 6 72 22.1.5.4 1.1.7 2.4 1.5.1-2.2.3-3.9.3-5.6v-91.5c0-13.6 8.4-22.4 20.8-22.4 12.3 0 20.8 8.8 20.8 21.8 0 51.6.1 103.3 0 154.9 0 15.1.6 30.4-1.1 45.4-5.2 46.3-40.5 84-86.8 94.2-56.2 12.3-113.7-21.2-130.3-76.1-2.1-6.9-3.2-14.2-4.8-21.3v-23.9zm181.3 12.2c0-38.2-31.4-69.7-69.5-69.9-38.5-.2-70 31.1-70.1 69.7-.1 38.7 31 70 69.6 70 38.7.1 70-31.2 70-69.8z"
      />
      <path
        className="st1"
        d="M764.9 0c3.9 2.4 5.1 5.9 5.1 10.5-.2 24.6-.1 49.3-.1 73.9 0 7.3-2.5 9.9-9.9 9.9h-84.4c-7.4 0-9.8-2.5-9.8-10 0-24.6.1-49.3-.1-73.9 0-4.6 1.2-8.1 5.2-10.5 31.3.1 62.7.1 94 .1z"
      />
      <path
        d="M977.7 323.2c-18.9-30.1-24.7-62.5-19.6-96.8 4.8-32.4 17.7-61.5 38-87.9 46.7 25.1 76.5 62.4 86.2 114.9 11.8-1 23.5-2.3 35.3-2.8 22.6-.9 44.9 1.7 66.3 9.5 11.1 4 21.1 9.9 29.7 17.9 1.1 1 1.5 3.8 1 5.4-13.5 41.1-41.9 67.9-81.4 83.6-21.3 8.5-43.8 11.3-66.6 10.8-4.5-.1-6.2 1.4-7.8 5.4-17.8 44.8-38.7 88-65.7 128.1-63.9 95-151.8 156.2-261.6 186.8-44 12.2-88.8 18.9-134.3 21.1-39.2 1.9-78.3.7-117.2-4.2-36.1-4.6-71.4-12.5-105.3-26.1-49.5-20.1-85.6-54.9-111.7-100.8-22.1-38.9-35.2-81-43-124.9-5.2-29.1-7.1-58.5-7.8-88-.5-21.1 15.2-34.7 34.6-34.7 218 .3 435.9.3 653.9.1 24.5 0 48.3-4.8 70.9-14.5 1.8-.8 3.6-1.7 6.1-2.9z"
        style={{
          fill: '#0096f3',
        }}
      />
      <path
        className="st3"
        d="M946.4 1035.1c3.2 11.3 8.9 20.2 16.4 27.9 26 26.9 70.5 28.6 97 3.5 9.5-9 22.2-8.7 30.3.1 8 8.7 7.1 22.2-2.3 30.8-23.4 21.4-51.3 30.2-82.6 28.3-45.2-2.8-85.5-34.8-98.8-78.1-19.8-64.9 21.7-132.1 88.5-143.4 60.9-10.3 119.3 31.7 128.7 92.5.7 4.8 1.1 9.6 1.2 14.4.4 16.1-7.5 23.9-23.7 23.9h-131c-7.6.1-15.2.1-23.7.1zm.6-41.6h132.6c-3.6-26.2-37.4-49.9-69.2-48.8-36.8 1.3-60.8 30.5-63.4 48.8z"
      />
      <path
        className="st3"
        d="M769.5 1017c-7.6 5-15 9.6-22 14.6-1.4 1-2.2 3.6-2.2 5.4-.2 22.3 0 44.6-.1 67-.1 11.3-6.7 19.4-17.1 21.4-11.8 2.3-23.4-6.6-24.2-18.6-.2-2.2-.1-4.3-.1-6.5V832.4c0-3.3-.1-6.7.6-9.9 2.3-9.7 12.1-16.4 22.3-15.4 10 1 18.1 9.1 18.4 19.1.3 11.2.2 22.3.2 33.5v123.4c2.1-1.3 3.8-2.2 5.3-3.2 37.5-24.4 75.1-48.8 112.6-73.2 10.9-7.1 23.7-4.5 30.1 5.9 6.2 10 3.6 21.9-6.3 28.4-25.7 16.7-51.4 33.4-77.1 50-1.5 1-3 2-4.7 3.2 12.3 13.8 24.2 27.3 36.1 40.7 16.4 18.4 32.8 36.8 49.1 55.3 7.1 8 8 17.5 2.8 25.7-5.1 8.1-14.1 11.9-23.3 8.9-3.9-1.3-7.7-4-10.5-7.1-28.6-31.8-57-63.9-85.5-95.8-1.3-1.5-2.7-3-4.4-4.9zM356.5 902.7c62.3.1 111.5 49.6 111.4 112-.1 61.7-49.9 111.1-111.9 111.1-62.1-.1-111.4-49.7-111.2-112.1.2-62.2 49.4-111.1 111.7-111zm69.6 111.5c0-38.4-31.5-70-69.9-70-38.2 0-69.5 31.2-69.8 69.6-.3 38.4 31.2 70.1 69.7 70.1 38.6.1 69.9-31.1 70-69.7z"
      />
      <path
        className="st0"
        d="M600.7 902.7c27.1-.2 50.9 8.5 71.5 26.1 7.4 6.3 9.7 14.2 7.1 23.3-3.9 13.7-20.6 18.6-32.6 10-4.5-3.2-8.8-6.7-13.5-9.3-42.8-24.2-98.6 5.5-102.4 54.4-2.4 30.4 9.8 54 36.6 68.3 26.7 14.3 52.9 11.5 77-7.4 9.9-7.8 23.2-7.2 30.6 1.6 7.7 9.1 6.1 22.1-3.7 30.6-40 34.6-102.6 34.2-143.5-1.4-33.1-28.9-45.3-65.9-36.3-108.5 8.8-41.5 35.2-69 75.3-82.6 10.7-3.6 22.4-4.3 33.6-6.3l.3 1.2zM1189.3 926.7c2.1-1.4 3.8-2.6 5.5-3.8 24.1-17.1 51-22.6 80.1-19.4 11.2 1.3 22.1 3.3 31.6 9.9 9.4 6.6 12.1 17.2 7 26.8-5.2 9.8-15.6 13.6-26.4 9.5-16.6-6.4-33.4-7.3-50.3-1.7-28.5 9.4-47.6 35.8-47.8 65.9-.1 30.5 0 61-.1 91.5 0 9.3-6.3 17.3-14.9 19.7-9.4 2.6-19.1-1-23.7-9.4-1.9-3.5-3.1-7.9-3.1-11.9-.2-59.7-.2-119.3-.1-179 0-11.7 7.6-20.7 17.8-21.8 11.2-1.2 20.6 4.8 23.2 15.2.8 2.4.8 5.1 1.2 8.5z"
      />
      <path
        className="st4"
        d="M471.2 208h-42c-7 0-9.9-2.7-9.9-9.6-.1-25.1-.1-50.3 0-75.4 0-6.7 2.8-9.5 9.5-9.5 28.5-.1 56.9-.1 85.4 0 6.6 0 9.3 2.8 9.4 9.6.1 25.1.1 50.3 0 75.4 0 6.6-2.9 9.5-9.5 9.5h-42.9zM595.2 208h-42c-7.2 0-10-2.7-10-10-.1-24.8-.1-49.6 0-74.4 0-7.4 2.7-10.1 9.9-10.1 28.1-.1 56.3 0 84.4 0 7.3 0 10 2.7 10 10 .1 24.8 0 49.6 0 74.4 0 7.5-2.8 10.1-10.4 10.1h-41.9z"
      />
      <path
        className="st0"
        d="M471.5 227H514c6.9 0 9.6 2.7 9.7 9.7 0 25 .1 50 0 74.9 0 7-2.6 9.8-9.7 9.8-28.3.1-56.6.1-84.9 0-7 0-9.7-2.8-9.7-9.8-.1-25-.1-50 0-74.9 0-7 2.8-9.7 9.7-9.7h42.4zM595.9 227h42c6.9 0 9.7 2.7 9.7 9.7.1 25 .1 50 0 74.9 0 7-2.7 9.8-9.7 9.8-28.3.1-56.6.1-84.9 0-7 0-9.7-2.8-9.8-9.7-.1-25-.1-50 0-74.9 0-7.1 2.9-9.8 10.2-9.8h42.5zM349.5 227H392c6.7 0 9.5 2.7 9.6 9.3.1 25.3.1 50.6 0 75.9 0 6.4-2.8 9.1-9.2 9.2-28.6.1-57.3.1-85.9 0-6.4 0-9.1-2.9-9.1-9.3-.1-25.3-.1-50.6 0-75.9 0-6.3 2.9-9.1 9.3-9.1 14.1-.1 28.5-.1 42.8-.1zM841.6 227h42c7.3 0 10 2.6 10 9.9v74.4c0 7.4-2.6 10.1-9.9 10.1-28.1.1-56.3.1-84.4 0-7.3 0-10-2.7-10-10-.1-24.8-.1-49.6 0-74.4 0-7.6 2.7-10 10.4-10h41.9z"
      />
      <path
        className="st3"
        d="M717.9 208h-41.5c-8 0-10.6-2.4-10.6-10.3v-73.9c0-7.7 2.4-10.3 10.1-10.3h83.9c7.6 0 10.1 2.6 10.1 10.3v73.4c0 8.3-2.4 10.8-10.6 10.8h-41.4z"
      />
      <path
        className="st1"
        d="M717.9 321.3H676c-7.7 0-10.1-2.4-10.1-10.1v-73.9c0-7.7 2.5-10.3 10-10.3h83.9c7.6 0 10.1 2.5 10.1 10.2v74.4c0 7.1-2.6 9.7-9.5 9.7-14.2.1-28.3 0-42.5 0z"
      />
      <path
        d="M1239 1095.4c8.2 0 14.7 6.3 14.8 14.3.1 8.1-6.3 14.5-14.5 14.7-8.3.1-15.2-6.5-15.2-14.6.1-7.9 6.8-14.3 14.9-14.4zm6.8 22.6c4.2-3 5.4-7.9 3.1-13-2.3-5-7.4-7.4-12.8-6-4.4 1.1-7.8 5.4-8.1 10.3-.3 4.8 2.5 9.7 6.9 11.1 3.9 1.2 8.1 1.9 10.9-2.4z"
        style={{
          fill: '#119cf4',
        }}
      />
      <path
        d="M1245.9 1117.9c-1.5-1.2-3-2.4-4.4-3.6-1.2-1-2.3-2-3.4-3.1-1.2 2.7-2 4.4-2.8 6.2-.6-2-1.4-3.9-1.6-6-.3-2.6-.1-5.3-.1-8.5 3 0 5.8-.3 8.5.2 1.2.2 3.2 2.8 3 3.1-3.1 4.2.9 7.9.8 11.7-.1.1 0 0 0 0z"
        style={{
          fill: '#129df4',
        }}
      />
    </g>
  </svg>
)

export default dockerLogo
