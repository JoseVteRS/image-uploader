

const KIND = {
	warning: 'bg-yellow-200 text-yellow-700',
	info: 'bg-sky-200 text-sky-700',
	error: 'bg-red-200 text-red-700',
	success: 'bg-green-200 text-green-700'
};

const Notice = ({title, text, kind = "info"}) => {
  return (
    <div className={`${KIND[kind]} rounded-xl p-5 w-full mb-5`}>
        <p className='text-xl font-bold mb-3'>{title}</p>
        <p>{text}</p>
    </div>
  )
}

export default Notice