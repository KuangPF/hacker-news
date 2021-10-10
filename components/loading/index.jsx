// import Style from './index.module.less'

const Loading = () => {
  return (
    <div className="relative inline-block w-20 h-20">
      <div
        className="loading-div-children"
        style={{ borderColor: 'var(--color-scale-yellow-4) transparent transparent transparent', animationDelay: '-0.45s' }}
      />
      <div
        className="loading-div-children"
        style={{ borderColor: 'var(--color-scale-yellow-4) transparent transparent transparent', animationDelay: '-0.3s' }}
      />
      <div
        className="loading-div-children"
        style={{ borderColor: 'var(--color-scale-yellow-4) transparent transparent transparent', animationDelay: '-0.15s' }}
      />
      <div
        className="loading-div-children"
        style={{ borderColor: 'var(--color-scale-yellow-4) transparent transparent transparent' }}
      />
    </div>
  )
}

export default Loading
