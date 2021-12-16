import React, {CSSProperties, FC} from 'react'

interface Props {
  style: CSSProperties
}

const dovecotLogo: FC<Props> = ({style}) => (
  <svg
    id="Ebene_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 500 200.1"
    xmlSpace="preserve"
    style={style}
  >
    <style>{'.st0{fill:#fff}.st1{fill:#4b9bd7}'}</style>
    <path
      className="st0"
      d="M78.5 191.6c-6.9-5.7-10.4-13-10.4-21.6 0-19.2 17.4-29.9 36.3-29.9s36.4 10.6 36.4 29.9c0 19.2-17.5 30.1-36.4 30.1-10.3-.1-19-2.8-25.9-8.5m41.2-10.2c3.8-3 5.6-6.8 5.6-11.5 0-10.9-10.5-16.2-20.9-16.2s-20.8 5.2-20.8 16.2 10.4 16.2 20.8 16.2c6.5 0 11.5-1.6 15.3-4.7M173.7 198.4c-1.4 0-2.8-1.1-3.2-1.8-12.1-21.9-23.8-42.9-28.2-51.1-.9-1.6.3-4.2 3.5-4.2h9.7c1.7 0 2.5.5 3.2 1.8l17.6 32.1 17.3-32c.7-1.6 2-1.8 3.2-1.8h10c2.8 0 3.7 2.9 2.9 4.3-1.4 2.4-16.4 29.5-27.5 50.9-.4.7-1.5 1.8-3.2 1.8h-5.3zM218.6 144.6c0-1.7 1.6-3.2 3.4-3.2h50.3c1.8 0 3.4 1.5 3.4 3.2v6.5c0 1.7-1.6 3.2-3.4 3.2h-38.5v8h24.1c1.8 0 3.4 1.5 3.4 3.2v6.3c0 1.7-1.6 3.2-3.4 3.2h-24.1v10.5h40.9c1.8 0 3.4 1.5 3.4 3.2v6.3c0 1.7-1.6 3.2-3.4 3.2H222c-1.8 0-3.4-1.5-3.4-3.2v-50.4zM339.2 196.1c-5.5 2.6-11.7 3.9-18.5 3.9-18.8 0-35.9-10.9-35.9-29.9s17.1-30.1 35.9-30.1c11.7 0 23.3 4.1 30.3 13.2 1 1.2.9 2.6-.7 4-.9.7-5.3 3.6-6.8 4.5s-3.7 1-4.7-.3c-4.2-5.4-11.2-7.6-18.1-7.6-10.2 0-20.4 5.5-20.4 16.2 0 10.6 10.2 16.2 20.4 16.2 11.4 0 17.9-7.6 19.2-9.4 1.3-1.8 3.1-2.2 5.1-1 .9.6 6.4 4.1 7.3 4.9.9.8 1.3 2.2.3 3.6-3.5 5-7.9 9.1-13.4 11.8M372.2 191.6c-6.9-5.7-10.4-13-10.4-21.6 0-19.2 17.4-29.9 36.3-29.9s36.4 10.6 36.4 29.9c0 19.2-17.5 30.1-36.4 30.1-10.3-.1-19-2.8-25.9-8.5m41.2-10.2c3.8-3 5.6-6.8 5.6-11.5 0-10.9-10.5-16.2-20.9-16.2s-20.8 5.2-20.8 16.2 10.4 16.2 20.8 16.2c6.5 0 11.5-1.6 15.3-4.7M462.1 154.9h-19.2c-1.8 0-3.4-1.5-3.4-3.2v-7c0-1.7 1.6-3.2 3.4-3.2h53.7c1.8 0 3.4 1.5 3.4 3.2v7c0 1.7-1.6 3.2-3.4 3.2h-19.2v40.3c0 1.7-1.6 3.2-3.4 3.2h-8.4c-1.8 0-3.4-1.5-3.4-3.2v-40.3h-.1zM15.2 155.1v29.6h12.1c10.1 0 17.1-4.8 17.1-14.7 0-9.5-7.4-14.8-17.1-14.8H15.2v-.1zm35.6-5.8c6.1 5.4 9.1 12.4 9.1 20.8 0 18.3-14.2 28.4-32.7 28.4H3.4c-1.8 0-3.4-1.5-3.4-3.2v-50.6c0-1.7 1.6-3.2 3.4-3.2h23.8c9.5-.2 17.5 2.4 23.6 7.8"
    />
    <path
      className="st1"
      d="M344.1 3.1 427.7 67c3.7 2.8 3.7 8.3 0 11.1l-46.6 35.7c-3.6 2.7-8.6 2.7-12.1 0l-73-55.7c-3.6-2.7-8.5-2.7-12.1 0l-74.8 57c-2.5 1.9-6 1.9-8.5 0l-5.4-4.1c-2.6-2-2.6-5.9 0-7.9l130.7-100c5.4-4.1 12.8-4.1 18.2 0zM247.7 44.1l-53.6-41c-5.4-4.1-12.8-4.1-18.2 0L45.2 103c-2.6 2-2.6 5.9 0 7.9l5.4 4.1c2.5 1.9 6 1.9 8.5 0l64.8-49.4c3.6-2.7 8.6-2.7 12.1 0l42.9 32.8c3.6 2.7 8.6 2.7 12.1 0l56.7-43.3c3.7-2.7 3.7-8.2 0-11z"
    />
  </svg>
)

export default dovecotLogo
