import classnames from 'classnames'

export function Header() {
  return (
    <header
      className={classnames(
        'sticky flex items-center top-0 h-14 px-4 box-border z-10 md:px-5',
      )}
    ></header>
  )
}
