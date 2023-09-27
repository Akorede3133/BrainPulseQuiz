import { Spin } from 'antd';
const Loading = () => {
  return (
    <div className="min-h-screen flex gap-4 flex-col justify-center items-center">
      <Spin />
      <p className="text-2xl text-white">Fetching your questions...</p>
    </div>
  )
}

export default Loading