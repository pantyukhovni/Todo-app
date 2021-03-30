import c from './row.module.css';

const Row = (props) => {
  return <div className={c.wrapper}>{props.children}</div>;
};
export default Row;
