import React, { memo } from 'react';
import './index.less';
export interface ButtonProps {
  type?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
/** 按钮组件 */
const Button: React.FC<ButtonProps> = (props) => {
  const { type = 'default', children, onClick } = props;
  return (
    <button
      type="button"
      className={`dumi-btn ${type ? 'dumi-btn-' + type : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default memo(Button);
