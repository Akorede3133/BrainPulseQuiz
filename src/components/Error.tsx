import { Result } from 'antd';

const Error = () => {
  return (
    <div>
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
    />
    </div>
  )
}

export default Error